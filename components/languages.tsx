import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

export function Languages() {
  return (
    <section id="languages" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Languages" title="How I communicate" />
        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
          {portfolio.languages.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05} className="flex-1">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-teal-700 dark:text-teal-300">
                  {item.level}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
