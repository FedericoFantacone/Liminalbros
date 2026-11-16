import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./i18n";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";

function RoutedApp() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t.meta.description);
  }, [t]);

  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const projectSlugMatch = path.match(/^\/(?:proyectos?|project)\/([^/]+)$/);

  if (projectSlugMatch) {
    return <ProjectDetail slug={decodeURIComponent(projectSlugMatch[1])} />;
  }

  return (
    <>
      <a
        href="#contenido"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-acid px-5 py-3 text-sm font-medium text-ink transition-transform focus:translate-y-0"
      >
        {t.ui.skipToContent}
      </a>

      <Navbar />

      <main id="contenido">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RoutedApp />
    </LanguageProvider>
  );
}
