import AgriLandingPageNextjs from '../src/AgriLandingPageNextjs'

export const metadata = {
  title: 'Exora Farms | A Dividend Paying Farm',
  description: 'Transform your investment portfolio with premium farmland investments. Discover exotic farming opportunities with guaranteed returns and professional management.',
  keywords: 'agricultural investment, farmland investment, exotic farming, premium agriculture, investment platform',
  openGraph: {
    title: 'Exora Farms | A Dividend Paying Farm',
    description: 'Transform your investment portfolio with premium farmland investments and exotic farming opportunities.',
    type: 'website',
    url: 'https://exorafarms.co.in',
    images: [
      {
        url: '/assets/hero/farm5.jpg',
        width: 1200,
        height: 630,
        alt: 'Exora Farms - A Dividend Paying Farm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exora Farms | A Dividend Paying Farm',
    description: 'Transform your investment portfolio with premium farmland investments and exotic farming opportunities.',
    images: ['/assets/hero/farm5.jpg'],
  },
}

export default function HomePage() {
  return <AgriLandingPageNextjs />
}
