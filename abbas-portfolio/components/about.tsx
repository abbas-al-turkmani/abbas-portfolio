import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="An experienced Flutter developer"
        />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <Reveal className="mx-auto lg:mx-0">
            <div className="relative h-52 w-52 overflow-hidden rounded-[2rem] border-8 border-white bg-slate-100 shadow-xl ring-1 ring-teal-100 dark:border-slate-900 dark:bg-slate-800 dark:ring-teal-900">
              <Image
                src="/profile.jpg"
                alt={`Portrait of ${portfolio.personal.name}`}
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="text-center lg:text-left">
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {portfolio.personal.summary}
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 margin">
          {portfolio.highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-2xl font-bold text-teal-700 dark:text-teal-300">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
