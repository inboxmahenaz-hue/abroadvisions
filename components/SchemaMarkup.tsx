export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Abroad Visions",
    "url": "https://abroadvisions.com",
    "logo": "https://abroadvisions.com/icon.png",
    "description": "NMC-approved MBBS abroad guidance for Indian students and parents. Compare 8 countries, calculate total costs, check NEET eligibility.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.instagram.com/abroadvisions"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Abroad Visions",
    "url": "https://abroadvisions.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://abroadvisions.com/mbbs-university-finder?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the total cost of MBBS abroad for Indian students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The total all-inclusive cost of MBBS abroad varies by country: Kyrgyzstan (Rs 28-40 lakhs), Uzbekistan (Rs 22-32 lakhs), Kazakhstan (Rs 32-48 lakhs), Russia (Rs 35-50 lakhs), Georgia (Rs 30-45 lakhs), Armenia (Rs 25-38 lakhs), and Bangladesh (Rs 35-50 lakhs) for 6 years including tuition, hostel, and food."
        }
      },
      {
        "@type": "Question",
        "name": "Is MBBS abroad NMC approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many universities abroad are NMC (National Medical Commission) approved. Indian students must clear the FMGE (Foreign Medical Graduate Examination) or NEXT exam after completing MBBS abroad to practice medicine in India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the NEET score required for MBBS abroad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As per NMC regulations, Indian students must qualify NEET to pursue MBBS abroad. The minimum qualifying percentile is the 50th percentile for general category and 40th percentile for SC/ST/OBC candidates."
        }
      },
      {
        "@type": "Question",
        "name": "Which country is best for MBBS abroad for Indian students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best countries for MBBS abroad for Indian students are Russia, Kyrgyzstan, Kazakhstan, Uzbekistan, Georgia, Armenia, Bangladesh and Nepal. Each offers NMC-recognized universities, English-medium teaching, and affordable fees compared to private medical colleges in India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the FMGE pass rate for MBBS abroad students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The overall FMGE pass rate for foreign medical graduates is around 15-20%. However, students from top NMC-approved universities with strong preparation have significantly higher pass rates. Abroad Visions provides honest FMGE data for every university we recommend."
        }
      },
      {
        "@type": "Question",
        "name": "Can Indian students get a loan for MBBS abroad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Indian students can get education loans from banks like SBI, Bank of Baroda, and private NBFCs for MBBS abroad. Loan amounts typically range from Rs 20-50 lakhs depending on the country and university."
        }
      }
    ]
  }

  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "MBBS Abroad Programs for Indian Students",
    "description": "NMC-approved MBBS programs abroad for Indian students across 8 countries",
    "url": "https://abroadvisions.com",
    "itemListElement": [
      {
        "@type": "ListItem", "position": 1,
        "item": { "@type": "Course", "name": "MBBS in Russia", "description": "NMC-approved MBBS in Russia for Indian students. 6-year program with English medium teaching. Total cost Rs 35-50 lakhs.", "url": "https://abroadvisions.com/mbbs-university-finder?country=russia", "provider": { "@type": "Organization", "name": "Abroad Visions", "url": "https://abroadvisions.com" } }
      },
      {
        "@type": "ListItem", "position": 2,
        "item": { "@type": "Course", "name": "MBBS in Kyrgyzstan", "description": "NMC-approved MBBS in Kyrgyzstan for Indian students. Affordable 6-year program. Total all-inclusive cost Rs 28-40 lakhs.", "url": "https://abroadvisions.com/mbbs-university-finder?country=kyrgyzstan", "provider": { "@type": "Organization", "name": "Abroad Visions", "url": "https://abroadvisions.com" } }
      },
      {
        "@type": "ListItem", "position": 3,
        "item": { "@type": "Course", "name": "MBBS in Kazakhstan", "description": "NMC-approved MBBS in Kazakhstan for Indian students. English medium 6-year program. Total cost Rs 32-48 lakhs.", "url": "https://abroadvisions.com/mbbs-university-finder?country=kazakhstan", "provider": { "@type": "Organization", "name": "Abroad Visions", "url": "https://abroadvisions.com" } }
      },
      {
        "@type": "ListItem", "position": 4,
        "item": { "@type": "Course", "name": "MBBS in Uzbekistan", "description": "NMC-approved MBBS in Uzbekistan for Indian students. Most affordable option at Rs 22-32 lakhs total for 6 years.", "url": "https://abroadvisions.com/mbbs-university-finder?country=uzbekistan", "provider": { "@type": "Organization", "name": "Abroad Visions", "url": "https://abroadvisions.com" } }
      },
      {
        "@type": "ListItem", "position": 5,
        "item": { "@type": "Course", "name": "MBBS in Georgia", "description": "NMC-approved MBBS in Georgia for Indian students. European standard medical education. Total cost Rs 30-45 lakhs.", "url": "https://abroadvisions.com/mbbs-university-finder?country=georgia", "provider": { "@type": "Organization", "name": "Abroad Visions", "url": "https://abroadvisions.com" } }
      },
      {
        "@type": "ListItem", "position": 6,
        "item": { "@type": "Course", "name": "MBBS in Armenia", "description": "NMC-approved MBBS in Armenia for Indian students. Quality medical education at Rs 25-38 lakhs total for 6 years.", "url": "https://abroadvisions.com/mbbs-university-finder?country=armenia", "provider": { "@type": "Organization", "name": "Abroad Visions", "url": "https://abroadvisions.com" } }
      },
      {
        "@type": "ListItem", "position": 7,
        "item": { "@type": "Course", "name": "MBBS in Bangladesh", "description": "NMC-approved MBBS in Bangladesh for Indian students. Nearby destination with familiar culture. Total cost Rs 35-50 lakhs.", "url": "https://abroadvisions.com/mbbs-university-finder?country=bangladesh", "provider": { "@type": "Organization", "name": "Abroad Visions", "url": "https://abroadvisions.com" } }
      },
      {
        "@type": "ListItem", "position": 8,
        "item": { "@type": "Course", "name": "MBBS in Nepal", "description": "NMC-approved MBBS in Nepal for Indian students. Closest destination with no language barrier. Affordable 6-year program.", "url": "https://abroadvisions.com/mbbs-university-finder?country=nepal", "provider": { "@type": "Organization", "name": "Abroad Visions", "url": "https://abroadvisions.com" } }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />
    </>
  )
}
