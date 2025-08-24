import DividendsClubHome from '../../src/components/DividendsClub/DividendsClubHome'

export const metadata = {
  title: 'Vision - Dividends Club | Premium Agricultural Investment Platform',
  description: 'Discover our vision for transforming agriculture through premium farmland investments. Join the Dividends Club and explore exotic farming opportunities with guaranteed returns.',
  keywords: 'agricultural investment, farmland investment, exotic farming, dividends club, premium agriculture, investment vision',
  openGraph: {
    title: 'Vision - Dividends Club | Premium Agricultural Investment',
    description: 'Discover our vision for transforming agriculture through premium farmland investments and exotic farming opportunities.',
    type: 'website',
    url: 'https://exoticafarms.in/vision',
    images: [
      {
        url: '/assets/dividendsclub/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dividends Club - Premium Agricultural Investment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision - Dividends Club | Premium Agricultural Investment',
    description: 'Discover our vision for transforming agriculture through premium farmland investments and exotic farming opportunities.',
    images: ['/assets/dividendsclub/og-image.jpg'],
  },
}

export default function VisionPage() {
  return <DividendsClubHome />
}
