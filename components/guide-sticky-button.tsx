"use client"

import { useState } from "react"
import { X, BookOpen, Phone, Send } from "lucide-react"

const WA_NUMBER = "919084676999"

export function GuideStickyButton() {
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!phone) return
    setSent(true)
    const msg = `Hi Abroad Visions! I'd like the free MBBS Abroad Guide.%0AWhatsApp: ${phone}`
    setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank")
      setOpen(false)
      setSent(false)
      setPhone("")
    }, 1000)
  }

  return (
    <>
      {/* Sticky floating button Ã¢â‚¬â€ bottom left */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 24,
            left: 24,
            zIndex: 998,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#0d1b2a",
            color: "#fff",
            border: "none",
            borderRadius: 999,
            padding: "12px 18px",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
            transition: "transform 0.15s ease", animation: "guidePulse 2s ease-in-out infinite",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <style>{`@keyframes guidePulse { 0%, 100% { box-shadow: 0 4px 24px rgba(0,0,0,0.22), 0 0 0 0 rgba(13,27,42,0.4); } 50% { box-shadow: 0 4px 24px rgba(0,0,0,0.22), 0 0 0 8px rgba(13,27,42,0); } }`}</style><BookOpen size={16} />
          Free MBBS Guide
        </button>
      )}

      {/* Inline capture card */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            left: 24,
            zIndex: 998,
            background: "#fff",
            borderRadius: 16,
            padding: "20px 20px 16px",
            width: 300,
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            border: "1px solid #e5e7eb",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
            <div>
              <p style={{ fontSize: 14, fontWeight: 800, color: "#0d1b2a", margin: 0, lineHeight: 1.3 }}>
                Free MBBS Abroad Guide 2025
              </p>
              <p style={{ fontSize: 12, color: "#6b7280", margin: "4px 0 0" }}>
                The guide our counsellors share with every family Ã¢â‚¬â€ yours free via WhatsApp.
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: 0, marginLeft: 8, flexShrink: 0 }}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {sent ? (
            <div style={{ textAlign: "center", padding: "12px 0" }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>Ã¢Å“â€œ</div>
              <p style={{ fontSize: 13, color: "#16a34a", fontWeight: 600, margin: 0 }}>Opening WhatsAppÃ¢â‚¬Â¦</p>
              <p style={{ fontSize: 12, color: "#6b7280", margin: "4px 0 0" }}>We'll send the guide right away.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ position: "relative", marginBottom: 10 }}>
                <Phone size={14} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="Your WhatsApp number"
                  required
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  style={{
                    width: "100%",
                    padding: "10px 10px 10px 32px",
                    fontSize: 13,
                    border: "1px solid #d1d5db",
                    borderRadius: 8,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#25D366",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <Send size={14} />
                Send Me the Guide
              </button>
              <p style={{ fontSize: 11, color: "#9ca3af", textAlign: "center", margin: "8px 0 0" }}>
                We'll send it on WhatsApp. No spam, ever.
              </p>
            </form>
          )}
        </div>
      )}
    </>
  )
}
