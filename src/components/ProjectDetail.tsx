import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useT } from "../i18n";
import { applyMeta } from "../lib/seo";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Reveal } from "./Reveal";

export function ProjectDetail({ slug }: { slug: string }) {
  const t = useT();
  const project = t.projects.items.find((item) => item.id === slug || item.slug === slug);

  useEffect(() => {
    if (!project) return;
    applyMeta({
      title: `${project.name} — LIMINAL BROS`,
      description: project.description,
      path: `/proyectos/${project.id}`,
    });
  }, [project]);

  if (!project) {
    return (
      <>
        <Navbar />
        <main id="contenido" className="section-pad">
          <div className="shell relative">
            <h1 className="text-[clamp(2.2rem,4.5vw,4.1rem)] font-medium tracking-[-0.055em]">
              {t.projectDetail.notFound}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              {t.projectDetail.notFoundBody}
            </p>
            <a href="/#proyectos" className="btn-secondary group mt-8">
              {t.projectDetail.back}
              <ArrowLeft size={16} strokeWidth={1.7} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main id="contenido">
        <section className="relative overflow-hidden pt-32 sm:pt-36">
          <div className="hero-halo pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="shell relative">
            <a
              href="/#proyectos"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-bone"
            >
              <ArrowLeft size={15} strokeWidth={1.7} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              {t.projectDetail.back}
            </a>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
                  {project.category} · {project.year}
                </p>
                <h1 className="mt-4 text-[clamp(2.6rem,5.5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                  {project.name}
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a href={project.href} className="btn-primary group">
                    {t.projectDetail.openProject}
                    <ArrowRight
                      size={16}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </a>
                  <a href="/#contacto" className="btn-secondary group">
                    {t.projectDetail.cta}
                    <ArrowUpRight size={16} strokeWidth={1.8} className="btn-arrow" />
                  </a>
                </div>

                <p className="mt-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">
                  <span className="h-1 w-1 rounded-full bg-acid/70" />
                  {t.projectDetail.demoNote}
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141714] p-3">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={800}
                    className="project-image h-full w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad relative border-t border-white/[0.06]">
          <div className="shell relative grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">{t.projectDetail.overview}</p>
                <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-medium tracking-[-0.045em]">
                  {project.name}
                </h2>
                <p className="mt-4 text-[13px] leading-relaxed text-muted">
                  {project.details.overview}
                </p>

                <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                  <div className="flex items-center justify-between py-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                      {t.projectDetail.category}
                    </span>
                    <span className="text-[12px] text-white/65">{project.category}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                      {t.projectDetail.year}
                    </span>
                    <span className="text-[12px] text-white/65">{project.year}</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={80}>
                <div className="rounded-2xl border border-white/[0.08] bg-[linear-gradient(150deg,rgba(255,255,255,0.028),rgba(255,255,255,0.008))] p-6 sm:p-8">
                  <p className="eyebrow">{t.projectDetail.system}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {project.details.system}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[linear-gradient(150deg,rgba(255,255,255,0.028),rgba(255,255,255,0.008))] p-6 sm:p-8">
                  <p className="eyebrow">{t.projectDetail.features}</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.details.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-[13px] text-white/65">
                        <CheckCircle2 size={15} strokeWidth={1.6} className="mt-0.5 shrink-0 text-acid" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[linear-gradient(150deg,rgba(255,255,255,0.028),rgba(255,255,255,0.008))] p-6 sm:p-8">
                  <p className="eyebrow">{t.projectDetail.technologies}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
