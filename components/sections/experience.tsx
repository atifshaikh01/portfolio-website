import { Reveal, SectionHeading } from '@/components/reveal'
import { education, experiences } from '@/lib/data'
import { GraduationCap } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02." title="Experience & Education" />

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute left-2 top-2 hidden h-full w-px bg-border sm:block"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role + exp.period} delay={i * 0.05}>
                <div className="relative sm:pl-12">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 hidden size-4 -translate-x-[7px] rounded-full border-2 border-primary bg-background sm:block"
                  />
                  <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {exp.role}{' '}
                        <span className="text-primary">· {exp.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 0.05}>
                <div className="relative sm:pl-12">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 hidden size-4 -translate-x-[7px] place-items-center rounded-full border-2 border-primary bg-background sm:grid"
                  />
                  <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-6">
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <GraduationCap className="size-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {edu.degree} — {edu.field}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
