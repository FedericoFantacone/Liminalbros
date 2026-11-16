import { useLanguage } from "../i18n";

const locales = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
] as const;

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.ui.languageLabel}
      className={`flex items-center rounded-full border border-white/10 bg-white/[0.025] p-0.5 ${className}`}
    >
      {locales.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLocale(item.code)}
          aria-pressed={locale === item.code}
          className={`rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] transition-all duration-300 ${
            locale === item.code
              ? "bg-acid text-ink"
              : "text-white/45 hover:text-bone"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
