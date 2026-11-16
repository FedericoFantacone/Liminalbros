type LogoProps = {
  className?: string;
  showMark?: boolean;
};

export function Logo({ className = "", showMark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {showMark && (
        <svg
          aria-hidden="true"
          viewBox="0 0 64 64"
          className="h-7 w-7 shrink-0"
          fill="none"
        >
          <rect x="1" y="1" width="62" height="62" rx="14" stroke="currentColor" strokeOpacity="0.18" />
          <path d="M17 14h14v5H22v26h9v5H17V14Z" fill="currentColor" />
          <path d="M47 14H33v5h9v26h-9v5h14V14Z" fill="currentColor" />
          <rect x="29" y="29" width="6" height="6" rx="1" fill="#d7ff4f" />
        </svg>
      )}
      <span className="text-[17px] font-semibold leading-none tracking-[-0.05em]">
        LIMINAL <span className="text-acid">BROS.</span>
      </span>
    </span>
  );
}
