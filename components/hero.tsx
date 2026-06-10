import Image from "next/image"
import { ArrowRight, ShieldCheck, BadgeCheck, Wallet } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { stats, whatsappLink } from "@/lib/data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 grain opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-0 size-[480px] rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-20 size-[420px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              NMC-Approved Universities · 7 Countries
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your child deserves to become a{" "}
              <span className="text-accent">doctor.</span> We make it happen.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              NEET score not enough for a government seat? MBBS abroad is the
              proven, NMC-recognised pathway thousands of Indian doctors have
              taken. Honest guidance, zero hidden fees, recommendations based on
              FMGE data — not commission.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#counselling"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
              >
                Get Free Counselling
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#countries"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Explore Destinations
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-success" /> NMC-Approved Only
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Wallet className="size-4 text-success" /> No Hidden Fees
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="size-4 text-success" /> End-to-End Support
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-20px_rgb(0,0,0,0.25)]">
              <Image
                src="/images/hero-student.png"
                alt="A confident Indian medical student in a white coat"
                width={720}
                height={820}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* floating stat card */}
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-background/90 p-4 shadow-xl backdrop-blur-md sm:-left-6">
              <p className="font-display text-2xl font-semibold text-foreground">100%</p>
              <p className="text-xs text-muted-foreground">FMGE — Tashkent Medical Academy</p>
            </div>
            <div className="absolute -right-2 top-6 rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-5">
              <p className="text-xs font-medium text-muted-foreground">Total cost from</p>
              <p className="font-display text-xl font-semibold text-accent">₹20 Lakh</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* stats strip */}
      <Reveal delay={120} className="relative mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 divide-border rounded-2xl border border-border bg-card sm:grid-cols-4 sm:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-5 py-6 text-center">
              <p className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
