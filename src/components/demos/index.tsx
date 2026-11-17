import { lazy, Suspense, useEffect } from "react";
import { useT } from "../../i18n";
import { applyMeta } from "../../lib/seo";

const NorthlineDemo = lazy(() =>
  import("./NorthlineDemo").then((module) => ({ default: module.NorthlineDemo })),
);
const MesaDemo = lazy(() =>
  import("./MesaDemo").then((module) => ({ default: module.MesaDemo })),
);
const AtlasDemo = lazy(() =>
  import("./AtlasDemo").then((module) => ({ default: module.AtlasDemo })),
);

const DEMO_META: Record<string, { title: string; description: string }> = {
  northline: {
    title: "Northline — interactive demo · LIMINAL CODE",
    description:
      "Interactive single-view demo of Northline: a modular analytics dashboard for teams that turn scattered data into clear decisions.",
  },
  mesa: {
    title: "Mesa — interactive demo · LIMINAL CODE",
    description:
      "Interactive single-view demo of Mesa: seasonal menu and table reservations for an author restaurant.",
  },
  atlas: {
    title: "Atlas — interactive demo · LIMINAL CODE",
    description:
      "Interactive single-view demo of Atlas: a Kanban board that centralises projects, teams and documentation.",
  },
};

export function ProjectDemo({ slug }: { slug: string }) {
  useEffect(() => {
    const meta = DEMO_META[slug];
    applyMeta({
      title: meta?.title ?? "Interactive demo — LIMINAL CODE",
      description:
        meta?.description ?? "Interactive product demos designed and built by LIMINAL CODE.",
      path: `/demo/${slug}`,
    });
  }, [slug]);

  let content = <DemoNotFound />;
  if (slug === "northline") content = <NorthlineDemo />;
  if (slug === "mesa") content = <MesaDemo />;
  if (slug === "atlas") content = <AtlasDemo />;

  return <Suspense fallback={<DemoLoading />}>{content}</Suspense>;
}

function DemoLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink">
      <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
        Loading demo
      </span>
    </div>
  );
}

function DemoNotFound() {
  const t = useT();

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">LIMINAL CODE / 404</p>
        <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-medium tracking-[-0.05em]">
          {t.projectDetail.notFound}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">{t.projectDetail.notFoundBody}</p>
        <a href="/#proyectos" className="btn-secondary mt-8 inline-flex items-center gap-2">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t.projectDetail.back}
        </a>
      </div>
    </main>
  );
}
