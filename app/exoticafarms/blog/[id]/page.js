import BlogPost from '../../../../src/components/Blog/BlogPostNextjs.jsx'
import { getPostById, getAllPosts } from '../../../../src/data/blogData'

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    id: String(post.id),
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const post = getPostById(resolvedParams.id)

  if (!post) {
    return {
      title: 'Article Not Found - Exora Farms',
      description: 'The requested article could not be found. Explore our other agricultural investment insights and farming guides.',
      robots: {
        index: false,
        follow: true,
      },
    }
  }

  // Clean excerpt for meta description (remove HTML tags)
  const cleanExcerpt = post.excerpt.replace(/<[^>]*>/g, '').substring(0, 160)

  // Create a shorter description for Open Graph (to avoid duplication on WhatsApp)
  const ogDescription = cleanExcerpt.substring(0, 100)

  // Convert relative image URL to absolute URL for social media sharing
  const absoluteImageUrl = post.image.startsWith('http')
    ? post.image
    : `https://exorafarms.com${post.image}`

  return {
    title: `${post.title} | Exora Farms Blog`,
    keywords: [
      ...post.tags,
      'agricultural investment',
      'farming insights',
      'sustainable agriculture',
      'farm investment tips',
      'agricultural real estate'
    ].join(', '),
    authors: [{
      name: post.author,
      url: 'https://exorafarms.com/about'
    }],
    creator: post.author,
    publisher: 'Exora Farms',
    category: 'Agriculture',
    alternates: {
      canonical: `/exorafarms/blog/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: ogDescription,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      section: 'Agriculture',
      tags: post.tags,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: 'Exora Farms',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: ogDescription,
      images: [absoluteImageUrl],
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
  }
}

export default function BlogPostPage({ params }) {
  return <BlogPost params={params} />
}
