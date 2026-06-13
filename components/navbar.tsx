"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { whatsappLink } from "@/lib/data"

const links = [
  { label: "Why Abroad", href: "/#why" },
  { label: "Countries", href: "/#countries" },
  { label: "Universities", href: "/#universities" },
  { label: "Course Finder", href: "/course-finder" },
  { label: "Cost", href: "/#calculator" },
  { label: "Eligibility", href: "/#eligibility" },
  { label: "Stories", href: "/#stories" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4",
          scrolled
            ? "border-border bg-background/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <a href="/#top" className="flex items-center gap-2.5" aria-label="Abroad Visions home">
          <Image
            src="/images/abroad-visions-logo.jpeg"
            alt="Abroad Visions logo"
            width={40}
            height={40}
            className="size-9 rounded-lg object-cover sm:size-10"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight text-foreground">
              Abroad Visions
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              MBBS Admissions Abroad
            </span>
          </span>
        </a>

  <div className="hidden items-center gap-1 lg:flex">
  {links.map((l) => (
    <Link
      key={l.href}
      href={l.href}
      className={cn(
        "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        l.href === "/course-finder"
          ? "text-accent font-semibold hover:bg-accent/10"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      )}
    >
      {l.label}
    </Link>
  ))}
</div>

        <div className="flex items-center gap-2">
          <a
            href="tel:9084676999"
            className="hidden items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:flex"
          >
            <Phone className="size-4" />
            9084676999
          </a>
          <a
            href={whatsappLink("Hi Abroad Visions, I'd like free MBBS abroad counselling.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Free Counselling
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-background/95 p-3 shadow-lg backdrop-blur-xl lg:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
  <Link
    key={l.href}
    href={l.href}
    onClick={() => setOpen(false)}
    className={cn(
      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary",
      l.href === "/course-finder" ? "text-accent font-semibold" : "text-foreground"
    )}
  >
    {l.label}
  </Link>
))}
            <a
              href={whatsappLink("Hi Abroad Visions, I'd like free MBBS abroad counselling.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Get Free Counselling
            </a>
          </div>
        </div>
      )}
    </header>
  )
}