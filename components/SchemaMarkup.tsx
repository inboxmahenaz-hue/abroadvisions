export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Abroad Visions",
    "url": "https://abroadvisions.com",
    "logo": "https://abroadvisions.com/icon.png",
    "description": "NMC-approved MBBS abroad guidance for Indian students and parents. Compare 7 countries, calculate total costs, check NEET eligibility.",
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
          "text": "The total all-inclusive cost of MBBS abroad varies by country: Kyrgyzstan (₹28–40 lakhs), Uzbekistan (₹22–32 lakhs), Kazakhstan (₹32–48 lakhs), Russia (₹35–50 lakhs), Georgia (₹30–45 lakhs), Armenia (₹25–38 lakhs), and Bangladesh (₹35–50 lakhs) for 6 years including tuition, hostel, and food."
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
          "text": "The best countries for MBBS abroad for Indian students are Russia, Kyrgyzstan, Kazakhstan, Uzbekistan, Georgia, Armenia, and Bangladesh. Each offers NMC-recognized universities, English-medium teaching, and affordable fees compared to private medical colleges in India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the FMGE pass rate for MBBS abroad students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The overall FMGE pass rate for foreign medical graduates is around 15–20%. However, students from top NMC-approved universities with strong preparation have significantly higher pass rates. Abroad Visions provides honest FMGE data for every university we recommend."
        }
      },
      {
        "@type": "Question",
        "name": "Can Indian students get a loan for MBBS abroad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Indian students can get education loans from banks like SBI, Bank of Baroda, and private NBFCs for MBBS abroad. Loan amounts typically range from ₹20–50 lakhs depending on the country and university."
        }
      }
    ]
  }

  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Abroad Visions — MBBS Abroad Consultancy",
    "url": "https://abroadvisions.com",
    "description": "Honest MBBS abroad advisory helping Indian students choose NMC-approved universities across 8 countries with real cost data and FMGE statistics.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "MBBS Abroad Programs",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "MBBS in Russia" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "MBBS in Kyrgyzstan" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "MBBS in Kazakhstan" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "MBBS in Uzbekistan" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "MBBS in Georgia" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "MBBS in Armenia" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "MBBS in Bangladesh" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "MBBS in Nepal" } }
      ]
    }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />
    </>
  )
}
