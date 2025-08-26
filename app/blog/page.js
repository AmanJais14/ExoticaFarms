import Blog from '../../src/components/Blog/BlogNextjs.jsx'

export const metadata = {
  title: 'Agricultural Investment Blog - Expert Insights & Market Analysis',
  description: 'Discover the latest insights on agricultural real estate investment, exotic farming trends, sustainable agriculture practices, and market analysis. Expert guidance for smart farm investments.',
  keywords: [
    'agricultural investment blog',
    'farming insights',
    'agricultural real estate',
    'exotic farming trends',
    'sustainable agriculture',
    'farm investment tips',
    'agricultural market analysis',
    'farmland investment guide',
    'agricultural technology',
    'precision farming'
  ].join(', '),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Agricultural Investment Blog - Expert Insights & Market Analysis',
    description: 'Discover the latest insights on agricultural real estate investment, exotic farming trends, and sustainable agriculture practices.',
    type: 'website',
    url: 'https://exora.co.in/blog',
    siteName: 'Exora Farms',
    images: [
      {
        url: '/assets/hero/farm5.jpg',
        width: 1200,
        height: 630,
        alt: 'Exora Farms Agricultural Investment Blog',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agricultural Investment Blog - Expert Insights & Market Analysis',
    description: 'Discover the latest insights on agricultural real estate investment, exotic farming trends, and sustainable agriculture practices.',
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
  category: 'Agriculture',
}

export default function BlogPage() {
  return <Blog />
}
