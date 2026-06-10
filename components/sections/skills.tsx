import { Reveal, SectionHeading } from '@/components/reveal'
import { skillGroups } from '@/lib/data'

const achievement =
  'Led a team of interns — coordinating task assignments, providing technical mentorship, and ensuring timely delivery of project milestones.'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04." title="Skills & expertise" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-accent px-3 py-1.5 text-sm text-accent-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-2xl border border-primary/30 bg-accent/40 p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary">
              Leadership
            </h3>
            <p className="mt-2 text-pretty text-base leading-relaxed text-foreground">
              {achievement}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
