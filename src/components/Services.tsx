import type { PointerEvent } from "react";
import {
  ArrowUpRight,
  Building2,
  Code2,
  Compass,
  LayoutTemplate,
  PlugZap,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useT } from "../i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  "01": Code2,
  "02": LayoutTemplate,
  "03": Building2,
  "04": Workflow,
  "05": PlugZap,
  "06": Compass,
};

function handleSpotlight(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
}

export function Services() {
  const t = useT();

  return (
    <section id="servicios" className="section-pad relative border-b border-white/[0.06]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(215,255,79,0.045),transparent_26%)]"
        aria-hidden="true"
      />
      <div className="shell relative">
        <SectionHeading
          index="01"
          label={t.services.label}
          title={
            <>
              {t.services.title.replace(t.services.titleHighlight, "").trim()}{" "}
              <span className="serif-accent text-acid">{t.services.titleHighlight}</span>
            </>
          }
          description={t.services.description}
        />

        <div className="mt-14 grid gap-3 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[service.id];
            return (
              <Reveal key={service.id} delay={index * 55} className="h-full">
                <a
                  href="#contacto"
                  onPointerMove={handleSpotlight}
                  className="spotlight group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(150deg,rgba(255,255,255,0.025),rgba(255,255,255,0.008))] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-acid/25 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 group-hover:border-acid/25 group-hover:bg-acid/[0.08] group-hover:text-acid">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.15em] text-white/25 transition-colors duration-300 group-hover:text-acid/60">
                      /{service.id}
                    </span>
                  </div>

                  <h3 className="mt-10 max-w-[290px] text-[20px] font-medium leading-[1.18] tracking-[-0.035em] text-bone">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-[13px] leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-end justify-between gap-4 border-t border-white/[0.07] pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid"
                    />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">
              ¿Tu desafío no entra en ninguna categoría?{" "}
              <span className="text-white/50">Mejor todavía.</span>
            </p>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 text-sm text-bone transition-colors hover:text-acid"
            >
              {t.services.cta}
              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
