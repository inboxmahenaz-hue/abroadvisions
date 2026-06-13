import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

const PHOTO_BASE_URL = "https://studyabroadsystem.com/storage/";

function getEnrichedData() {
  const filePath = join(process.cwd(), "app/api/universities/enriched_data.json");
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

function detectBadges(html: string | null) {
  if (!html) return { nmc: false, who: false, wdoms: false, faimer: false };
  const text = html.toLowerCase();
  return {
    nmc: text.includes("nmc") || text.includes("national medical commission"),
    who: text.includes("world health organization") || text.includes("(who)"),
    wdoms: text.includes("wdoms") || text.includes("world directory of medical schools"),
    faimer: text.includes("faimer") || text.includes("ecfmg"),
  };
}

function extractFmgeRates(html: string | null): { year: string; rate: string }[] {
  if (!html) return [];
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const results: { year: string; rate: string }[] = [];
  const pattern = /(20\d{2})\s*:\s*(\d{1,2}(?:\.\d+)?)\s*%/g;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    results.push({ year: match[1], rate: `${match[2]}%` });
  }
  return results.slice(0, 5);
}

function extractIntroduction(html: string | null): string {
  if (!html) return "";
  return html
    .replace(/<\/(p|div|h[1-6]|li|br)\s*>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")       // fix &nbsp;
    .replace(/&amp;/g, "&")        // fix &amp;
    .replace(/&lt;/g, "<")         // fix &lt;
    .replace(/&gt;/g, ">")         // fix &gt;
    .replace(/&mdash;/g, "—")      // fix &mdash;
    .replace(/&ndash;/g, "–")      // fix &ndash;
    .replace(/\s+/g, " ")          // collapse spaces
    .trim()
    .slice(0, 800);
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idStr } = await params;
    const data = getEnrichedData();
    const id = parseInt(idStr);
    const u = data.find((entry: any) => entry.id === id);

    if (!u) {
      return NextResponse.json({ error: "University not found" }, { status: 404 });
    }

    const badges = detectBadges(u.detail_html);
    const fmgeRates = extractFmgeRates(u.detail_html);
    const introduction = extractIntroduction(u.detail_html);

    return NextResponse.json({
      id: u.id,
      university: u.university,
      course: "MBBS",
      country: u.country,
      city: u.city,
      state: u.state,
      address: u.address,
      postal_code: u.postal_code,
      photo: u.university_photo ? `${PHOTO_BASE_URL}${u.university_photo}` : "",
      logo: u.logo ? `${PHOTO_BASE_URL}${u.logo}` : "",
      website: u.website,
      duration: u.duration,
      intake: u.intake_month || u.intake,
      established_year: u.established_year || null,
      badges,
      fmge_rates: fmgeRates,
      introduction,
      currency: u.currency,
      has_fee_data: !!(u.tuition_fee || u.total_fees),
    });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}