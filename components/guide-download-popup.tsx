"use client";

import { useState, useEffect } from "react";
import type React from "react";

const WEB3FORMS_ACCESS_KEY = "415e6112-a9fc-446f-9890-8bb0bd2fc00c";
const PDF_PATH = "/guides/mbbs-abroad-guide-2025.pdf";

type Props = { open: boolean; onClose: () => void };

function GuideDownloadPopup({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (open) { setStatus("idle"); setEmail(""); setName(""); }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New MBBS Abroad Guide download — Abroad Visions",
          from_name: "Abroad Visions Website",
          name: name || "Not provided",
          email,
          message: `New lead via free guide popup.\n\nName: ${name || "Not provided"}\nEmail: ${email}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        if (typeof window !== "undefined") localStorage.setItem("guidePopupShown", "1");
        const link = document.createElement("a");
        link.href = PDF_PATH;
        link.download = "MBBS-Abroad-Guide-2025.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(13,27,42,0.65)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px", zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative", background: "#fff", borderRadius: 14,
          maxWidth: 440, width: "100%", padding: "32px 28px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        }}
      >
        {/* Close */}
        <button onClick={onClose} aria-label="Close" style={{
          position: "absolute", top: 12, right: 14, background: "none",
          border: "none", fontSize: 24, color: "#6b7280", cursor: "pointer", lineHeight: 1,
        }}>×</button>

        {status !== "success" ? (
          <>
            <div style={{
              display: "inline-block", background: "#e8f0fe", color: "#cc0000",
              fontWeight: 700, fontSize: 12, letterSpacing: "0.04em",
              textTransform: "uppercase", padding: "4px 10px",
              borderRadius: 999, marginBottom: 12,
            }}>100% Free · No Spam</div>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0d1b2a", lineHeight: 1.3, margin: "0 0 8px" }}>
              Download the Free MBBS Abroad Guide 2025
            </h2>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6, margin: "0 0 16px" }}>
              Country-by-country costs, NMC-approved university lists, FMGE pass rates,
              eligibility rules and a step-by-step admission timeline — everything in one PDF.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <input type="text" placeholder="Your name (optional)" value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "12px 14px", fontSize: 14, border: "1px solid #d1d5db", borderRadius: 8, outline: "none", boxSizing: "border-box" }} />
              <input type="email" placeholder="Your email address" value={email}
                onChange={(e) => setEmail(e.target.value)} required
                style={{ width: "100%", padding: "12px 14px", fontSize: 14, border: "1px solid #d1d5db", borderRadius: 8, outline: "none", boxSizing: "border-box" }} />
              <button type="submit" disabled={status === "loading"} style={{
                width: "100%", background: "#cc0000", color: "#fff", fontWeight: 700,
                fontSize: 15, border: "none", borderRadius: 8, padding: 13,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.6 : 1, marginTop: 4,
              }}>
                {status === "loading" ? "Sending..." : "Download Free Guide"}
              </button>
            </form>

            {status === "error" && (
              <p style={{ fontSize: 13, color: "#cc0000", marginTop: 10 }}>
                Something went wrong. WhatsApp us at{" "}
                <a href="https://wa.me/919084676999" style={{ color: "#cc0000" }}>9084676999</a>.
              </p>
            )}
            <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", margin: "12px 0 0" }}>
              We never share your email. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: 48, height: 48, lineHeight: "48px", borderRadius: "50%",
              background: "#16a34a", color: "#fff", fontSize: 24, margin: "0 auto 14px",
            }}>✓</div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0d1b2a", margin: "0 0 8px" }}>
              Your guide is downloading…
            </h2>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6, margin: "0 0 16px" }}>
              If it did not start,{" "}
              <a href={PDF_PATH} download style={{ color: "#cc0000", fontWeight: 600 }}>click here</a>.
            </p>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6, margin: "0 0 16px" }}>
              Questions?{" "}
              <a href="https://wa.me/919084676999" style={{ color: "#cc0000", fontWeight: 600 }}>WhatsApp us</a>.
            </p>
            <button onClick={onClose} style={{
              width: "100%", background: "#cc0000", color: "#fff", fontWeight: 700,
              fontSize: 15, border: "none", borderRadius: 8, padding: 13, cursor: "pointer",
            }}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Self-contained named export — shows after 15s, once per device
export function AutoGuidePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("guidePopupShown")) return;
    const timer = setTimeout(() => setOpen(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    localStorage.setItem("guidePopupShown", "1");
  };

  return <GuideDownloadPopup open={open} onClose={close} />;
}

export default GuideDownloadPopup;
