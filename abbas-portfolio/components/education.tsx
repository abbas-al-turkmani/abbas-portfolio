import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {portfolio.education.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-teal-700 dark:text-teal-300">
                    {item.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {item.institution}
                  {item.note ? ` · ${item.note}` : ""}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
