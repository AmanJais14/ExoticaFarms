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
  description: 'Perfect Neighbourhood LLP presents Exora Farms - Premium agricultural real estate investment with 12-18% annual dividends. Expert real estate services, zero brokerage, and sustainable farming practices.',
  keywords: [
    'Perfect Neighbourhood LLP',
    'agricultural real estate investment',
    'farm investment opportunities',
    'exora farms',
    'exotic farming',
    'agricultural land investment in Bangalore',
    'sustainable farming',
    'farmland investment India',
    'agricultural dividends',
    'real estate investment',
    'premium farmland',
    'agricultural returns',
    'farm investment schemes',
    'agricultural property investment',
    'agricultural investment platform',
    'zero brokerage real estate',
    'NRI property services',
    'Bangalore real estate',
    'alternative investment',
    'Farmties collaboration',
    'agricultural real estate',
    'exotic farming investment',
    'agricultural land investment',
    'real estate expertise',
    'property investment Bangalore',
    'agricultural real estate investment platform',
    'exotica farms',
    'exorafarms'
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
    "name": "Perfect Neighbourhood LLP",
    "alternateName": ["Exora Farms", "Exotica Farming"],
    "description": "Real estate expertise meets alternative investment opportunities. We combine exclusive project access, trusted builder partnerships, and innovative investment models including Exora Farms agricultural investments.",
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
      "name": "Real Estate and Investment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Real Estate Services",
            "description": "Exclusive real estate deals, zero brokerage, trusted partnerships with 10+ years experience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exora Farms Agricultural Investment",
            "description": "Alternative investment in exotic farming with 12-18% annual returns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "NRI Property Services",
            "description": "Virtual tours, digital documentation, legal guidance, and property management support"
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
    "feesAndCommissionsSpecification": "Starting at ₹33L per acre",
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

        {/* Google Ads Conversion Tracking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17078815484"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17078815484');
            `,
          }}
        />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1178320650877606');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
               src="https://www.facebook.com/tr?id=1178320650877606&ev=PageView&noscript=1" />
        </noscript>
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        {/* <WebVitalsReporter /> */}
        {children}

        <footer>
          {/* LinkedIn Insight Tag */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                _linkedin_partner_id = "8152868";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})(window.lintrk);
              `,
            }}
          />
          <noscript>
            <img height="1" width="1" style={{display:'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=8152868&fmt=gif" />
          </noscript>
        </footer>
      </body>
    </html>
  )
}
