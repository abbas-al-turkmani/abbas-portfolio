import { ExternalIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Mobile apps I have shipped in training and practice"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800 dark:bg-teal-950/60 dark:text-teal-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-teal-300"
                >
                  View on GitHub
                  <ExternalIcon className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
