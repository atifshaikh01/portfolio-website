'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 1.5 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.p
            variants={item}
            className="mb-5 font-mono text-sm text-primary"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-balance text-foreground sm:text-7xl"
          >
            {profile.name}.
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-balance text-muted-foreground sm:text-5xl"
          >
            {profile.tagline}
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="size-4 text-primary" />
            {profile.location}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
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
                  className="grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column: Blended image container without a card design */}
        <motion.div
          variants={item}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative flex items-center justify-center">
            {/* Soft background glow that matches the site theme */}
            <div className="absolute -inset-10 rounded-full bg-primary/25 blur-3xl opacity-70 dark:opacity-40 animate-pulse pointer-events-none" />

            {/* Seamless blended image wrapper */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <Image
                src={(profile as any).avatar || '/placeholder-user.jpg'}
                alt={profile.name}
                fill
                className="object-cover object-center transition-all duration-700 ease-out select-none grayscale dark:grayscale-30 contrast-110 brightness-100 dark:brightness-90 hover:grayscale-0 hover:contrast-100 hover:scale-[1.02]"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 35%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 35%, transparent 75%)',
                }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          className="block"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
