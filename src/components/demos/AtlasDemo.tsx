import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { DemoBack } from "./DemoBack";

type ColumnId = "backlog" | "progress" | "done";
type Priority = "High" | "Medium" | "Low";

type Task = {
  id: string;
  title: string;
  tag: string;
  priority: Priority;
  assignee: string;
  due: string;
  column: ColumnId;
};

const PEOPLE: Record<string, { initials: string; color: string }> = {
  Ana: { initials: "AR", color: "bg-[#ded7ff] text-[#4b32c3]" },
  Luis: { initials: "LM", color: "bg-[#cdeee2] text-[#0f6b4f]" },
  Sofía: { initials: "SG", color: "bg-[#ffe2cc] text-[#8a4a12]" },
};

const COLUMNS: { id: ColumnId; label: string }[] = [
  { id: "backlog", label: "Backlog" },
  { id: "progress", label: "In progress" },
  { id: "done", label: "Done" },
];

const INITIAL_TASKS: Task[] = [
  {
    id: "t1",
    title: "Map legacy order flow",
    tag: "Research",
    priority: "High",
    assignee: "Ana",
    due: "May 14",
    column: "backlog",
  },
  {
    id: "t2",
    title: "Define role permissions",
    tag: "Product",
    priority: "Medium",
    assignee: "Luis",
    due: "May 16",
    column: "backlog",
  },
  {
    id: "t3",
    title: "Warehouse dashboard v0",
    tag: "Design",
    priority: "Low",
    assignee: "Sofía",
    due: "May 19",
    column: "backlog",
  },
  {
    id: "t4",
    title: "Sync API with ERP",
    tag: "Engineering",
    priority: "High",
    assignee: "Luis",
    due: "May 15",
    column: "progress",
  },
  {
    id: "t5",
    title: "Onboarding checklist",
    tag: "Design",
    priority: "Medium",
    assignee: "Sofía",
    due: "May 17",
    column: "progress",
  },
  {
    id: "t6",
    title: "Audit current suppliers",
    tag: "Research",
    priority: "Medium",
    assignee: "Ana",
    due: "May 12",
    column: "done",
  },
  {
    id: "t7",
    title: "Set up staging env.",
    tag: "Engineering",
    priority: "Low",
    assignee: "Luis",
    due: "May 11",
    column: "done",
  },
];

const PRIORITY_DOT: Record<Priority, string> = {
  High: "bg-[#f04438]",
  Medium: "bg-[#f5a524]",
  Low: "bg-[#98a2b3]",
};

const COLUMN_LABEL: Record<ColumnId, string> = {
  backlog: "Backlog",
  progress: "In progress",
  done: "Done",
};

export function AtlasDemo() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [filter, setFilter] = useState("Everyone");
  const [dragging, setDragging] = useState<string | null>(null);
  const [over, setOver] = useState<ColumnId | null>(null);
  const [composerOpen, setComposerOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");

  const visible = tasks.filter((task) => filter === "Everyone" || task.assignee === filter);
  const done = tasks.filter((task) => task.column === "done").length;
  const progress = Math.round((done / tasks.length) * 100);

  function move(id: string, column: ColumnId) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, column } : task)),
    );
  }

  function shift(id: string, direction: -1 | 1) {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;
    const index = COLUMNS.findIndex((column) => column.id === task.column);
    const next = COLUMNS[index + direction];
    if (next) move(id, next.id);
  }

  function addTask() {
    const clean = title.trim();
    if (!clean) return;
    setTasks((current) => [
      ...current,
      {
        id: `t-${Date.now()}`,
        title: clean,
        tag: "New",
        priority,
        assignee: "Ana",
        due: "May 23",
        column: "backlog",
      },
    ]);
    setTitle("");
    setPriority("Medium");
    setComposerOpen(false);
  }

  return (
    <div className="fixed inset-0 overflow-y-auto bg-[#f6f6fa] text-[#17161f] md:overflow-hidden">
      <div className="flex min-h-full flex-col lg:h-full">
        <header className="shrink-0 border-b border-[#e6e5ef] bg-white/80 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6b56ff] font-mono text-[15px] font-bold text-white">
              A
            </span>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold tracking-[-0.01em]">Atlas</p>
              <p className="truncate text-[10px] text-[#77748c]">Operations redesign · Sprint 14</p>
            </div>

            <div className="ml-auto hidden items-center gap-2 sm:flex">
              {Object.entries(PEOPLE).map(([name, person]) => (
                <span
                  key={name}
                  title={name}
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-semibold ring-2 ring-white ${person.color}`}
                >
                  {person.initials}
                </span>
              ))}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setComposerOpen((open) => !open)}
                aria-expanded={composerOpen}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#6b56ff] px-3 py-2 text-[11px] font-medium text-white transition-opacity hover:opacity-90"
              >
                <Plus size={13} strokeWidth={2.2} />
                New task
              </button>

              {composerOpen && (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    addTask();
                  }}
                  className="absolute right-0 top-11 z-30 w-[268px] rounded-xl border border-[#e6e5ef] bg-white p-3 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold">New task</p>
                    <button
                      type="button"
                      onClick={() => setComposerOpen(false)}
                      aria-label="Close"
                      className="text-[#77748c] transition-colors hover:text-[#17161f]"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <input
                    autoFocus
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="What needs to be done?"
                    aria-label="Task title"
                    className="mt-2.5 h-9 w-full rounded-lg border border-[#e6e5ef] px-2.5 text-[12px] outline-none focus:border-[#6b56ff]"
                  />
                  <div className="mt-2.5 flex items-center gap-2">
                    <select
                      value={priority}
                      onChange={(event) => setPriority(event.target.value as Priority)}
                      aria-label="Priority"
                      className="h-8 flex-1 rounded-lg border border-[#e6e5ef] px-2 text-[11px] outline-none focus:border-[#6b56ff]"
                    >
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                    <button
                      type="submit"
                      className="h-8 rounded-lg bg-[#6b56ff] px-3 text-[11px] font-medium text-white"
                    >
                      Add
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by assignee">
              {["Everyone", ...Object.keys(PEOPLE)].map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setFilter(name)}
                  aria-pressed={filter === name}
                  className={`rounded-full border px-2.5 py-1 text-[10px] transition-colors ${
                    filter === name
                      ? "border-[#6b56ff] bg-[#eeebff] text-[#4b32c3]"
                      : "border-[#e6e5ef] bg-white text-[#77748c] hover:border-[#c9c5dd]"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#8b88a0]">
                {done}/{tasks.length} done
              </span>
              <div className="h-1.5 w-28 overflow-hidden rounded-full bg-[#e6e5ef]">
                <div
                  className="h-full rounded-full bg-[#6b56ff] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto p-4 pb-16 sm:p-6 lg:overflow-hidden">
          <div className="grid gap-4 md:h-full md:grid-cols-3">
            {COLUMNS.map((column) => {
              const columnTasks = visible.filter((task) => task.column === column.id);
              return (
                <section
                  key={column.id}
                  onDragOver={(event) => {
                    event.preventDefault();
                    setOver(column.id);
                  }}
                  onDragLeave={() => setOver((current) => (current === column.id ? null : current))}
                  onDrop={(event) => {
                    event.preventDefault();
                    const id = event.dataTransfer.getData("text/plain") || dragging;
                    if (id) move(id, column.id);
                    setDragging(null);
                    setOver(null);
                  }}
                  aria-label={column.label}
                  className={`flex min-h-[180px] flex-col rounded-xl border p-2.5 transition-colors md:min-h-0 ${
                    over === column.id
                      ? "border-[#6b56ff]/50 bg-[#eeebff]/60"
                      : "border-[#e6e5ef] bg-[#efeff5]/60"
                  }`}
                >
                  <div className="flex items-center justify-between px-1.5 pb-2.5 pt-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          column.id === "done"
                            ? "bg-[#0f9d6e]"
                            : column.id === "progress"
                              ? "bg-[#6b56ff]"
                              : "bg-[#b3b0c4]"
                        }`}
                      />
                      <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#57546a]">
                        {column.label}
                      </h2>
                    </div>
                    <span className="rounded-md bg-white px-1.5 py-0.5 font-mono text-[9px] text-[#8b88a0]">
                      {columnTasks.length}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
                    {columnTasks.map((task) => (
                      <article
                        key={task.id}
                        draggable
                        onDragStart={(event) => {
                          event.dataTransfer.setData("text/plain", task.id);
                          event.dataTransfer.effectAllowed = "move";
                          setDragging(task.id);
                        }}
                        onDragEnd={() => {
                          setDragging(null);
                          setOver(null);
                        }}
                        className={`group cursor-grab rounded-lg border border-[#e6e5ef] bg-white p-3 shadow-[0_1px_2px_rgba(23,22,31,0.04)] transition-all active:cursor-grabbing ${
                          dragging === task.id ? "opacity-40" : "hover:border-[#c9c5dd]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded bg-[#f3f2f9] px-1.5 py-0.5 text-[9px] text-[#6a6780]">
                            {task.tag}
                          </span>
                          <span className="flex items-center gap-1 text-[9px] text-[#8b88a0]">
                            <span className={`h-1.5 w-1.5 rounded-full ${PRIORITY_DOT[task.priority]}`} />
                            {task.priority}
                          </span>
                        </div>

                        <p className="mt-2 text-[12px] font-medium leading-snug">{task.title}</p>

                        <div className="mt-3 flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            <span
                              className={`flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-semibold ${PEOPLE[task.assignee].color}`}
                            >
                              {PEOPLE[task.assignee].initials}
                            </span>
                            <span className="text-[9px] text-[#8b88a0]">{task.due}</span>
                          </span>

                          <span className="flex items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
                            {task.column !== "backlog" && (
                              <button
                                type="button"
                                onClick={() => shift(task.id, -1)}
                                aria-label={`Move ${task.title} to previous column`}
                                className="flex h-6 w-6 items-center justify-center rounded text-[#8b88a0] hover:bg-[#f3f2f9] hover:text-[#17161f]"
                              >
                                <ChevronLeft size={12} />
                              </button>
                            )}
                            {task.column !== "done" && (
                              <button
                                type="button"
                                onClick={() => shift(task.id, 1)}
                                aria-label={`Move ${task.title} to ${COLUMN_LABEL[COLUMNS[COLUMNS.findIndex((c) => c.id === task.column) + 1].id]}`}
                                className="flex h-6 w-6 items-center justify-center rounded text-[#8b88a0] hover:bg-[#f3f2f9] hover:text-[#17161f]"
                              >
                                <ChevronRight size={12} />
                              </button>
                            )}
                          </span>
                        </div>

                        {task.column === "done" && (
                          <p className="mt-2 flex items-center gap-1 text-[9px] text-[#0f9d6e]">
                            <Check size={10} strokeWidth={2.4} /> Completed
                          </p>
                        )}
                      </article>
                    ))}

                    {columnTasks.length === 0 && (
                      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-[#d8d6e3] p-4 text-center text-[10px] text-[#8b88a0]">
                        Drop a task here
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        </main>

        <footer className="hidden shrink-0 items-center justify-between border-t border-[#e6e5ef] bg-white py-2 pl-64 pr-6 text-[9px] text-[#8b88a0] md:flex">
          <span>Drag a card between columns, or use the arrows.</span>
          <span className="font-mono uppercase tracking-[0.1em]">Atlas · single view demo</span>
        </footer>
      </div>

      <DemoBack label="Atlas" tone="light" />
    </div>
  );
}
