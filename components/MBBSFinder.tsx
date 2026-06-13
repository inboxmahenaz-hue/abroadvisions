"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export interface University {
  id: number;
  university: string;
  course: string;
  country: string | null;
  city: string | null;
  state: string | null;
  address: string | null;
  photo: string;
  logo: string;
  website: string | null;
  duration: string | null;
  intake: string | null;
  currency: string | null;
  tuition_fee: string | null;
  tuition_fee_type: string | null;
  total_fees: string | null;
  hostel_fee: string | null;
  health_insurance_fee: string | null;
  detail_html: string | null;
}

interface ApiResponse {
  total: number;
  page: number;
  per_page: number;
  has_more: boolean;
  data: University[];
}

const WHATSAPP_NUMBER = "919084676999";

const COUNTRIES = [
  "All", "Russia", "Bangladesh", "China", "Nepal", "Georgia", "Uzbekistan",
  "Kazakhstan", "Romania", "Kyrgyzstan", "Vietnam", "UK", "Armenia", "Serbia"
];

const COUNTRY_FLAGS: Record<string, string> = {
  Russia: "🇷🇺", Bangladesh: "🇧🇩", China: "🇨🇳", Nepal: "🇳🇵",
  Georgia: "🇬🇪", Uzbekistan: "🇺🇿", Kazakhstan: "🇰🇿", Romania: "🇷🇴",
  Kyrgyzstan: "🇰🇬", Vietnam: "🇻🇳", UK: "🇬🇧", Armenia: "🇦🇲",
  Serbia: "🇷🇸", Mauritius: "🇲🇺", Indonesia: "🇮🇩", Barbados: "🇧🇧",
};

function getFlag(country: string | null): string {
  if (!country) return "🌍";
  return COUNTRY_FLAGS[country] || "🌍";
}

function openWhatsApp(universityName: string) {
  const msg = encodeURIComponent(
    `Hi! I'm interested in MBBS at ${universityName}. Please share admission details and fees.`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
}

function getRecognitionBadges(detailHtml: string | null): string[] {
  if (!detailHtml) return [];
  const badges: string[] = [];
  const text = detailHtml.toLowerCase();
  if (text.includes("nmc") || text.includes("national medical commission")) badges.push("NMC Recognized");
  if (text.includes("who") || text.includes("world health organization")) badges.push("WHO Listed");
  return badges;
}

function getShortlist(): number[] {
  try {
    return JSON.parse(localStorage.getItem("av_shortlist") || "[]");
  } catch { return []; }
}

function toggleShortlist(id: number): boolean {
  const current = getShortlist();
  const exists = current.includes(id);
  const updated = exists ? current.filter(x => x !== id) : [...current, id];
  localStorage.setItem("av_shortlist", JSON.stringify(updated));
  return !exists;
}

export default function MBBSFinder() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [country, setCountry] = useState("All");

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(t);
  }, [search]);

  const fetchPage = useCallback(async (pageNum: number, q: string, c: string, append: boolean) => {
    if (append) setLoadingMore(true);
    else setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (q) params.set("search", q);
      if (c && c !== "All") params.set("country", c);
      params.set("page", String(pageNum));
      params.set("per_page", "30");
      const res = await fetch(`/api/universities?${params}`);
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const json: ApiResponse = await res.json();
      setTotal(json.total);
      setHasMore(json.has_more);
      setPage(json.page);
      setUniversities(prev => append ? [...prev, ...json.data] : json.data);
    } catch (e) {
      setError("Could not load universities. Please try again.");
      console.error(e);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(1, debouncedSearch, country, false);
  }, [debouncedSearch, country, fetchPage]);

  function loadMore() {
    fetchPage(page + 1, debouncedSearch, country, true);
  }

  return (
    <div style={s.root}>
      <div style={s.header}>
        <h2 style={s.heading}>MBBS Abroad Universities</h2>
        <p style={s.subheading}>NMC-recognised programs • Direct admissions • No Donation</p>
      </div>

      <div style={s.filterBar}>
        <div style={s.searchWrap}>
          <span style={s.searchIcon}>🔍</span>
          <input
            style={s.searchInput}
            type="text"
            placeholder="Search by university name, country, or city"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button style={s.clearBtn} onClick={() => setSearch("")}>✕</button>
          )}
        </div>
      </div>

      <div style={s.countryBar}>
        {COUNTRIES.map(c => (
          <button
            key={c}
            style={c === country ? s.countryBtnActive : s.countryBtn}
            onClick={() => setCountry(c)}
          >
            {c !== "All" && getFlag(c)} {c}
          </button>
        ))}
      </div>

      {loading && (
        <div style={s.centered}>
          <div style={s.spinner} />
          <p style={s.mutedText}>Loading universities...</p>
        </div>
      )}

      {error && !loading && (
        <div style={s.errorBox}>
          <p style={{ margin: 0 }}>{error}</p>
          <button style={s.retryBtn} onClick={() => fetchPage(1, debouncedSearch, country, false)}>
            Try again
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <p style={s.resultCount}>
            {total} universit{total === 1 ? "y" : "ies"} found
          </p>
          {universities.length === 0 ? (
            <div style={s.centered}>
              <p style={s.mutedText}>No universities match your search.</p>
            </div>
          ) : (
            <>
              <div style={s.grid}>
                {universities.map(u => (
                  <UniversityCard key={u.id} university={u} />
                ))}
              </div>
              {hasMore && (
                <div style={s.loadMoreWrap}>
                  <button style={s.loadMoreBtn} onClick={loadMore} disabled={loadingMore}>
                    {loadingMore ? "Loading..." : "Load more universities"}
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

function UniversityCard({ university: u }: { university: University }) {
  const router = useRouter();
  const [imgError, setImgError] = useState(!u.photo);
  const [shortlisted, setShortlisted] = useState(false);
  const badges = getRecognitionBadges(u.detail_html);

  useEffect(() => {
    setShortlisted(getShortlist().includes(u.id));
  }, [u.id]);

  function handleShortlist(e: React.MouseEvent) {
    e.stopPropagation();
    const added = toggleShortlist(u.id);
    setShortlisted(added);
  }

  function handleViewDetails() {
    router.push(`/course-finder/${u.id}`);
  }

  return (
    <div style={s.card}>
      {/* Image */}
      <div style={s.cardImgWrap}>
        {!imgError ? (
          <img src={u.photo} alt={u.university} style={s.cardImg} onError={() => setImgError(true)} />
        ) : (
          <div style={s.initialsFallback}>{u.university.slice(0, 4).toUpperCase()}</div>
        )}
        {u.country && (
          <div style={s.countryBadge}>{getFlag(u.country)} {u.country}</div>
        )}
        {/* Shortlist heart — top right of image */}
        <button
          style={{ ...s.heartBtn, ...(shortlisted ? s.heartBtnActive : {}) }}
          onClick={handleShortlist}
          title={shortlisted ? "Remove from shortlist" : "Add to shortlist"}
        >
          {shortlisted ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Body */}
      <div style={s.cardBody}>
        <h3 style={s.uniName}>{u.university}</h3>
        {u.city && (
          <p style={s.location}>📍 {u.city}{u.state ? `, ${u.state}` : ""}</p>
        )}

        <div style={s.metaRow}>
          <span style={s.pill}>🎓 {u.course || "MBBS"}</span>
          {u.duration && <span style={s.pill}>⏳ {u.duration} Years</span>}
          {u.intake && <span style={s.pill}>📅 {u.intake}</span>}
        </div>

        {badges.length > 0 && (
          <div style={s.metaRow}>
            {badges.map(b => (
              <span key={b} style={s.badge}>✅ {b}</span>
            ))}
          </div>
        )}

        {/* Fee teaser — no numbers, just CTA */}
        <div style={s.feeTeaser}>
          <span style={s.feeTeaserText}>💰 Fee structure available on request</span>
        </div>

        {/* Action buttons */}
        <div style={s.actionsRow}>
          <button style={s.shortlistBtn} onClick={handleShortlist}>
            {shortlisted ? "❤️ Shortlisted" : "🤍 Shortlist"}
          </button>
          <button style={s.viewDetailsBtn} onClick={handleViewDetails}>
            ℹ️ View Details
          </button>
        </div>

        {/* WhatsApp full width below */}
        <button style={s.waBtn} onClick={() => openWhatsApp(u.university)}>
          <WhatsAppIcon />
          Get Free Counselling
        </button>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.3-.347.45-.52.146-.174.194-.298.293-.497.099-.198.05-.371-.05-.52-.099-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.892.526 3.66 1.438 5.168L2 22l4.832-1.438C8.34 21.474 10.108 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.5c-1.722 0-3.32-.485-4.687-1.327l-.336-.207-3.477.97.984-3.391-.219-.348A8.466 8.466 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/>
    </svg>
  );
}

const PRIMARY = "oklch(0.27 0.06 264)";
const ACCENT = "oklch(0.58 0.21 25)";
const ACCENT_FG = "oklch(0.99 0.003 92)";
const PRIMARY_FG = "oklch(0.99 0.003 92)";
const FOREGROUND = "oklch(0.21 0.03 264)";
const SUCCESS = "oklch(0.62 0.15 155)";
const SUCCESS_BG = "oklch(0.62 0.15 155 / 0.12)";
const MUTED = "oklch(0.96 0.006 92)";
const MUTED_FG = "oklch(0.5 0.02 264)";
const BORDER = "oklch(0.9 0.008 92)";
const CARD_BG = "oklch(1 0 0)";
const RADIUS_LG = "1.225rem";
const RADIUS_MD = "0.7rem";
const FONT_SANS = "var(--font-sans, var(--font-geist-sans, 'Geist', system-ui, sans-serif))";
const FONT_DISPLAY = "var(--font-display, var(--font-geist-sans, 'Geist', system-ui, sans-serif))";

const s: Record<string, React.CSSProperties> = {
  root: { fontFamily: FONT_SANS, maxWidth: 1200, margin: "0 auto", padding: "0 16px 48px", color: FOREGROUND },
  header: { background: ACCENT, borderRadius: RADIUS_LG, padding: "40px 32px", marginBottom: 28, textAlign: "center", color: ACCENT_FG },
  heading: { margin: 0, fontFamily: FONT_DISPLAY, fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, letterSpacing: "-0.5px" },
  subheading: { margin: "8px 0 0", fontSize: 15, opacity: 0.85, fontWeight: 400 },
  filterBar: { display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" },
  searchWrap: { flex: 1, minWidth: 220, position: "relative", display: "flex", alignItems: "center" },
  searchIcon: { position: "absolute", left: 12, fontSize: 16, pointerEvents: "none" },
  searchInput: { width: "100%", padding: "11px 36px 11px 38px", border: `1.5px solid ${BORDER}`, borderRadius: RADIUS_MD, fontSize: 14, outline: "none", boxSizing: "border-box", background: CARD_BG, color: FOREGROUND, fontFamily: FONT_SANS },
  clearBtn: { position: "absolute", right: 10, background: "none", border: "none", cursor: "pointer", fontSize: 14, color: MUTED_FG },
  countryBar: { display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" },
  countryBtn: { background: MUTED, color: PRIMARY, border: `1px solid ${BORDER}`, borderRadius: RADIUS_LG, padding: "6px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: FONT_SANS },
  countryBtnActive: { background: PRIMARY, color: PRIMARY_FG, border: `1px solid ${PRIMARY}`, borderRadius: RADIUS_LG, padding: "6px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: FONT_SANS },
  resultCount: { color: MUTED_FG, fontSize: 13, marginBottom: 16, fontWeight: 500 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 },
  card: { background: CARD_BG, borderRadius: RADIUS_LG, border: `1px solid ${BORDER}`, boxShadow: "0 2px 12px oklch(0.21 0.03 264 / 0.06)", overflow: "hidden", display: "flex", flexDirection: "column" },
  cardImgWrap: { position: "relative", height: 160, background: MUTED, overflow: "hidden" },
  cardImg: { width: "100%", height: "100%", objectFit: "cover" },
  initialsFallback: { width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800, color: PRIMARY, background: MUTED },
  countryBadge: { position: "absolute", top: 10, left: 10, background: "oklch(1 0 0 / 0.92)", color: PRIMARY, borderRadius: RADIUS_LG, padding: "4px 10px", fontSize: 12, fontWeight: 600, boxShadow: "0 1px 4px oklch(0 0 0 / 0.15)" },
  heartBtn: { position: "absolute", top: 10, right: 10, background: "oklch(1 0 0 / 0.92)", border: "none", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 16, boxShadow: "0 1px 4px oklch(0 0 0 / 0.15)" },
  heartBtnActive: { background: "oklch(0.97 0.05 25 / 0.95)" },
  cardBody: { padding: "16px 18px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 0 },
  uniName: { margin: "0 0 4px", fontFamily: FONT_DISPLAY, fontSize: 15, fontWeight: 700, color: PRIMARY, lineHeight: 1.35 },
  location: { margin: "0 0 10px", fontSize: 13, color: MUTED_FG },
  metaRow: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 },
  pill: { background: MUTED, color: PRIMARY, borderRadius: RADIUS_LG, padding: "3px 10px", fontSize: 12, fontWeight: 500 },
  badge: { background: SUCCESS_BG, color: SUCCESS, borderRadius: RADIUS_LG, padding: "3px 10px", fontSize: 12, fontWeight: 600 },
  feeTeaser: { background: MUTED, borderRadius: RADIUS_MD, padding: "8px 12px", marginBottom: 12, marginTop: "auto" },
  feeTeaserText: { fontSize: 12, color: MUTED_FG, fontWeight: 500 },
  actionsRow: { display: "flex", gap: 8, marginBottom: 8 },
  shortlistBtn: { flex: 1, padding: "10px 8px", background: MUTED, color: PRIMARY, border: `1px solid ${BORDER}`, borderRadius: RADIUS_MD, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: FONT_SANS },
  viewDetailsBtn: { flex: 1, padding: "10px 8px", background: PRIMARY, color: PRIMARY_FG, border: "none", borderRadius: RADIUS_MD, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: FONT_SANS },
  waBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: SUCCESS, color: PRIMARY_FG, border: "none", padding: "12px 16px", fontSize: 14, fontWeight: 600, borderRadius: RADIUS_MD, cursor: "pointer", width: "100%", fontFamily: FONT_SANS },
  centered: { textAlign: "center", padding: "60px 20px" },
  spinner: { width: 36, height: 36, border: `3px solid ${MUTED}`, borderTop: `3px solid ${PRIMARY}`, borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 12px" },
  mutedText: { color: MUTED_FG, fontSize: 15, margin: 0 },
  errorBox: { background: "oklch(0.577 0.245 27.325 / 0.08)", border: "1px solid oklch(0.577 0.245 27.325 / 0.3)", borderRadius: RADIUS_MD, padding: "20px 24px", color: "oklch(0.577 0.245 27.325)", textAlign: "center", margin: "24px 0" },
  retryBtn: { marginTop: 10, padding: "8px 20px", background: "oklch(0.577 0.245 27.325)", color: PRIMARY_FG, border: "none", borderRadius: RADIUS_MD, cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: FONT_SANS },
  loadMoreWrap: { textAlign: "center", marginTop: 28 },
  loadMoreBtn: { padding: "12px 32px", background: PRIMARY, color: PRIMARY_FG, border: "none", borderRadius: RADIUS_MD, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: FONT_SANS },
};