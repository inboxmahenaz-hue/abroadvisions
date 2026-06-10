import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"
import { MapPin, Phone, Clock, Building2, BadgeCheck, Globe } from "lucide-react"
import { contact, whatsappLink } from "@/lib/data"

const trustMarkers = [
  {
    icon: Building2,
    title: "Registered Advisory",
    body: "Abroad Visions is a registered education consultancy operating under Indian law.",
  },
  {
    icon: BadgeCheck,
    title: "NMC-Aligned Process",
    body: "Every university on our list is cross-verified against the current NMC-approved institutions register.",
  },
  {
    icon: Globe,
    title: "University Partnerships",
    body: "Direct partnerships with admissions offices — no middlemen. Your application goes to the university, not through layers of agents.",
  },
  {
    icon: Clock,
    title: "Response within 2 hours",
    body: "Enquiries during business hours (9 AM – 7 PM IST) receive a response within 2 hours, guaranteed.",
  },
]

export function OfficeSection() {
  return (
    <section id="office" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Our Office"
          title="A real team. A real address. Reach us anytime."
          description="We are not a website run by an anonymous agent. Here is exactly where to find us and how we operate."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Trust markers grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {trustMarkers.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <m.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-card-foreground">{m.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contact card */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-foreground">Get in touch directly</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Office Location</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      Abroad Visions, Ajmal Khan Road,<br />
                      Najibabad, District Bijnor,<br />
                      Uttar Pradesh, India — PIN 246763
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone &amp; WhatsApp</p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="mt-0.5 block text-sm text-accent hover:underline"
                    >
                      +91 {contact.phone}
                    </a>
                    <a
                      href={`tel:${contact.phone2}`}
                      className="mt-0.5 block text-sm text-accent hover:underline"
                    >
                      +91 {contact.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Business Hours</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">Mon – Sat, 9 AM – 7 PM IST</p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappLink("Hi, I'd like to know more about Abroad Visions and your office.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Message us on WhatsApp
              </a>

              <p className="text-center text-xs text-muted-foreground">
                Average response time: under 2 hours on working days
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
