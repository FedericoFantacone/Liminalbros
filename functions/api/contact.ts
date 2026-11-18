// Cloudflare Pages Function - endpoint de contacto.

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

const DEFAULT_RECIPIENTS = ["tino_boschiazzo@hotmail.com", "federicofantacone1@gmail.com"];

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

async function sendWithResend(env: Env, payload: ContactPayload, recipients: string[]): Promise<Response> {
  const fromEmail = env.FROM_EMAIL || "onboarding@resend.dev";
  const fromName = env.FROM_NAME || "Liminal Code";
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
  return res;
}

async function sendWithMailChannels(env: Env, payload: ContactPayload, recipients: string[]): Promise<Response> {
  const fromEmail = env.FROM_EMAIL || "contact@liminalcode.pages.dev";
  const fromName = env.FROM_NAME || "Liminal Code";
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
  return res;
}

export const onRequestPost = async (context: any) => {
  const { request } = context;
  const env = (context.env || {}) as Env;

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "JSON invalido." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const validationError = validate(payload);
  if (validationError) {
    return new Response(JSON.stringify({ ok: false, error: validationError }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const recipients = getRecipients(env);

  try {
    let res: Response;
    if (env.RESEND_API_KEY) {
      res = await sendWithResend(env, payload, recipients);
    } else {
      res = await sendWithMailChannels(env, payload, recipients);
    }

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Email provider error:", res.status, detail);
      return new Response(JSON.stringify({ ok: false, error: "No se pudo enviar el mensaje." }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact function error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Error interno." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
