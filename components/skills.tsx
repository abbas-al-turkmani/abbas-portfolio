import { Code2, Database, GitBranch, Smartphone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

const icons = {
  smartphone: Smartphone,
  network: GitBranch,
  database: Database,
  code: Code2,
} as const;

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to turn ideas into useful apps"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {portfolio.skills.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = icons[group.icon];
                    return (
                      <Icon
                        className="h-5 w-5 text-teal-600 dark:text-teal-400"
                        aria-hidden="true"
                      />
                    );
                  })()}
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3 text-sm last:border-0 last:pb-0 dark:border-slate-800"
                    >
                      <span className="text-slate-700 dark:text-slate-200">
                        {item.name}
                      </span>
                      <span className="shrink-0 rounded-full bg-teal-50 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-teal-800 dark:bg-teal-950/60 dark:text-teal-200">
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
