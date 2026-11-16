import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Linkedin,
  Lock,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { site } from "../data/site";
import { useT } from "../i18n";
import { Reveal } from "./Reveal";

type FormValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormStatus = "idle" | "sending" | "ready" | "sent" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

function validate(values: FormValues, errors: ReturnType<typeof useT>["contact"]["errors"]): FormErrors {
  const next: FormErrors = {};

  if (values.name.trim().length < 2) next.name = errors.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) next.email = errors.email;
  if (!values.projectType) next.projectType = errors.projectType;
  if (values.message.trim().length < 10) next.message = errors.message;

  return next;
}

export function Contact() {
  const t = useT();
  const c = t.contact;
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [mailtoHref, setMailtoHref] = useState("");

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (status === "ready" || status === "error") setStatus("idle");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateField(event.target.name as keyof FormValues, event.target.value);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values, c.errors);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalidName = Object.keys(nextErrors)[0];
      const form = event.currentTarget;
      const firstInvalid = form.elements.namedItem(firstInvalidName);
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }

    setErrors({});

    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const response = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error("Form submission failed");
        setStatus("sent");
        setValues(initialValues);
      } catch {
        setStatus("error");
      }
      return;
    }

    const subject = `${c.briefTitle} · ${values.projectType} · ${values.name}`;
    const body = [
      `Nombre: ${values.name}`,
      `Email: ${values.email}`,
      `Empresa: ${values.company || "-"}`,
      `Tipo de proyecto: ${values.projectType}`,
      "",
      values.message,
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailtoHref(href);
    setStatus("ready");
    window.location.href = href;
  };

  const inputClass = (field: keyof FormValues) =>
    `field ${errors[field] ? "border-[#ff9d9d]/50 focus:border-[#ff9d9d]/70" : ""}`;

  const linkedinChannels = t.about.items
    .filter((profile) => profile.linkedin)
    .map((profile) => ({
      icon: Linkedin,
      label: `${c.channels.linkedin} · ${profile.name.split(" ")[0]}`,
      value: profile.name,
      href: profile.linkedin as string,
      external: true,
    }));

  const channels = [
    { icon: Mail, label: c.channels.email, value: site.email, href: `mailto:${site.email}`, external: false },
    { icon: MessageCircle, label: c.channels.whatsapp, value: site.whatsappDisplay, href: `https://wa.me/${site.whatsapp}`, external: true },
    ...linkedinChannels,
  ];

  return (
    <section id="contacto" className="section-pad relative overflow-hidden">
      <div className="hero-halo pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="grid-surface pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[8%] top-24 h-72 w-72 rounded-full bg-acid/[0.07] blur-[100px]" aria-hidden="true" />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">04</span>
                <span className="h-px w-10 bg-acid/40" />
                <span className="eyebrow">{t.contact.label}</span>
              </div>

              <h2 className="text-balance text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.06em]">
                {c.title}
              </h2>

              <p className="mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-muted">
                {c.subtitle}
              </p>

              <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-acid/15 bg-acid/[0.05] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse-dot" />
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-acid/80">
                  {c.availability}
                </span>
              </div>

              <div className="mt-10 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="flex items-center gap-3.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/45 transition-all duration-300 group-hover:border-acid/25 group-hover:bg-acid/[0.07] group-hover:text-acid">
                          <Icon size={15} strokeWidth={1.5} />
                        </span>
                        <span>
                          <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                            {channel.label}
                          </span>
                          <span className="mt-1 block text-[13px] text-white/65 transition-colors group-hover:text-bone">
                            {channel.value}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.6}
                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid"
                      />
                    </a>
                  );
                })}
              </div>

              <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">
                {c.responseTime}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="relative rounded-2xl border border-white/[0.09] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
                <div className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                      {c.briefTitle}
                    </p>
                    <p className="mt-1.5 text-sm text-bone">{c.briefSubtitle}</p>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-acid/60">
                    {c.briefIndex}
                  </span>
                </div>

                <form onSubmit={onSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="field-label">
                        {c.fields.name} <span className="text-acid/70">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={onChange}
                        className={inputClass("name")}
                        placeholder={c.fields.namePlaceholder}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        required
                      />
                      {errors.name && <p id="name-error" className="mt-2 text-[11px] text-[#ff9d9d]">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="field-label">
                        {c.fields.email} <span className="text-acid/70">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={onChange}
                        className={inputClass("email")}
                        placeholder={c.fields.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        required
                      />
                      {errors.email && <p id="email-error" className="mt-2 text-[11px] text-[#ff9d9d]">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="field-label">
                        {c.fields.company} <span className="text-white/20">{c.fields.companyOptional}</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={values.company}
                        onChange={onChange}
                        className="field"
                        placeholder={c.fields.companyPlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="field-label">
                        {c.fields.projectType} <span className="text-acid/70">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={values.projectType}
                        onChange={onChange}
                        className={`${inputClass("projectType")} select-arrow pr-10 ${
                          values.projectType ? "text-bone" : "text-white/30"
                        }`}
                        aria-invalid={Boolean(errors.projectType)}
                        aria-describedby={errors.projectType ? "projectType-error" : undefined}
                        required
                      >
                        <option value="" disabled>
                          {c.fields.projectTypePlaceholder}
                        </option>
                        {c.projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p id="projectType-error" className="mt-2 text-[11px] text-[#ff9d9d]">
                          {errors.projectType}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex items-baseline justify-between gap-4">
                        <label htmlFor="message" className="field-label">
                          {c.fields.message} <span className="text-acid/70">*</span>
                        </label>
                        <span className="font-mono text-[8px] text-white/20">
                          {values.message.length} / 1200
                        </span>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        maxLength={1200}
                        value={values.message}
                        onChange={onChange}
                        className={`${inputClass("message")} resize-none`}
                        placeholder={c.fields.messagePlaceholder}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        required
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-2 text-[11px] text-[#ff9d9d]">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-center gap-2 text-[10px] leading-relaxed text-white/30">
                      <Lock size={12} strokeWidth={1.5} />
                      {c.privacy}
                    </p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary group w-full shrink-0 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                    >
                      {status === "sending" ? c.sending : c.submit}
                      <Send
                        size={15}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>

                  <div aria-live="polite" aria-atomic="true">
                    {(status === "ready" || status === "sent") && (
                      <div
                        role="status"
                        className="mt-6 flex items-start gap-3 rounded-xl border border-acid/20 bg-acid/[0.055] p-4"
                      >
                        <CheckCircle2 size={17} strokeWidth={1.7} className="mt-0.5 shrink-0 text-acid" />
                        <div>
                          <p className="text-[13px] font-medium text-bone">
                            {status === "sent" ? c.sentTitle : c.readyTitle}
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-white/45">
                            {status === "sent"
                              ? c.sentBody
                              : `${c.readyBody} `}
                            {status === "ready" && (
                              <a
                                href={mailtoHref}
                                className="text-acid underline decoration-acid/30 underline-offset-2 hover:decoration-acid"
                              >
                                {c.readyLink}
                              </a>
                            )}
                            {status === "ready" && "."}
                          </p>
                        </div>
                      </div>
                    )}

                    {status === "error" && (
                      <div
                        role="alert"
                        className="mt-6 rounded-xl border border-[#ff9d9d]/20 bg-[#ff9d9d]/[0.05] p-4 text-[12px] text-[#ffb3b3]"
                      >
                        {c.error}{" "}
                        <a className="underline underline-offset-2" href={`mailto:${site.email}`}>
                          {site.email}
                        </a>
                        .
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
