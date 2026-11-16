import { ArrowDown, ArrowUpRight, Asterisk, Layers3 } from "lucide-react";
import { site } from "../data/site";
import { useT } from "../i18n";

export function Hero() {
  const t = useT();
  const marqueeItems = t.services.items.map((service) => service.title);

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="hero-halo pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="grid-surface pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-48 top-28 hidden h-[620px] w-[620px] rounded-full border border-white/[0.045] lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-56 hidden h-[420px] w-[420px] rounded-full border border-acid/[0.06] lg:block"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="animate-fade-up flex items-center justify-between gap-6 border-b border-white/[0.08] pb-5">
          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid" />
            </span>
            <span className="eyebrow text-white/65">{t.hero.eyebrow}</span>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <span className="eyebrow">Austria</span>
            <span className="h-px w-5 bg-white/20" />
            <span className="eyebrow">Worldwide</span>
          </div>
        </div>

        <div className="grid items-center gap-16 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
          <div className="lg:col-span-7">
            <h1 className="animate-fade-up animate-delay-100 text-[clamp(2.55rem,11.5vw,3.25rem)] font-medium leading-[0.91] tracking-tightest sm:text-[3.5rem] md:text-[3.6rem] lg:text-[clamp(4rem,7.15vw,6.6rem)]">
              {t.hero.titleLines.map((line, index) => (
                <span
                  key={line}
                  className={`block ${index === t.hero.titleLines.length - 1 ? "serif-accent pb-[0.08em] pr-2 text-acid" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p className="animate-fade-up animate-delay-200 mt-8 max-w-[550px] text-pretty text-[15px] leading-relaxed text-muted sm:text-base">
              {t.hero.subtitle}
            </p>

            <div className="animate-fade-up animate-delay-300 mt-9 flex flex-wrap items-center gap-3">
              <a href="#proyectos" className="btn-primary group">
                {t.hero.primaryCta}
                <ArrowDown
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
              <a href="#contacto" className="btn-secondary group">
                {t.hero.secondaryCta}
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="btn-arrow"
                />
              </a>
            </div>

            <div className="animate-fade-up animate-delay-500 mt-11 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
              <span>{t.hero.meta.strategy}</span>
              <span className="h-1 w-1 rounded-full bg-acid/60" />
              <span>{t.hero.meta.design}</span>
              <span className="h-1 w-1 rounded-full bg-acid/60" />
              <span>{t.hero.meta.engineering}</span>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-300 relative mx-auto w-full max-w-[540px] lg:col-span-5 lg:mt-4">
            <div
              className="pointer-events-none absolute -inset-16 rounded-full bg-acid/[0.055] blur-[70px]"
              aria-hidden="true"
            />

            <div className="relative rounded-[30px] border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-1.5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[23px] border border-white/[0.075] bg-[#090c0a]/95">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                    <span className="h-1.5 w-1.5 rounded-full bg-acid/70" />
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/35">
                    LIMINAL BROS / SYSTEM_01
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-acid/80">
                    <span className="h-1 w-1 rounded-full bg-acid animate-pulse-dot" />
                    Live
                  </span>
                </div>

                <div className="orb-grid relative h-[350px] overflow-hidden sm:h-[390px]">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(215,255,79,0.08),transparent_38%)]"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-4 top-4 flex items-start justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                    <span>Digital craft</span>
                    <span className="text-right">
                      Lat -34.60
                      <br />
                      Lon -58.38
                    </span>
                  </div>

                  <div className="absolute left-1/2 top-1/2 h-[286px] w-[286px] -translate-x-1/2 -translate-y-1/2 sm:h-[306px] sm:w-[306px]">
                    <div className="absolute inset-0 rounded-full border border-white/[0.055]" />
                    <div className="absolute inset-[30px] rounded-full border border-dashed border-white/[0.075]" />
                    <div className="absolute inset-[62px] rounded-full border border-acid/[0.08]" />

                    <div className="absolute inset-0 animate-orbit-spin">
                      <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid shadow-[0_0_16px_rgba(215,255,79,0.7)]" />
                    </div>
                    <div className="absolute inset-[30px] animate-orbit-spin-slow">
                      <span className="absolute bottom-[14px] right-[22px] h-1.5 w-1.5 rounded-full bg-white/60" />
                    </div>

                    <span className="absolute -left-1 top-[38%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                      Strategy
                    </span>
                    <span className="absolute -right-2 top-[62%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                      Design
                    </span>
                    <span className="absolute bottom-0 left-[40%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                      Build
                    </span>

                    <div
                      className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/20 blur-2xl"
                      aria-hidden="true"
                    />
                    <div className="absolute left-1/2 top-1/2 flex h-[156px] w-[156px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-acid/25 bg-[radial-gradient(circle_at_35%_28%,rgba(215,255,79,0.2),rgba(13,17,10,0.98)_62%)] shadow-[inset_0_0_40px_rgba(215,255,79,0.06),0_0_60px_rgba(215,255,79,0.08)] sm:h-[168px] sm:w-[168px]">
                      <div className="absolute inset-2 rounded-full border border-white/[0.06]" />
                      <span className="serif-accent relative -mt-3 text-[104px] leading-none text-acid">
                        L
                      </span>
                      <span className="absolute bottom-7 h-1.5 w-1.5 rounded-full bg-acid shadow-[0_0_12px_rgba(215,255,79,0.9)]" />
                      <span className="absolute -bottom-6 font-mono text-[7px] uppercase tracking-[0.28em] text-white/30">
                        Liminal core
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.15em]">
                    <span className="flex items-center gap-2 text-white/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse-dot" />
                      System online
                    </span>
                    <span className="text-white/25">Scroll to explore ↓</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-white/[0.07] border-t border-white/[0.07]">
                  {[
                    ["Socios", "02"],
                    ["Servicios", "06"],
                    ["Visión", "01"],
                  ].map(([label, value]) => (
                    <div key={label} className="px-4 py-4">
                      <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-bone">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.07] bg-white/[0.015] px-4 py-3 font-mono text-[8px] tracking-[0.12em]">
                  <span className="text-acid/80">&gt; building_with_intent_</span>
                  <span className="text-white/20">LIMINAL.SYS</span>
                </div>
              </div>
            </div>

            <div className="animate-float-soft absolute -right-4 top-[22%] hidden items-center gap-2.5 rounded-full border border-white/10 bg-ink-850/90 px-4 py-2 shadow-xl backdrop-blur-xl sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse-dot" />
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/60">
                {site.availability}
              </span>
            </div>

            <div className="absolute -bottom-6 left-5 hidden items-center gap-2 rounded-full border border-white/10 bg-ink-850/90 px-3.5 py-2 shadow-xl backdrop-blur-xl sm:flex">
              <Layers3 size={12} className="text-acid" strokeWidth={1.6} />
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/50">
                Product + engineering
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-white/[0.08] bg-white/[0.012] py-4">
        <div className="mask-fade-edges overflow-hidden">
          <div className="marquee-track flex w-max animate-marquee-left items-center">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-7 px-7 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40"
                aria-hidden={index >= marqueeItems.length}
              >
                <Asterisk size={12} className="text-acid/70" strokeWidth={1.4} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
