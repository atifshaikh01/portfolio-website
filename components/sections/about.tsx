import { Reveal, SectionHeading } from '@/components/reveal'
import { profile } from '@/lib/data'

const stats = [
  { value: '2+', label: 'Years experience' },
  { value: '~70', label: 'Users on internal tools' },
  { value: '5+', label: 'Shipped projects' },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01." title="About me" />
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="space-y-5">
              {profile.about.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <Reveal delay={0.15}>
              <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div className="font-heading text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
