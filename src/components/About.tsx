import { ArrowUpRight, Check, Fingerprint, Linkedin, Users } from "lucide-react";
import { useT } from "../i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const t = useT();

  return (
    <section id="nosotros" className="section-pad relative overflow-hidden border-b border-white/[0.06]">
      <div
        className="pointer-events-none absolute -left-32 top-40 h-[440px] w-[440px] rounded-full bg-[#6b56ff]/[0.05] blur-[120px]"
        aria-hidden="true"
      />
      <div className="shell relative">
        <Reveal>
          <SectionHeading
            index="03"
            label={t.about.label}
            title={
              <>
                {t.about.title.replace(t.about.titleHighlight, "").trim()}{" "}
                <span className="serif-accent text-acid">{t.about.titleHighlight}</span>
              </>
            }
            description={t.about.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <p className="max-w-sm text-[13px] leading-relaxed text-muted">
                {t.about.approach}
              </p>

              <div className="mt-9 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {t.about.approachItems.map((item, index) => {
                  const Icon = index === 0 ? Users : index === 1 ? Fingerprint : Check;
                  return (
                    <div key={item.label} className="flex items-center justify-between py-4">
                      <span className="flex items-center gap-2.5 text-[12px] text-muted">
                        <Icon size={13} strokeWidth={1.5} className="text-white/35" />
                        {item.label}
                      </span>
                      <span className="text-[12px] text-white/65">{item.value}</span>
                    </div>
                  );
                })}
              </div>

              <a
                href="#contacto"
                className="group mt-8 inline-flex items-center gap-2 text-sm text-bone transition-colors hover:text-acid"
              >
                {t.about.contactCta}
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Reveal>
          </div>

          <div className="space-y-4 lg:col-span-8">
            {t.about.items.map((profile, index) => (
              <Reveal key={profile.id} delay={index * 100}>
                <article className="group relative grid overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(150deg,rgba(255,255,255,0.028),rgba(255,255,255,0.008))] transition-all duration-500 hover:border-white/[0.16] sm:grid-cols-[190px_1fr]">
                  <div className="avatar-art relative min-h-[220px] overflow-hidden border-b border-white/[0.07] sm:min-h-full sm:border-b-0 sm:border-r">
                    {profile.image ? (
                      <img
                        src={profile.image}
                        alt={`Retrato de ${profile.name}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                          aria-hidden="true"
                        />
                        <div
                          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-acid/20 bg-acid/[0.035]"
                          aria-hidden="true"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="serif-accent text-[76px] leading-none text-acid/85">
                            {profile.id}
                          </span>
                        </div>
                        <span className="absolute left-4 top-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                          LIMINAL CODE / {profile.id}
                        </span>
                        <span className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-[0.14em] text-white/30">
                          Co-Founder
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex flex-col p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-acid/80">
                        {profile.role}
                      </span>
                      {profile.linkedin && (
                        <a
                          href={profile.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${profile.name} en LinkedIn`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all hover:border-acid/30 hover:text-acid"
                        >
                          <Linkedin size={13} strokeWidth={1.5} />
                        </a>
                      )}
                    </div>

                    <h3 className="mt-4 text-[clamp(1.6rem,3vw,2rem)] font-medium tracking-[-0.045em]">
                      {profile.name}
                    </h3>
                    <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-muted">
                      {profile.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6">
                      {profile.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-white/35"
                        >
                          <span className="h-1 w-1 rounded-full bg-acid/50" />
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={180}>
              <div className="grid gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-3">
                {t.about.steps.map((step) => (
                  <div key={step.number}>
                    <span className="font-mono text-[9px] text-acid/60">{step.number}</span>
                    <p className="mt-2 text-[12px] font-medium text-bone">{step.title}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted">{step.copy}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
