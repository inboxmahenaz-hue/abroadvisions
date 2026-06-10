import Image from "next/image"
import { contact, whatsappLink } from "@/lib/data"
import { Phone, MessageCircle, Globe, MapPin } from "lucide-react"

const navLinks = [
  { href: "#countries", label: "Countries" },
  { href: "#universities", label: "Universities" },
  { href: "#calculator", label: "Fee Calculator" },
  { href: "#eligibility", label: "Eligibility Check" },
  { href: "#process", label: "Process" },
  { href: "#stories", label: "Success Stories" },
  { href: "#faq", label: "FAQ" },
]

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/abroad-visions-logo.jpeg"
                alt="Abroad Visions logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-foreground">Abroad Visions</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">MBBS Beyond Borders</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Honest MBBS admissions guidance for Indian NEET students. NMC-approved universities only,
              real FMGE data, and transparent fees — so your child can study medicine abroad and practise
              in India with confidence.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent"
              >
                <Phone className="size-4" aria-hidden="true" /> {contact.phone}
              </a>
              <a
                href={`tel:${contact.phone2}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent"
              >
                <Phone className="size-4" aria-hidden="true" /> {contact.phone2}
              </a>
              <a
                href={whatsappLink("Hi Abroad Visions, I'd like to know more about MBBS abroad.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent"
              >
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Globe className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {contact.website}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <a href={`tel:${contact.phone}`} className="hover:text-accent transition-colors">{contact.phone}</a>
                  {" · "}
                  <a href={`tel:${contact.phone2}`} className="hover:text-accent transition-colors">{contact.phone2}</a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>Ajmal Khan Road, Najibabad,<br />District Bijnor, UP — 246763</span>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="font-display text-sm font-semibold text-foreground">Legal</h3>
              <ul className="mt-3 space-y-2">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Abroad Visions. All rights reserved.</p>
          <p className="max-w-xl text-pretty">
            FMGE pass rates and fees are indicative and subject to change. Always verify NMC recognition
            before admission. Abroad Visions is an independent education advisory — not affiliated with any
            university.
          </p>
        </div>
      </div>
    </footer>
  )
}
