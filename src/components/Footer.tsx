import { ArrowUp, ArrowUpRight, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "../data/site";
import { useT } from "../i18n";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050606]">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-acid/[0.025] blur-[100px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid gap-10 border-b border-white/[0.08] py-14 md:grid-cols-12 md:py-16">
          <div className="md:col-span-5">
            <a href="/" aria-label="LIMINAL CODE — Ir al inicio" className="inline-block">
              <Logo />
            </a>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-muted">
              {t.footer.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse-dot" />
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                {t.footer.availability}
              </span>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow">{t.footer.navLabel}</p>
            <nav aria-label={t.footer.navLabel} className="mt-5 flex flex-col gap-3">
              {t.ui.nav.map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  className="w-fit text-[13px] text-muted transition-colors hover:text-bone"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">{t.footer.contactLabel}</p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="w-fit text-[13px] text-muted transition-colors hover:text-bone"
              >
                {site.email}
              </a>
              <span className="text-[13px] text-muted">{site.location}</span>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {t.about.items
                  .filter((profile) => profile.linkedin)
                  .map((profile) => (
                    <a
                      key={profile.id}
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${profile.name} en LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all hover:border-acid/30 hover:text-acid"
                    >
                      <Linkedin size={14} strokeWidth={1.5} />
                    </a>
                  ))}
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escribir por WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all hover:border-acid/30 hover:text-acid"
                >
                  <MessageCircle size={14} strokeWidth={1.5} />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  aria-label="Enviar un email"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all hover:border-acid/30 hover:text-acid"
                >
                  <Mail size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-[10px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono tracking-[0.08em]">
            © {year} LIMINAL CODE. {t.footer.copyright}
          </p>
          <p className="font-mono tracking-[0.08em] text-white/55">
            {t.footer.final}
          </p>
          <a
            href="/"
            className="group inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.12em] transition-colors hover:text-acid"
          >
            {t.footer.backToTop}
            <ArrowUp
              size={12}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="relative -mb-3 select-none overflow-hidden border-t border-white/[0.06] pt-6 sm:-mb-6">
          <div
            aria-hidden="true"
            className="footer-wordmark text-[clamp(5.5rem,16vw,14rem)] font-semibold leading-[0.72] tracking-[-0.085em]"
          />
          <a
            href="/#contacto"
            className="group absolute bottom-9 right-0 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-acid sm:flex"
          >
            {t.footer.cta}
            <ArrowUpRight size={13} strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </footer>
  );
}
