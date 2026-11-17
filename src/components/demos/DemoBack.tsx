import { ArrowLeft } from "lucide-react";
import { useT } from "../../i18n";

type DemoBackProps = {
  label: string;
  tone?: "dark" | "light";
};

export function DemoBack({ label, tone = "dark" }: DemoBackProps) {
  const t = useT();
  const styles =
    tone === "light"
      ? "border-black/10 bg-white/85 text-[#1a1a22] hover:border-black/30"
      : "border-white/15 bg-black/55 text-white/75 hover:border-acid/45 hover:text-acid";

  return (
    <a
      href="/#proyectos"
      className={`fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] backdrop-blur-md transition-colors ${styles}`}
    >
      <ArrowLeft size={13} strokeWidth={1.8} />
      {t.projectDetail.back}
      <span className="opacity-40">/ {label}</span>
    </a>
  );
}
