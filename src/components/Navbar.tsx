import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { site } from "../data/site";
import { useT } from "../i18n";

export function Navbar() {
  const t = useT();
  const navItems = t.ui.nav;
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => toggleRef.current?.focus({ preventScroll: true }), 0);
  }, []);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(`#${item.id}`))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -54% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    if (!open) return;

    const menu = document.getElementById("mobile-menu");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const getFocusable = () =>
      Array.from(
        document.querySelectorAll<HTMLElement>(
          'header a[href], header button, #mobile-menu a[href], #mobile-menu button',
        ),
      ).filter((element) => element.offsetParent !== null && !element.hasAttribute("disabled"));

    const firstMenuLink = menu?.querySelector<HTMLElement>("a[href]");
    window.requestAnimationFrame(() => firstMenuLink?.focus({ preventScroll: true }));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && (current === first || !menu?.contains(current))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open, closeMenu]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled || open
            ? "border-b border-white/[0.08] bg-ink-950/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell">
          <div className="relative flex h-[76px] items-center justify-between">
            <a
              href="/"
              className="relative z-10 text-bone transition-opacity hover:opacity-75"
              aria-label="LIMINAL BROS — Ir al inicio"
            >
              <Logo />
            </a>

            <nav
              aria-label={t.ui.menuLabel}
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
            >
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={`/#${item.id}`}
                    className={`nav-link ${isActive ? "text-bone" : ""}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher className="hidden sm:flex" />
              <a
                href="/#contacto"
                className="group hidden items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-[12px] font-medium text-ink transition-all duration-300 hover:bg-acid sm:inline-flex"
              >
                {t.ui.contactCta}
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:border-white/35 lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? t.ui.menuClose : t.ui.menuOpen}
              >
                <span className="sr-only">{open ? t.ui.menuClose : t.ui.menuOpen}</span>
                <span
                  className={`absolute h-px w-4 bg-current transition-all duration-300 ${
                    open ? "rotate-45" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`absolute h-px w-4 bg-current transition-all duration-300 ${
                    open ? "-rotate-45" : "translate-y-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className="h-px origin-left bg-acid/70 transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t.ui.menuLabel}
        className={`fixed inset-0 z-[60] bg-ink-950 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="hero-halo absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="grid-surface absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative flex h-full flex-col px-6 pb-8 pt-28">
          <div className="flex-1">
            <p className="eyebrow mb-8">{t.ui.menuLabel}</p>
            <nav aria-label={t.ui.menuLabel} className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-white/10 py-4"
                  tabIndex={open ? 0 : -1}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-acid/70">
                      0{index + 1}
                    </span>
                    <span className="text-[clamp(1.8rem,7vw,2.8rem)] font-medium tracking-[-0.04em] transition-colors group-hover:text-acid">
                      {item.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.4}
                    className="text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-acid"
                  />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-8">
            <LanguageSwitcher className="w-full justify-center" />
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-bone"
              tabIndex={open ? 0 : -1}
            >
              <Mail size={15} strokeWidth={1.6} />
              {site.email}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-bone"
              tabIndex={open ? 0 : -1}
            >
              <MessageCircle size={15} strokeWidth={1.6} />
              WhatsApp
            </a>
            <a
              href="/#contacto"
              onClick={closeMenu}
              className="btn-primary mt-3 w-full"
              tabIndex={open ? 0 : -1}
            >
              {t.hero.secondaryCta}
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
