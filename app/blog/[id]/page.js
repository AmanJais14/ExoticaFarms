import BlogPost from '../../../src/components/Blog/BlogPostNextjs.jsx'
import { getPostById, getAllPosts } from '../../../src/data/blogData'

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

  return {
    title: `${post.title} | Exora Farms Blog`,
    description: cleanExcerpt,
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
      canonical: `/blog/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: cleanExcerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      section: 'Agriculture',
      tags: post.tags,
      images: [
        {
          url: post.image,
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
      description: cleanExcerpt,
      images: [post.image],
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
