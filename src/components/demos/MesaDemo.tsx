import { useRef, useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { DemoBack } from "./DemoBack";

const TABS = ["Starters", "Mains", "Desserts"] as const;
type Tab = (typeof TABS)[number];

const MENU: Record<Tab, { name: string; note: string; price: string }[]> = {
  Starters: [
    { name: "Charred leek", note: "hazelnut, brown butter, lemon", price: "14" },
    { name: "Beef tartare", note: "smoked yolk, capers, sourdough", price: "18" },
    { name: "Oysters", note: "cucumber, dill, rye vinegar", price: "16" },
  ],
  Mains: [
    { name: "Lake trout", note: "sorrel, new potato, beurre blanc", price: "32" },
    { name: "Dry-aged duck", note: "quince, black garlic, jus", price: "38" },
    { name: "Wild mushroom risotto", note: "aged parmesan, thyme", price: "27" },
  ],
  Desserts: [
    { name: "Burnt honey tart", note: "crème fraîche, bee pollen", price: "12" },
    { name: "Pear & bay leaf", note: "sorbet, olive oil, sea salt", price: "10" },
    { name: "Aged cheese", note: "walnut bread, fig mostarda", price: "15" },
  ],
};

const TIMES = [
  { value: "18:30", available: true },
  { value: "19:00", available: false },
  { value: "19:30", available: true },
  { value: "20:00", available: true },
  { value: "20:30", available: false },
  { value: "21:00", available: true },
];

function defaultDate() {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date.toISOString().slice(0, 10);
}

function prettyDate(value: string) {
  if (!value) return "—";
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function MesaDemo() {
  const [tab, setTab] = useState<Tab>("Mains");
  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState("20:00");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  function reserve() {
    if (name.trim().length < 2) {
      setError("Please tell us the name for the reservation.");
      nameRef.current?.focus();
      return;
    }
    setError("");
    setConfirmed(true);
  }

  function reset() {
    setConfirmed(false);
    setName("");
    setError("");
    setGuests(2);
  }

  return (
    <div className="fixed inset-0 overflow-y-auto bg-[#f4efe4] text-[#2a2a20] [scrollbar-width:thin] md:overflow-hidden">
      <div className="flex min-h-full flex-col md:grid md:min-h-full md:grid-cols-[1.12fr_0.88fr]">
        <div className="flex flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12 lg:pb-16 lg:pt-8">
          <header className="flex items-center justify-between gap-4 border-b border-[#2a2a20]/[0.12] pb-5">
            <span className="serif-accent text-[26px] leading-none">Mesa</span>
            <nav className="hidden items-center gap-7 text-[12px] text-[#5f5f51] sm:flex" aria-label="Mesa">
              <a href="#menu" className="transition-colors hover:text-[#2a2a20]">
                Menu
              </a>
              <a href="#reserva" className="transition-colors hover:text-[#2a2a20]">
                Reservations
              </a>
              <span className="hidden text-[#8a897a] md:inline">Vienna, AT</span>
            </nav>
            <button
              type="button"
              onClick={() => nameRef.current?.focus()}
              className="rounded-full bg-[#3d4730] px-4 py-2 text-[11px] font-medium text-[#f4efe4] transition-opacity hover:opacity-90"
            >
              Book a table
            </button>
          </header>

          <main id="menu" className="flex flex-1 flex-col justify-center py-8 md:py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a897a]">
              Seasonal kitchen · since 2019
            </p>
            <h1 className="mt-3 max-w-[620px] text-[clamp(3.2rem,8vw,6rem)] font-medium leading-[0.86] tracking-[-0.055em]">
              Mesa
              <span className="serif-accent block text-[#6f7a4f]">estacional</span>
            </h1>
            <p className="mt-5 max-w-md text-[13px] leading-relaxed text-[#6b6a5c]">
              A small dining room, a short menu and whatever the market had this morning. We cook
              over fire and keep the rest simple.
            </p>

            <div className="mt-8 max-w-xl">
              <div
                role="tablist"
                aria-label="Menu sections"
                className="flex gap-6 border-b border-[#2a2a20]/[0.12]"
              >
                {TABS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="tab"
                    aria-selected={tab === option}
                    onClick={() => setTab(option)}
                    className={`-mb-px border-b-2 pb-2.5 text-[12px] transition-colors ${
                      tab === option
                        ? "border-[#3d4730] text-[#2a2a20]"
                        : "border-transparent text-[#8a897a] hover:text-[#5f5f51]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <ul className="mt-1 divide-y divide-[#2a2a20]/[0.08]" aria-live="polite">
                {MENU[tab].map((dish) => (
                  <li key={dish.name} className="flex items-baseline gap-4 py-3.5">
                    <div className="min-w-0">
                      <p className="text-[14px] font-medium">{dish.name}</p>
                      <p className="mt-0.5 text-[11px] text-[#8a897a]">{dish.note}</p>
                    </div>
                    <span className="mx-1 h-px flex-1 bg-[#2a2a20]/[0.12]" aria-hidden="true" />
                    <span className="font-mono text-[12px] text-[#5f5f51]">€{dish.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-7 max-w-md text-[11px] leading-relaxed text-[#8a897a]">
              Menu changes weekly. Vegetarian tasting available — tell us when you book.
            </p>
          </main>

          <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[#2a2a20]/[0.12] pt-4 text-[10px] text-[#8a897a]">
            <span>Kirchengasse 12, 1070 Wien</span>
            <span className="font-mono">+43 1 234 5678 · hello@mesa.at</span>
          </footer>
        </div>

        <aside
          id="reserva"
          className="relative flex flex-col justify-center overflow-hidden bg-[#242b1d] px-6 py-10 text-[#f0ece0] sm:px-10 lg:px-10 lg:py-8"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.07]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#c9d59a]/[0.06] blur-2xl"
            aria-hidden="true"
          />

          {confirmed ? (
            <div className="relative">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9d59a]/30 bg-[#c9d59a]/10 text-[#c9d59a]">
                <Check size={20} strokeWidth={1.8} />
              </span>
              <h2 className="serif-accent mt-6 text-[34px] leading-none">Table confirmed</h2>
              <p className="mt-3 text-[12px] leading-relaxed text-[#f0ece0]/65">
                We sent the details to the restaurant. See you soon, {name.trim()}.
              </p>

              <dl className="mt-7 divide-y divide-white/10 border-y border-white/10 text-[12px]">
                {[
                  ["Guest", name.trim()],
                  ["Date", prettyDate(date)],
                  ["Time", time],
                  ["Party", `${guests} ${guests === 1 ? "guest" : "guests"}`],
                  ["Code", `M-${String(guests)}${time.replace(":", "")}`],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 py-3">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#f0ece0]/45">
                      {label}
                    </dt>
                    <dd className="text-right">{value}</dd>
                  </div>
                ))}
              </dl>

              <button
                type="button"
                onClick={reset}
                className="mt-7 w-full rounded-xl border border-white/20 py-3 text-[12px] font-medium transition-colors hover:border-[#c9d59a]/50 hover:text-[#c9d59a]"
              >
                Book another table
              </button>
            </div>
          ) : (
            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c9d59a]/70">
                Reservations
              </p>
              <h2 className="serif-accent mt-2 text-[34px] leading-none">Your table</h2>
              <p className="mt-2 text-[11px] text-[#f0ece0]/55">
                4 tables left for this evening.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#f0ece0]/50">
                      Date
                    </span>
                    <input
                      type="date"
                      value={date}
                      min={new Date().toISOString().slice(0, 10)}
                      onChange={(event) => setDate(event.target.value)}
                      className="mt-1.5 h-10 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3 text-[12px] text-[#f0ece0] outline-none focus:border-[#c9d59a]/60 [color-scheme:dark]"
                    />
                  </label>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#f0ece0]/50">
                      Guests
                    </span>
                    <div className="mt-1.5 flex h-10 items-center justify-between rounded-lg border border-white/15 bg-white/[0.06] px-1">
                      <button
                        type="button"
                        aria-label="Remove one guest"
                        onClick={() => setGuests((value) => Math.max(1, value - 1))}
                        className="flex h-8 w-8 items-center justify-center rounded-md text-[#f0ece0]/70 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <Minus size={13} strokeWidth={2} />
                      </button>
                      <span className="text-[12px]">
                        {guests} {guests === 1 ? "guest" : "guests"}
                      </span>
                      <button
                        type="button"
                        aria-label="Add one guest"
                        onClick={() => setGuests((value) => Math.min(8, value + 1))}
                        className="flex h-8 w-8 items-center justify-center rounded-md text-[#f0ece0]/70 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <Plus size={13} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#f0ece0]/50">
                    Time
                  </span>
                  <div className="mt-1.5 grid grid-cols-3 gap-2">
                    {TIMES.map((slot) => (
                      <button
                        key={slot.value}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => setTime(slot.value)}
                        aria-pressed={time === slot.value}
                        className={`h-9 rounded-lg border text-[11px] transition-colors ${
                          !slot.available
                            ? "cursor-not-allowed border-white/[0.08] text-[#f0ece0]/25 line-through"
                            : time === slot.value
                              ? "border-[#c9d59a] bg-[#c9d59a] text-[#242b1d]"
                              : "border-white/15 bg-white/[0.04] text-[#f0ece0]/75 hover:border-white/30"
                        }`}
                      >
                        {slot.value}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="block">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#f0ece0]/50">
                    Name
                  </span>
                  <input
                    ref={nameRef}
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      if (error) setError("");
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") reserve();
                    }}
                    placeholder="Who is the table for?"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "mesa-error" : undefined}
                    className="mt-1.5 h-10 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3 text-[12px] text-[#f0ece0] outline-none placeholder:text-[#f0ece0]/30 focus:border-[#c9d59a]/60"
                  />
                </label>

                {error && (
                  <p id="mesa-error" role="alert" className="text-[11px] text-[#ffb4a2]">
                    {error}
                  </p>
                )}

                <button
                  type="button"
                  onClick={reserve}
                  className="h-11 w-full rounded-lg bg-[#c9d59a] text-[12px] font-semibold text-[#242b1d] transition-opacity hover:opacity-90"
                >
                  Confirm reservation
                </button>

                <p className="text-center text-[10px] leading-relaxed text-[#f0ece0]/35">
                  {prettyDate(date)} · {time} · {guests} {guests === 1 ? "guest" : "guests"}
                </p>
              </div>
            </div>
          )}
        </aside>
      </div>

      <DemoBack label="Mesa" tone="light" />
    </div>
  );
}
