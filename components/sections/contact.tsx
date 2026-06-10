import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/data'
import { Download, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-mono text-sm text-primary">05. What’s next?</p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Let’s build something great.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            I’m open to new opportunities and collaborations. Whether you have a
            role in mind or just want to talk shop, my inbox is always open — I’ll
            do my best to get back to you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              Say hello
            </a>
            <a
              href={profile.resume}
              download
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="size-4" />
              Download résumé
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/50"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-accent text-accent-foreground">
                <Mail className="size-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="block text-sm font-medium text-foreground">
                  {profile.email}
                </span>
              </span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/50"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-accent text-accent-foreground">
                <Phone className="size-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Phone</span>
                <span className="block text-sm font-medium text-foreground">
                  {profile.phone}
                </span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex items-center justify-center gap-2">
            {[
              { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
