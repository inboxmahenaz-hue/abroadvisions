"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

const FLAG_MAP: Record<string, string> = {
  Russia: "🇷🇺", Bangladesh: "🇧🇩", China: "🇨🇳", Nepal: "🇳🇵",
  Georgia: "🇬🇪", Uzbekistan: "🇺🇿", Kazakhstan: "🇰🇿", Romania: "🇷🇴",
  Kyrgyzstan: "🇰🇬", Vietnam: "🇻🇳", Serbia: "🇷🇸", Armenia: "🇦🇲",
  Mauritius: "🇲🇺", Guyana: "🇬🇾", Indonesia: "🇮🇩", Barbados: "🇧🇧",
  "United Kingdom": "🇬🇧",
};

const WA_NUMBER = "919084676999";

export default function UniversityDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [uni, setUni] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/universities/${id}`)
      .then((r) => r.json())
      .then((data) => { setUni(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "oklch(0.97 0.01 264)" }}>
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ borderColor: "oklch(0.27 0.06 264)", borderTopColor: "transparent" }} />
        <p style={{ color: "oklch(0.27 0.06 264)", fontFamily: "var(--font-geist-sans)" }}>Loading...</p>
      </div>
    </div>
  );

  if (!uni || uni.error) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "oklch(0.97 0.01 264)" }}>
      <div className="text-center">
        <p className="text-2xl mb-4">University not found</p>
        <button onClick={() => router.push("/course-finder")} className="px-6 py-2 rounded-full text-white" style={{ background: "oklch(0.27 0.06 264)" }}>← Back to Course Finder</button>
      </div>
    </div>
  );

  const flag = FLAG_MAP[uni.country] || "🌍";
  const waMessage = encodeURIComponent(`Hi, I'm interested in ${uni.university} for MBBS. Please share details.`);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;
  const feeWaMessage = encodeURIComponent(`Hi, please share the fee structure for ${uni.university}.`);
  const feeWaLink = `https://wa.me/${WA_NUMBER}?text=${feeWaMessage}`;

  return (
    <div style={{ background: "oklch(0.97 0.01 264)", minHeight: "100vh", fontFamily: "var(--font-geist-sans)" }}>

      {/* Back button */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <button onClick={() => router.push("/course-finder")}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all hover:opacity-80"
          style={{ background: "oklch(0.27 0.06 264)", color: "white" }}>
          ← Back to Course Finder
        </button>
      </div>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div className="rounded-2xl overflow-hidden relative" style={{ height: 320, background: "oklch(0.27 0.06 264)" }}>
          {uni.photo && !imgError ? (
            <img src={uni.photo} alt={uni.university} onError={() => setImgError(true)}
              className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">{flag}</div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }} />
          {/* Country badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>
            {flag} {uni.country}
          </div>
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end gap-4">
              {uni.logo && (
                <img src={uni.logo} alt="logo" className="w-16 h-16 rounded-xl object-contain"
                  style={{ background: "white", padding: 6 }} />
              )}
              <div>
                <p className="text-white/70 text-sm mb-1">MBBS · {uni.duration} Years</p>
                <h1 className="text-white text-2xl font-bold leading-tight">{uni.university}</h1>
                <p className="text-white/80 text-sm mt-1">📍 {uni.city}{uni.state ? `, ${uni.state}` : ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 mt-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left column — main info */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Recognition badges */}
          {(uni.badges?.nmc || uni.badges?.who || uni.badges?.wdoms || uni.badges?.faimer) && (
            <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid oklch(0.9 0.02 264)" }}>
              <h2 className="font-bold text-base mb-3" style={{ color: "oklch(0.27 0.06 264)" }}>Recognitions & Accreditations</h2>
              <div className="flex flex-wrap gap-2">
                {uni.badges.nmc && <span className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: "oklch(0.95 0.05 145)", color: "oklch(0.35 0.12 145)" }}>✅ NMC Recognized</span>}
                {uni.badges.who && <span className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: "oklch(0.95 0.05 145)", color: "oklch(0.35 0.12 145)" }}>✅ WHO Listed</span>}
                {uni.badges.wdoms && <span className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: "oklch(0.95 0.05 145)", color: "oklch(0.35 0.12 145)" }}>✅ WDOMS Listed</span>}
                {uni.badges.faimer && <span className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: "oklch(0.95 0.05 145)", color: "oklch(0.35 0.12 145)" }}>✅ FAIMER Listed</span>}
              </div>
            </div>
          )}

          {/* About */}
          {uni.introduction && (
            <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid oklch(0.9 0.02 264)" }}>
              <h2 className="font-bold text-base mb-3" style={{ color: "oklch(0.27 0.06 264)" }}>About the University</h2>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.4 0.04 264)" }}>{uni.introduction}</p>
            </div>
          )}

          {/* Quick facts */}
          <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid oklch(0.9 0.02 264)" }}>
            <h2 className="font-bold text-base mb-4" style={{ color: "oklch(0.27 0.06 264)" }}>University Details</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Course", value: "MBBS" },
                { label: "Duration", value: uni.duration ? `${uni.duration} Years` : "—" },
                { label: "Medium", value: "English" },
                { label: "Intake", value: uni.intake || "—" },
                { label: "Location", value: uni.city || "—" },
                { label: "Country", value: `${flag} ${uni.country}` },
                { label: "Established", value: uni.established_year ? `${uni.established_year}` : "—" },
                { label: "Entrance Exam", value: "NEET Required" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-3" style={{ background: "oklch(0.97 0.01 264)" }}>
                  <p className="text-xs font-medium mb-0.5" style={{ color: "oklch(0.55 0.04 264)" }}>{item.label}</p>
                  <p className="text-sm font-semibold" style={{ color: "oklch(0.27 0.06 264)" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FMGE rates */}
          {uni.fmge_rates && uni.fmge_rates.length > 0 && (
            <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid oklch(0.9 0.02 264)" }}>
              <h2 className="font-bold text-base mb-3" style={{ color: "oklch(0.27 0.06 264)" }}>FMGE / NExT Pass Rates</h2>
              <div className="flex flex-wrap gap-3">
                {uni.fmge_rates.map((r: any) => (
                  <div key={r.year} className="rounded-xl px-4 py-3 text-center" style={{ background: "oklch(0.97 0.01 264)", minWidth: 80 }}>
                    <p className="text-lg font-bold" style={{ color: "oklch(0.27 0.06 264)" }}>{r.rate}</p>
                    <p className="text-xs" style={{ color: "oklch(0.55 0.04 264)" }}>{r.year}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right column — sticky CTA sidebar */}
        <div className="flex flex-col gap-4">

          {/* Fee card */}
          <div className="rounded-2xl p-5" style={{ background: "oklch(0.27 0.06 264)" }}>
            <h2 className="font-bold text-base mb-1 text-white">Fee Structure</h2>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Get the latest 2025 fee details directly from our counsellors</p>
            <a href={feeWaLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: "#25D366", color: "white" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp for Fee Details
            </a>
          </div>

          {/* Enquire card */}
          <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid oklch(0.9 0.02 264)" }}>
            <h2 className="font-bold text-base mb-1" style={{ color: "oklch(0.27 0.06 264)" }}>Interested in this university?</h2>
            <p className="text-sm mb-4" style={{ color: "oklch(0.55 0.04 264)" }}>Talk to our MBBS abroad counsellors — free consultation</p>
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: "#25D366", color: "white" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Free Counselling on WhatsApp
            </a>
            {uni.website && (
              <a href={uni.website} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm mt-3 transition-all hover:opacity-80"
                style={{ background: "oklch(0.97 0.01 264)", color: "oklch(0.27 0.06 264)", border: "1px solid oklch(0.85 0.03 264)" }}>
                🌐 Visit Official Website
              </a>
            )}
          </div>

          {/* Address card */}
          {uni.address && (
            <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid oklch(0.9 0.02 264)" }}>
              <h2 className="font-bold text-base mb-2" style={{ color: "oklch(0.27 0.06 264)" }}>Address</h2>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.04 264)" }}>📍 {uni.address}</p>
              {uni.established_year && (
                <p className="text-sm mt-2 font-medium" style={{ color: "oklch(0.45 0.04 264)" }}>🏛️ Est. {uni.established_year}</p>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}