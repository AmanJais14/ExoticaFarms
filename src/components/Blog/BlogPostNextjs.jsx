'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, ArrowRight } from 'lucide-react';
import { getPostById, getAllPosts } from '../../data/blogData';
import BlogNavbar from './BlogNavbarNextjs';
import BlogHeroSection from './BlogHeroSectionNextjs';

const BlogPost = ({ params }) => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      // Simulate loading
      setTimeout(async () => {
        const resolvedParams = await params
        const currentPost = getPostById(resolvedParams.id);
      if (currentPost) {
        setPost(currentPost);
        
        // Get related posts (same category, excluding current post)
        const allPosts = getAllPosts();
        const related = allPosts
          .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
          .slice(0, 3);
        setRelatedPosts(related);
      }
      setIsLoading(false);
      }, 500);
    }

    loadPost();
  }, [params]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleShare = async () => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;

    // Try native sharing first
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
        return;
      } catch (error) {
        console.log('Error sharing:', error);
        // Fall through to clipboard fallback
      }
    }

    // Fallback: copy to clipboard
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand('copy');
          alert('Link copied to clipboard!');
        } catch (err) {
          console.error('Failed to copy link:', err);
          alert('Unable to copy link. Please copy manually: ' + window.location.href);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      alert('Unable to copy link. Please copy manually: ' + window.location.href);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-600 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-green-900 mb-2">Article not found</h2>
          <p className="text-green-600 mb-6">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/blog')}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }



  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://exora.co.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://exora.co.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://exora.co.in/blog/${post.id}`
      }
    ]
  }

  // Generate structured data for the article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt.replace(/<[^>]*>/g, '').substring(0, 160),
    "image": [post.image],
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://exora.co.in/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Exora Farms",
      "logo": {
        "@type": "ImageObject",
        "url": "https://exora.co.in/assets/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://exora.co.in/blog/${post.id}`
    },
    "articleSection": "Agriculture",
    "keywords": post.tags.join(", "),
    "wordCount": post.content.replace(/<[^>]*>/g, '').split(' ').length,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "Blog",
      "name": "Exora Farms Blog",
      "url": "https://exora.co.in/blog"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50">
      {/* Structured Data - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Structured Data - Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <BlogNavbar />

      {/* Hero Section */}
      <BlogHeroSection />

      {/* Header */}
      <div className="pt-8 pb-8">
        <div className="container mx-auto px-6">
          <button
            onClick={() => router.push('/blog')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-6 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-green-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-green-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-green-500 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-3 py-1 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg font-medium transition-colors duration-300"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              {/* Featured Image */}
              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg prose-green max-w-none">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-green-100 p-8 md:p-12">
                <div
                  className="text-green-800 leading-relaxed prose prose-lg max-w-none prose-headings:text-green-900 prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-green-200">
                  <h4 className="text-lg font-semibold text-green-900 mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 px-3 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-xl"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 pt-8 border-t border-green-200">
                  <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                    <h3 className="text-2xl font-bold text-green-900 mb-4">
                      Ready to Start Your Agricultural Investment Journey?
                    </h3>
                    {/* <p className="text-green-700 mb-6 max-w-2xl mx-auto">
                      Join thousands of investors who are already earning tax-free returns through our managed farmland investment opportunities. Start building your agricultural portfolio today.
                    </p> */}
                    <button
                      onClick={() => router.push('/')}
                      className="inline-flex text-xs items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span>Invest With Us</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-green-900 mb-8">Related Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <article
                      key={relatedPost.id}
                      onClick={() => router.push(`/blog/${relatedPost.id}`)}
                      className="group bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold text-green-900 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
                          {relatedPost.title}
                        </h4>
                        <p className="text-green-600 text-sm line-clamp-2 mb-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-green-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(relatedPost.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
