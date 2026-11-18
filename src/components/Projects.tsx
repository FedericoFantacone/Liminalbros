import { ArrowUpRight, Info, MoveUpRight } from "lucide-react";
import { useT } from "../i18n";
import { ProjectMedia } from "./ProjectMedia";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type ProjectCardProps = {
  project: ReturnType<typeof useT>["projects"]["items"][number];
  index: number;
  featured?: boolean;
};

function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const t = useT();
  const badge = project.kind === "real" ? t.projects.real : t.projects.demo;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(150deg,rgba(255,255,255,0.03),rgba(255,255,255,0.008))] transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-acid/40 hover:shadow-[0_22px_55px_-26px_rgba(215,255,79,0.32)] ${
        featured ? "lg:grid lg:grid-cols-[1.16fr_0.84fr]" : "flex h-full flex-col"
      }`}
    >
      <a
        href={`/proyectos/${project.id}`}
        className={`relative block overflow-hidden ${
          featured ? "p-3 sm:p-4 lg:pr-0" : "p-3"
        }`}
      >
        <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-[#141714]">
          <ProjectMedia
            image={project.image}
            video={project.video}
            alt={`${project.imageAlt}. ${project.category}.`}
            eager={index === 0}
            className="project-image h-full w-full object-cover transition-[transform,filter] duration-200 ease-out group-hover:scale-[1.04] group-hover:brightness-[1.06]"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/[0.08] opacity-70"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(215,255,79,0.22),transparent_65%)] opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
            aria-hidden="true"
          />

          <span
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/70 opacity-0 backdrop-blur-md transition-[opacity,transform] duration-150 ease-out group-hover:scale-100 group-hover:opacity-100"
            aria-hidden="true"
          >
            <ArrowUpRight size={15} strokeWidth={1.6} />
          </span>

          <div
            className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2"
            aria-hidden="true"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-black/45 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/60 backdrop-blur-md">
                {project.year}
              </span>
              <span className="rounded-full bg-black/45 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/60 backdrop-blur-md">
                {project.category}
              </span>
            </div>
            <span className="rounded-full border border-acid/25 bg-black/45 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-acid backdrop-blur-md">
              {badge}
            </span>
          </div>
        </div>
      </a>

      <div
        className={`flex flex-1 flex-col ${
          featured ? "justify-center p-6 pt-4 sm:p-8 lg:py-10 lg:pl-8 lg:pr-10" : "p-6 pt-4 sm:p-7 sm:pt-4"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
              {t.projects.label} / {String(index + 1).padStart(2, "0")}
            </p>
            <h3
              className={`mt-3 font-medium tracking-[-0.045em] text-bone ${
                featured ? "text-[clamp(2rem,4vw,3.1rem)]" : "text-[clamp(1.7rem,3vw,2.2rem)]"
              }`}
            >
              {project.name}
            </h3>
          </div>
          <span className="hidden font-mono text-[9px] text-white/25 sm:block">
            {project.year}
          </span>
        </div>

        <p
          className={`mt-4 text-pretty text-[13px] leading-relaxed text-muted ${
            featured ? "max-w-md text-sm" : ""
          }`}
        >
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/[0.07] pt-5">
          <a
            href={`/proyectos/${project.id}`}
            className="group/link inline-flex items-center gap-2 text-[13px] font-medium text-bone transition-colors hover:text-acid"
          >
            {t.projects.view}
            <MoveUpRight
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </a>
          <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/20">
            {badge}
          </span>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const t = useT();
  const projects = t.projects.items;
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const rest = projects.filter((project) => project.id !== featured?.id);

  return (
    <section
      id="proyectos"
      className="section-pad relative overflow-hidden border-b border-white/[0.06] bg-[#080a0a]"
    >
      <div
        className="pointer-events-none absolute right-0 top-24 h-[500px] w-[500px] rounded-full bg-acid/[0.025] blur-[120px]"
        aria-hidden="true"
      />
      <div className="shell relative">
        <SectionHeading
          index="02"
          label={t.projects.label}
          title={
            <>
              {t.projects.title.replace(t.projects.titleHighlight, "").trim()}{" "}
              <span className="serif-accent text-acid">{t.projects.titleHighlight}</span>
            </>
          }
          description={t.projects.subtitle}
        />

        <Reveal delay={80}>
          <div className="mt-9 flex flex-col gap-3 rounded-xl border border-dashed border-white/[0.11] bg-white/[0.018] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-2.5">
              <Info size={14} className="mt-0.5 shrink-0 text-acid/70" strokeWidth={1.6} />
              <p className="text-[12px] leading-relaxed text-white/45">
                {t.projects.disclaimer}
              </p>
            </div>
            <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              {t.projects.count}
            </span>
          </div>
        </Reveal>

        <div className="mt-6 space-y-6">
          {featured && (
            <Reveal>
              <ProjectCard
                project={featured}
                index={projects.indexOf(featured)}
                featured
              />
            </Reveal>
          )}

          <div className="grid gap-6 lg:grid-cols-3">
            {rest.map((project, index) => (
              <Reveal key={project.id} delay={index * 100} className="h-full">
                <ProjectCard project={project} index={projects.indexOf(project)} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-6 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-white/[0.09] bg-[linear-gradient(120deg,rgba(215,255,79,0.07),rgba(255,255,255,0.015)_40%,rgba(255,255,255,0.01))] p-7 sm:p-9 md:flex-row md:items-center">
            <div>
              <p className="eyebrow">{t.projects.nextLabel}</p>
              <h3 className="mt-3 max-w-xl text-balance text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.045em]">
                {t.projects.nextTitle}
              </h3>
            </div>
            <a href="#contacto" className="btn-secondary group shrink-0">
              {t.projects.nextCta}
              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="btn-arrow"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
