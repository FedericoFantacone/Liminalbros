// Cloudflare Pages Function - endpoint de contacto.
// Recibe un POST JSON y envia un email a los destinatarios configurados.
//
// Proveedores (en orden): Resend (RESEND_API_KEY), MailChannels (gratis, sin key).

interface Env {
  RESEND_API_KEY?: string;
  RECIPIENTS?: string;
  FROM_EMAIL?: string;
  FROM_NAME?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
  "bot-field"?: string;
}

const DEFAULT_RECIPIENTS = ["fede26f23@gmail.com"];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(body: any, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

function getRecipients(env: Env): string[] {
  if (env.RECIPIENTS && env.RECIPIENTS.trim()) {
    return env.RECIPIENTS.split(",").map((e) => e.trim()).filter(Boolean);
  }
  return DEFAULT_RECIPIENTS;
}

function validate(payload: ContactPayload): string | null {
  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const projectType = (payload.projectType || "").trim();
  const message = (payload.message || "").trim();

  if (name.length < 2) return "Nombre invalido.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return "Email invalido.";
  if (!projectType) return "Tipo de proyecto requerido.";
  if (message.length < 10) return "Mensaje demasiado corto.";
  if (payload["bot-field"]) return "Spam detectado.";
  return null;
}

function buildText(payload: ContactPayload): string {
  return [
    "Nueva propuesta recibida desde el formulario de Liminal Code",
    "",
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Empresa: ${payload.company || "-"}`,
    `Tipo de proyecto: ${payload.projectType}`,
    "",
    "Mensaje:",
    payload.message,
    "",
    `Enviado: ${new Date().toISOString()}`,
  ].join("\n");
}

async function sendWithResend(env: Env, payload: ContactPayload, recipients: string[]): Promise<{ ok: boolean; detail: string }> {
  const fromEmail = env.FROM_EMAIL || "onboarding@resend.dev";
  const fromName = env.FROM_NAME || "Liminal Code";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${fromName} <${fromEmail}>`,
        to: recipients,
        reply_to: payload.email,
        subject: `Nueva propuesta: ${payload.projectType} - ${payload.name}`,
        text: buildText(payload),
      }),
    });
    const detail = await res.text().catch(() => "");
    return { ok: res.ok, detail: detail || `HTTP ${res.status}` };
  } catch (e: any) {
    return { ok: false, detail: e?.message || String(e) };
  }
}

async function sendWithMailChannels(env: Env, payload: ContactPayload, recipients: string[]): Promise<{ ok: boolean; detail: string }> {
  const fromEmail = env.FROM_EMAIL || "contact@liminalcode.pages.dev";
  const fromName = env.FROM_NAME || "Liminal Code";
  try {
    const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        personalizations: [{ to: recipients.map((email) => ({ email })) }],
        from: { email: fromEmail, name: fromName },
        reply_to: { email: payload.email, name: payload.name },
        subject: `Nueva propuesta: ${payload.projectType} - ${payload.name}`,
        content: [{ type: "text/plain", value: buildText(payload) }],
      }),
    });
    const detail = await res.text().catch(() => "");
    return { ok: res.ok, detail: detail || `HTTP ${res.status}` };
  } catch (e: any) {
    return { ok: false, detail: e?.message || String(e) };
  }
}

export const onRequestOptions = async () => {
  return new Response(null, { status: 204, headers: corsHeaders });
};

export const onRequestPost = async (context: any) => {
  const { request } = context;
  const env = (context.env || {}) as Env;

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ ok: false, error: "JSON invalido." }, 400);
  }

  const validationError = validate(payload);
  if (validationError) {
    return jsonResponse({ ok: false, error: validationError }, 400);
  }

  const recipients = getRecipients(env);
  const details: string[] = [];

  // 1. Resend
  if (env.RESEND_API_KEY) {
    const r = await sendWithResend(env, payload, recipients);
    if (r.ok) return jsonResponse({ ok: true, provider: "resend" }, 200);
    details.push(`resend: ${r.detail}`);
  }

  // 2. MailChannels
  const mc = await sendWithMailChannels(env, payload, recipients);
  if (mc.ok) return jsonResponse({ ok: true, provider: "mailchannels" }, 200);
  details.push(`mailchannels: ${mc.detail}`);

  console.error("Contact delivery failed:", details.join(" | "));
  return jsonResponse({ ok: false, error: "No se pudo enviar el mensaje.", detail: details.join(" | ") }, 502);
};
