import AboutUsPage from '../../src/components/AboutUs/AboutUsPage';

export const metadata = {
  title: 'About Us | Perfect Neighbourhood LLP & Farmties - Real Estate & Agricultural Investment Experts',
  description: 'Learn about Perfect Neighbourhood LLP and Farmties - your trusted partners for premium real estate and alternative agricultural investments. 10+ years of expertise in Bangalore real estate and pioneering farmland investment solutions.',
  keywords: 'Perfect Neighbourhood LLP, Farmties, real estate Bangalore, agricultural investment, farmland investment, NRI property services, alternative investment, sustainable farming, zero brokerage, exclusive deals, trusted partnerships, Exora Farms, agricultural real estate',

  openGraph: {
    title: 'About Us | Perfect Neighbourhood LLP & Farmties',
    description: 'Trusted real estate and agricultural investment experts with 10+ years of experience. Exclusive deals, zero brokerage, and innovative investment opportunities.',
    url: 'https://exorafarms.com/about',
    siteName: 'Exora Farms',
    images: [
      {
        url: '/assets/hero/farm5.jpg',
        width: 1200,
        height: 630,
        alt: 'Perfect Neighbourhood LLP & Farmties - About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Perfect Neighbourhood LLP & Farmties',
    description: 'Trusted real estate and agricultural investment experts with 10+ years of experience.',
    creator: '@exorafarms',
    site: '@exorafarms',
    images: ['/assets/hero/farm5.jpg'],
  },

  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return <AboutUsPage />;
}
