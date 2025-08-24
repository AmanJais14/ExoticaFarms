import AgriLandingPageNextjs from '../src/AgriLandingPageNextjs'

export const metadata = {
  title: 'Exora Farms | Premium Agricultural Investment Platform',
  description: 'Transform your investment portfolio with premium farmland investments. Discover exotic farming opportunities with guaranteed returns and professional management.',
  keywords: 'agricultural investment, farmland investment, exotic farming, premium agriculture, investment platform',
  openGraph: {
    title: 'Exora Farms | Premium Agricultural Investment Platform',
    description: 'Transform your investment portfolio with premium farmland investments and exotic farming opportunities.',
    type: 'website',
    url: 'https://exoticafarms.in',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Exora Farms - Premium Agricultural Investment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exora Farms | Premium Agricultural Investment Platform',
    description: 'Transform your investment portfolio with premium farmland investments and exotic farming opportunities.',
    images: ['/assets/og-image.jpg'],
  },
}

export default function HomePage() {
  return <AgriLandingPageNextjs />
}
