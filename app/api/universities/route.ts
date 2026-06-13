import { NextRequest, NextResponse } from "next/server";
import enrichedData from "./enriched_data.json";

const PHOTO_BASE_URL = "https://studyabroadsystem.com/storage/";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search")?.toLowerCase() || "";
  const country = searchParams.get("country");
  const page = parseInt(searchParams.get("page") || "1");
  const perPage = parseInt(searchParams.get("per_page") || "30");

  let filtered = enrichedData as any[];

  // Filter by country
  if (country && country.toLowerCase() !== "all") {
    filtered = filtered.filter(
      (u) => (u.country || "").toLowerCase() === country.toLowerCase()
    );
  }

  // Filter by search
  if (search) {
    filtered = filtered.filter(
      (u) =>
        (u.university || "").toLowerCase().includes(search) ||
        (u.country || "").toLowerCase().includes(search) ||
        (u.city || "").toLowerCase().includes(search)
    );
  }

  // Paginate
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageData = filtered.slice(start, end);

  return NextResponse.json({
    total: filtered.length,
    page,
    per_page: perPage,
    has_more: end < filtered.length,
    data: pageData.map((u) => ({
      id: u.id,
      university: u.university,
      course: "MBBS",
      country: u.country,
      city: u.city,
      state: u.state,
      address: u.address,
      photo: u.university_photo
        ? `${PHOTO_BASE_URL}${u.university_photo}`
        : "",
      logo: u.logo ? `${PHOTO_BASE_URL}${u.logo}` : "",
      website: u.website,
      duration: u.duration,
      intake: u.intake_month || u.intake,
      currency: u.currency,
      tuition_fee: u.tuition_fee,
      tuition_fee_type: u.tuition_fee_type,
      total_fees: u.total_fees,
      hostel_fee: u.hostel_fee,
      health_insurance_fee: u.health_insurance_fee,
      detail_html: u.detail_html,
    })),
  });
}