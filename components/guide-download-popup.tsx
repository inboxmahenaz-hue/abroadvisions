"use client";

import { useState, useEffect } from "react";
import type React from "react";

/**
 * ── SETUP (2 things to change) ──────────────────────────────────────────
 * 1. WEB3FORMS_ACCESS_KEY — get a free key at https://web3forms.com
 *    (sign up with your email, no credit card needed, takes ~1 minute)
 * 2. PDF_PATH — path to the guide PDF inside your /public folder.
 *    e.g. put the file at  public/guides/mbbs-abroad-guide-2025.pdf
 *    then PDF_PATH = "/guides/mbbs-abroad-guide-2025.pdf"
 * ─────────────────────────────────────────────────────────────────────────
 */
const WEB3FORMS_ACCESS_KEY = "415e6112-a9fc-446f-9890-8bb0bd2fc00c";
const PDF_PATH = "/guides/mbbs-abroad-guide-2025.pdf";

type GuideDownloadPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function GuideDownloadPopup({ open, onClose }: GuideDownloadPopupProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Reset state each time the popup is reopened
  useEffect(() => {
    if (open) {
      setStatus("idle");
      setEmail("");
      setName("");
    }
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
          message: `New lead captured via the free guide popup.\n\nName: ${name || "Not provided"}\nEmail: ${email}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        // Remember so the auto-popup doesn't show again on this device
        if (typeof window !== "undefined") {
          localStorage.setItem("guidePopupShown", "1");
        }
        // Trigger the PDF download automatically
        const link = document.createElement("a");
        link.href = PDF_PATH;
        link.download = "MBBS-Abroad-Guide-2025.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setStatus("error");
      }
    } catch (err: unknown) {
      setStatus("error");
    }
  }

  return (
    <div className="gp-overlay" onClick={onClose}>
      <div className="gp-card" onClick={(e) => e.stopPropagation()}>
        <button className="gp-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {status !== "success" ? (
          <>
            <div className="gp-badge">100% Free · No Spam</div>
            <h2 className="gp-title">Download the Free MBBS Abroad Guide 2025</h2>
            <p className="gp-sub">
              Country-by-country costs, NMC-approved university lists, FMGE pass
              rates, eligibility rules and a step-by-step admission timeline —
              everything in one PDF.
            </p>

            <form onSubmit={handleSubmit} className="gp-form">
              <input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="gp-input"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="gp-input"
              />
              <button type="submit" className="gp-button" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Download Free Guide"}
              </button>
            </form>

            {status === "error" && (
              <p className="gp-error">
                Something went wrong. Please try again, or WhatsApp us at{" "}
                <a href="https://wa.me/919084676999">9084676999</a>.
              </p>
            )}

            <p className="gp-privacy">We never share your email. Unsubscribe anytime.</p>
          </>
        ) : (
          <div className="gp-success">
            <div className="gp-success-icon">✓</div>
            <h2 className="gp-title">Your guide is downloading…</h2>
            <p className="gp-sub">
              If the download didn't start automatically,{" "}
              <a href={PDF_PATH} download className="gp-link">
                click here to download it
              </a>
              .
            </p>
            <p className="gp-sub">
              Have questions already? Chat with us on{" "}
              <a
                href="https://wa.me/919084676999?text=Hi%2C%20I%20just%20downloaded%20the%20MBBS%20Abroad%20Guide%20and%20have%20a%20question."
                className="gp-link"
              >
                WhatsApp
              </a>
              .
            </p>
            <button className="gp-button" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .gp-overlay {
          position: fixed;
          inset: 0;
          background: rgba(13, 27, 42, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 9999;
          animation: gp-fade-in 0.2s ease-out;
        }
        .gp-card {
          position: relative;
          background: #ffffff;
          border-radius: 14px;
          max-width: 440px;
          width: 100%;
          padding: 32px 28px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          animation: gp-pop-in 0.25s ease-out;
        }
        .gp-close {
          position: absolute;
          top: 12px;
          right: 14px;
          background: none;
          border: none;
          font-size: 24px;
          line-height: 1;
          color: #6b7280;
          cursor: pointer;
        }
        .gp-close:hover {
          color: #0d1b2a;
        }
        .gp-badge {
          display: inline-block;
          background: #e8f0fe;
          color: #cc0000;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .gp-title {
          font-size: 22px;
          font-weight: 800;
          color: #0d1b2a;
          line-height: 1.3;
          margin: 0 0 8px;
        }
        .gp-sub {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.6;
          margin: 0 0 16px;
        }
        .gp-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .gp-input {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          outline: none;
          box-sizing: border-box;
        }
        .gp-input:focus {
          border-color: #cc0000;
        }
        .gp-button {
          width: 100%;
          background: #cc0000;
          color: #ffffff;
          font-weight: 700;
          font-size: 15px;
          border: none;
          border-radius: 8px;
          padding: 13px;
          cursor: pointer;
          transition: background 0.15s ease;
          margin-top: 4px;
        }
        .gp-button:hover {
          background: #a80000;
        }
        .gp-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .gp-privacy {
          font-size: 12px;
          color: #9ca3af;
          text-align: center;
          margin: 12px 0 0;
        }
        .gp-error {
          font-size: 13px;
          color: #cc0000;
          margin-top: 10px;
        }
        .gp-link {
          color: #cc0000;
          font-weight: 600;
          text-decoration: underline;
        }
        .gp-success {
          text-align: center;
        }
        .gp-success-icon {
          width: 48px;
          height: 48px;
          line-height: 48px;
          border-radius: 50%;
          background: #16a34a;
          color: #fff;
          font-size: 24px;
          margin: 0 auto 14px;
        }
        @keyframes gp-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes gp-pop-in {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/**
 * Optional helper: shows the popup automatically after `delayMs`,
 * but only once per browser (uses localStorage).
 *
 * Usage in a page/layout:
 *   const [autoOpen, dismissAuto] = useAutoGuidePopup(15000);
 *   <GuideDownloadPopup open={autoOpen} onClose={dismissAuto} />
 */
export function useAutoGuidePopup(delayMs = 15000) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("guidePopupShown")) return;

    const timer = setTimeout(() => setShow(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  const close = () => {
    setShow(false);
    localStorage.setItem("guidePopupShown", "1");
  };

  return [show, close];
}
