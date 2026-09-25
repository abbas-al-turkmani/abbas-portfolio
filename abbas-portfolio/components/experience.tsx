import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Where I have been building" />
        <ol className="relative mx-auto mt-12 max-w-3xl border-l border-slate-200 pl-8 dark:border-slate-800">
          {portfolio.experience.map((item, index) => (
            <li key={`${item.role}-${item.organization}`} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[41px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-teal-600 dark:border-slate-950" />
              <Reveal delay={index * 0.05}>
                <p className="text-sm font-medium text-teal-700 dark:text-teal-300">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.organization}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
