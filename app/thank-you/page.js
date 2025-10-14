import ThankYouPage from '../../src/components/ThankYou/ThankYouPage'

export const metadata = {
  title: 'Thank You - Exora Farms | Your Request Has Been Received',
  description: 'Thank you for your interest in Exora Farms. We have received your request and will contact you within 24 hours to discuss your agricultural investment opportunities.',
  keywords: 'thank you, contact received, agricultural investment, exora farms, farm investment confirmation',
  robots: {
    index: false, // Don't index thank you pages
    follow: true,
  },
  openGraph: {
    title: 'Thank You - Exora Farms | Your Request Has Been Received',
    description: 'Thank you for your interest in Exora Farms. We will contact you within 24 hours.',
    type: 'website',
    url: 'https://exorafarms.co.in/thank-you',
    images: [
      {
        url: '/assets/hero/farm5.jpg',
        width: 1200,
        height: 630,
        alt: 'Thank You - Exora Farms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You - Exora Farms | Your Request Has Been Received',
    description: 'Thank you for your interest in Exora Farms. We will contact you within 24 hours.',
    images: ['/assets/hero/farm5.jpg'],
  },
}

export default function ThankYouPageRoute() {
  return <ThankYouPage />
}
