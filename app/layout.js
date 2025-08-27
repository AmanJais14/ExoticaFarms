import '../src/index.css'
// import WebVitalsReporter from '../src/components/Performance/WebVitalsReporter'

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export const metadata = {
  title: {
    default: 'Exora Farms - Premium Agricultural Real Estate Investment | 12-18% Annual Returns',
    template: '%s | Exora Farms'
  },
  description: 'Invest in premium agricultural real estate with Exora Farms. Get 12-18% annual dividends from exotic farming projects. Tax-free returns, professional management, and sustainable farming practices. Starting at ₹29.9L per acre.',
  keywords: [
    'agricultural real estate investment',
    'farm investment opportunities',
    'exotic farming',
    'agricultural land investment',
    'sustainable farming',
    'farmland investment India',
    'agricultural dividends',
    'real estate investment',
    'premium farmland',
    'agricultural returns',
    'farm investment schemes',
    'agricultural property investment'
  ].join(', '),
  authors: [{ name: 'Exora Farms', url: 'https://exorafarms.com' }],
  creator: 'Exora Farms',
  publisher: 'Exora Farms',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://exorafarms.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Exora Farms - Premium Agricultural Real Estate Investment',
    description: 'Invest in premium agricultural real estate with guaranteed 12-18% annual returns. Professional management, sustainable farming, tax-free dividends.',
    type: 'website',
    locale: 'en_US',
    url: 'https://exorafarms.com',
    siteName: 'Exora Farms',
    images: [
      {
        url: '/assets/hero/farm5.jpg',
        width: 1200,
        height: 630,
        alt: 'Exora Farms - Premium Agricultural Investment Opportunities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exora Farms - Premium Agricultural Real Estate Investment',
    description: 'Invest in premium agricultural real estate with guaranteed 12-18% annual returns. Professional management, sustainable farming, tax-free dividends.',
    images: ['/assets/hero/farm5.jpg'],
    creator: '@exorafarms',
    site: '@exorafarms',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
    yandex: 'yandex-verification-code-here',
    yahoo: 'yahoo-verification-code-here',
    'bing': 'bing-verification-code-here',
  },
  category: 'Agriculture',
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "RealEstateAgent", "FinancialService"],
    "name": "Exora Farms",
    "alternateName": "Exotica Farming",
    "description": "Premium agricultural real estate investment opportunities with guaranteed 12-18% annual returns and sustainable farming practices.",
    "url": "https://exorafarms.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://exorafarms.com/assets/logo.png",
      "width": 300,
      "height": 100
    },
    "image": "https://exorafarms.com/assets/hero/farm5.jpg",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Sunil Pandey",
      "alumniOf": ""
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Karnataka",
      "addressLocality": "Bangalore"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      }
    ],
    "sameAs": [
      "https://facebook.com/exorafarms",
      "https://twitter.com/exorafarms",
      "https://linkedin.com/company/exorafarms",
      "https://instagram.com/exorafarms"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Agricultural Investment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Farmland Investment",
            "description": "Investment in exotic farming with 12-18% annual returns"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Exora Farms",
    "url": "https://exorafarms.com",
    "description": "Premium agricultural real estate investment platform",
    "publisher": {
      "@type": "Organization",
      "name": "Exora Farms"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://exorafarms.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const investmentServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Agricultural Real Estate Investment",
    "description": "Premium farmland investment opportunities with guaranteed returns",
    "provider": {
      "@type": "Organization",
      "name": "Exora Farms"
    },
    "category": "Real Estate Investment",
    "feesAndCommissionsSpecification": "Starting at ₹29.9L per acre",
    "annualPercentageRate": "12-18%",
    "interestRate": "12-18% annual dividends"
  }

  return (
    <html lang="en">
      <head>
        {/* Critical font preloading for LCP optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Preload critical font weights */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Optimized font loading with display=swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Critical resource preloading for LCP optimization */}
        <link rel="preload" href="/assets/hero/farm5.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/src/styles/critical.css" as="style" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#22c55e" />
        <meta name="msapplication-TileColor" content="#22c55e" />

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Structured Data - Financial Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(investmentServiceSchema),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        {/* <WebVitalsReporter /> */}
        {children}
      </body>
    </html>
  )
}
