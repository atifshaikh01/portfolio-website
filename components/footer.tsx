import { profile } from '@/lib/data'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <a
            href="#top"
            className="font-mono text-base font-bold text-foreground"
          >
            {profile.name}
            <span className="text-primary">.</span>
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.role} · Designed & built with care.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {[
            { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl text-center text-xs text-muted-foreground sm:text-left">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
