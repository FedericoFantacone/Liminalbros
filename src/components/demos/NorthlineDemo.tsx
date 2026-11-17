import { useMemo, useState, type MouseEvent } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Database,
  Download,
  FileText,
  LayoutDashboard,
  Search,
  Settings,
} from "lucide-react";
import { DemoBack } from "./DemoBack";

const RANGES = ["7d", "30d", "90d"] as const;
type Range = (typeof RANGES)[number];

type Source = { name: string; value: number; share: number };

type RangeData = {
  revenue: string;
  revenueDelta: number;
  users: string;
  usersDelta: number;
  conversion: string;
  conversionDelta: number;
  churn: string;
  churnDelta: number;
  current: number[];
  previous: number[];
  sources: Source[];
};

const DATA: Record<Range, RangeData> = {
  "7d": {
    revenue: "$12.4k",
    revenueDelta: 8.2,
    users: "3,842",
    usersDelta: 4.1,
    conversion: "3.8%",
    conversionDelta: 0.4,
    churn: "1.1%",
    churnDelta: -0.2,
    current: [18, 22, 20, 26, 24, 31, 29, 35, 33, 39, 42, 46],
    previous: [16, 18, 19, 21, 20, 24, 23, 26, 25, 28, 30, 32],
    sources: [
      { name: "Direct", value: 4210, share: 34 },
      { name: "Product Hunt", value: 2860, share: 23 },
      { name: "Organic search", value: 2140, share: 17 },
      { name: "Newsletter", value: 1520, share: 12 },
      { name: "Referrals", value: 940, share: 8 },
    ],
  },
  "30d": {
    revenue: "$48.2k",
    revenueDelta: 12.6,
    users: "12,940",
    usersDelta: 9.3,
    conversion: "4.1%",
    conversionDelta: 0.7,
    churn: "0.9%",
    churnDelta: -0.4,
    current: [22, 26, 24, 31, 29, 36, 34, 41, 39, 46, 44, 52],
    previous: [19, 21, 20, 25, 24, 27, 26, 31, 30, 33, 32, 37],
    sources: [
      { name: "Direct", value: 12840, share: 31 },
      { name: "Organic search", value: 9620, share: 24 },
      { name: "Product Hunt", value: 7210, share: 18 },
      { name: "Newsletter", value: 5340, share: 13 },
      { name: "Referrals", value: 3110, share: 8 },
    ],
  },
  "90d": {
    revenue: "$141.8k",
    revenueDelta: 21.4,
    users: "36,210",
    usersDelta: 17.8,
    conversion: "4.6%",
    conversionDelta: 1.1,
    churn: "0.8%",
    churnDelta: -0.5,
    current: [16, 21, 25, 23, 30, 34, 32, 39, 44, 42, 51, 58],
    previous: [14, 16, 18, 17, 21, 24, 23, 26, 28, 27, 31, 34],
    sources: [
      { name: "Organic search", value: 31240, share: 29 },
      { name: "Direct", value: 28610, share: 26 },
      { name: "Product Hunt", value: 19220, share: 18 },
      { name: "Newsletter", value: 14800, share: 14 },
      { name: "Referrals", value: 9210, share: 9 },
    ],
  },
};

const NAV = [
  { id: "Overview", icon: LayoutDashboard },
  { id: "Metrics", icon: BarChart3 },
  { id: "Reports", icon: FileText },
  { id: "Sources", icon: Database },
  { id: "Settings", icon: Settings },
] as const;

type NavId = (typeof NAV)[number]["id"];

const EVENTS = [
  { label: "New workspace created", meta: "Acme Inc. · just now", tone: "bg-[#5eead4]" },
  { label: "Revenue target reached", meta: "Monthly goal · 4 min ago", tone: "bg-[#7c9cff]" },
  { label: "Report exported", meta: "Federico F. · 18 min ago", tone: "bg-[#f5c26b]" },
  { label: "Data source synced", meta: "PostgreSQL · 32 min ago", tone: "bg-[#a78bfa]" },
];

export function NorthlineDemo() {
  const [range, setRange] = useState<Range>("30d");
  const [active, setActive] = useState<NavId>("Overview");
  const [query, setQuery] = useState("");

  const data = DATA[range];
  const sources = useMemo(
    () =>
      data.sources.filter((source) =>
        source.name.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [data, query],
  );

  function exportCsv() {
    const rows = [
      "period,current,previous",
      ...data.current.map((value, index) => `${index + 1},${value},${data.previous[index]}`),
    ];
    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `northline-${range}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="fixed inset-0 flex overflow-hidden bg-[#070b14] text-[#e6eaf5]">
      <aside className="hidden w-[224px] shrink-0 flex-col border-r border-white/[0.07] px-4 pb-16 pt-5 lg:flex">
        <div className="flex items-center gap-2.5 px-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7c9cff] font-mono text-[15px] font-bold text-[#070b14]">
            N
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.02em]">Northline</span>
        </div>

        <nav className="mt-8 space-y-1" aria-label="Northline sections">
          {NAV.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors ${
                  isActive
                    ? "bg-white/[0.08] text-white"
                    : "text-[#8b97b0] hover:bg-white/[0.04] hover:text-white/85"
                }`}
              >
                <Icon size={16} strokeWidth={1.7} />
                {item.id}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#8b97b0]">
            Workspace
          </p>
          <p className="mt-1.5 text-[13px] font-medium">Acme Inc.</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[68%] rounded-full bg-[#7c9cff]" />
          </div>
          <p className="mt-2 text-[10px] text-[#8b97b0]">68% of seats active</p>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center gap-3 border-b border-white/[0.07] px-4 sm:px-6">
          <div className="hidden items-center gap-2 text-[12px] text-[#8b97b0] sm:flex">
            <span>Workspace</span>
            <span className="text-white/25">/</span>
            <span className="text-white/80">Overview</span>
          </div>

          <div className="relative ml-auto w-full max-w-[240px]">
            <Search
              size={14}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8b97b0]"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search sources"
              aria-label="Search sources"
              className="h-9 w-full rounded-lg border border-white/10 bg-white/[0.04] pl-9 pr-3 text-[12px] text-white outline-none transition-colors placeholder:text-[#6c7891] focus:border-[#7c9cff]/60"
            />
          </div>

          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#8b97b0] transition-colors hover:text-white"
          >
            <Bell size={15} strokeWidth={1.8} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#5eead4]" />
          </button>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#a78bfa] text-[11px] font-semibold text-[#070b14]">
            FF
          </span>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto p-4 pb-14 sm:p-6 lg:overflow-hidden">
          {active !== "Overview" ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#7c9cff]">
                <Activity size={20} strokeWidth={1.6} />
              </span>
              <p className="mt-4 text-[15px] font-medium">{active} view</p>
              <p className="mt-2 max-w-xs px-6 text-[12px] leading-relaxed text-[#8b97b0]">
                This demo includes the Overview view only. The full product would open the{" "}
                {active.toLowerCase()} module here.
              </p>
              <button
                type="button"
                onClick={() => setActive("Overview")}
                className="mt-5 rounded-lg bg-[#7c9cff] px-4 py-2 text-[12px] font-medium text-[#070b14] transition-opacity hover:opacity-90"
              >
                Back to overview
              </button>
            </div>
          ) : (
            <div className="grid h-full gap-4 md:grid-cols-[minmax(0,1fr)_250px] xl:grid-cols-[minmax(0,1fr)_296px]">
              <div className="flex min-w-0 flex-col gap-4">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h1 className="text-[22px] font-semibold tracking-[-0.03em]">Overview</h1>
                    <p className="mt-1 text-[12px] text-[#8b97b0]">
                      How Acme Inc. is performing right now.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div
                      role="group"
                      aria-label="Date range"
                      className="flex rounded-lg border border-white/10 bg-white/[0.03] p-0.5"
                    >
                      {RANGES.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setRange(option)}
                          aria-pressed={range === option}
                          className={`rounded-md px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors ${
                            range === option
                              ? "bg-[#7c9cff] text-[#070b14]"
                              : "text-[#8b97b0] hover:text-white"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={exportCsv}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] font-medium text-white/80 transition-colors hover:border-[#7c9cff]/40 hover:text-white"
                    >
                      <Download size={13} strokeWidth={1.8} />
                      Export
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                  <Kpi label="Revenue" value={data.revenue} delta={data.revenueDelta} />
                  <Kpi label="Active users" value={data.users} delta={data.usersDelta} />
                  <Kpi label="Conversion" value={data.conversion} delta={data.conversionDelta} />
                  <Kpi label="Churn" value={data.churn} delta={data.churnDelta} goodWhenDown />
                </div>

                <section className="flex min-h-0 flex-1 flex-col rounded-2xl border border-white/[0.08] bg-[#0a1020] p-4 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[12px] text-[#8b97b0]">Revenue growth</p>
                      <p className="mt-1 text-[26px] font-semibold tracking-[-0.04em]">
                        {data.revenue}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-[#8b97b0]">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#7c9cff]" /> Current
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white/25" /> Previous
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 min-h-[180px] flex-1">
                    <AreaChart data={data} />
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-3 border-t border-white/[0.07] pt-3">
                    {[
                      ["Sessions", "24,180", "+6.4%"],
                      ["Avg. order", "$86.40", "+2.1%"],
                      ["Returning", "41.2%", "+3.8%"],
                    ].map(([label, value, delta]) => (
                      <div key={label}>
                        <p className="text-[10px] uppercase tracking-[0.1em] text-[#6c7891]">
                          {label}
                        </p>
                        <p className="mt-1 text-[13px] font-medium">{value}</p>
                        <p className="text-[10px] text-[#5eead4]">{delta}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="hidden min-h-0 flex-col gap-4 md:flex">
                <section className="rounded-2xl border border-white/[0.08] bg-[#0a1020] p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[13px] font-medium">Top sources</h2>
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#6c7891]">
                      {range}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {sources.map((source) => (
                      <li key={source.name}>
                        <div className="flex items-baseline justify-between gap-2 text-[11px]">
                          <span className="truncate text-white/80">{source.name}</span>
                          <span className="font-mono text-[10px] text-[#8b97b0]">
                            {source.share}%
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                          <div
                            className="h-full rounded-full bg-[#7c9cff] transition-all duration-500"
                            style={{ width: `${source.share * 2.4}%` }}
                          />
                        </div>
                      </li>
                    ))}
                    {sources.length === 0 && (
                      <li className="py-6 text-center text-[11px] text-[#6c7891]">
                        No sources match “{query}”.
                      </li>
                    )}
                  </ul>
                </section>

                <section className="flex min-h-0 flex-1 flex-col rounded-2xl border border-white/[0.08] bg-[#0a1020] p-4">
                  <h2 className="text-[13px] font-medium">Live events</h2>
                  <ul className="mt-4 space-y-3 overflow-hidden">
                    {EVENTS.map((event) => (
                      <li key={event.label} className="flex items-start gap-2.5">
                        <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${event.tone}`} />
                        <div className="min-w-0">
                          <p className="truncate text-[11px] text-white/80">{event.label}</p>
                          <p className="text-[10px] text-[#6c7891]">{event.meta}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </aside>
            </div>
          )}
        </main>
      </div>

      <DemoBack label="Northline" />
    </div>
  );
}

function Kpi({
  label,
  value,
  delta,
  goodWhenDown = false,
}: {
  label: string;
  value: string;
  delta: number;
  goodWhenDown?: boolean;
}) {
  const isGood = goodWhenDown ? delta <= 0 : delta >= 0;
  const Icon = delta >= 0 ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0a1020] p-3.5">
      <p className="text-[10px] uppercase tracking-[0.1em] text-[#6c7891]">{label}</p>
      <p className="mt-1.5 text-[19px] font-semibold tracking-[-0.03em]">{value}</p>
      <p
        className={`mt-1 flex items-center gap-1 text-[10px] ${
          isGood ? "text-[#5eead4]" : "text-[#f87171]"
        }`}
      >
        <Icon size={11} strokeWidth={2} />
        {delta > 0 ? "+" : ""}
        {delta}% vs prev.
      </p>
    </div>
  );
}

function AreaChart({ data }: { data: RangeData }) {
  const [hover, setHover] = useState<number | null>(null);

  const width = 640;
  const height = 220;
  const padX = 6;
  const padY = 16;
  const max = Math.max(...data.current, ...data.previous) * 1.12;

  const x = (index: number) =>
    padX + (index * (width - padX * 2)) / (data.current.length - 1);
  const y = (value: number) => height - padY - (value / max) * (height - padY * 2);

  const toPath = (values: number[]) =>
    values
      .map((value, index) => `${index === 0 ? "M" : "L"}${x(index).toFixed(1)},${y(value).toFixed(1)}`)
      .join(" ");

  const currentPath = toPath(data.current);
  const previousPath = toPath(data.previous);
  const areaPath = `${currentPath} L${x(data.current.length - 1)},${height - padY} L${x(0)},${
    height - padY
  } Z`;

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    const index = Math.round(ratio * (data.current.length - 1));
    setHover(Math.min(data.current.length - 1, Math.max(0, index)));
  }

  return (
    <div
      className="relative h-full w-full"
      onMouseMove={handleMove}
      onMouseLeave={() => setHover(null)}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
        role="img"
        aria-label="Revenue compared with the previous period"
      >
        <defs>
          <linearGradient id="northline-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c9cff" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#7c9cff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 1, 2, 3].map((line) => {
          const lineY = padY + (line * (height - padY * 2)) / 3;
          return (
            <line
              key={line}
              x1={padX}
              x2={width - padX}
              y1={lineY}
              y2={lineY}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}

        <path d={areaPath} fill="url(#northline-area)" />
        <path
          d={previousPath}
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={currentPath}
          fill="none"
          stroke="#7c9cff"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {hover !== null && (
          <line
            x1={x(hover)}
            x2={x(hover)}
            y1={padY}
            y2={height - padY}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>

      {hover !== null && (
        <span
          className="pointer-events-none absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c9cff] shadow-[0_0_0_4px_rgba(124,156,255,0.18)]"
          style={{
            left: `${(x(hover) / width) * 100}%`,
            top: `${(y(data.current[hover]) / height) * 100}%`,
          }}
          aria-hidden="true"
        />
      )}

      {hover !== null && (
        <div
          className="pointer-events-none absolute top-1 z-10 -translate-x-1/2 rounded-lg border border-white/10 bg-[#0d1526] px-2.5 py-1.5 shadow-xl"
          style={{ left: `${(x(hover) / width) * 100}%` }}
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-[#6c7891]">
            Point {hover + 1}
          </p>
          <p className="text-[11px] text-white">${data.current[hover].toFixed(1)}k</p>
          <p className="text-[10px] text-[#8b97b0]">
            prev. ${data.previous[hover].toFixed(1)}k
          </p>
        </div>
      )}
    </div>
  );
}
