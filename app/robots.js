export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/temp/',
        ],
      },
    ],
    sitemap: 'https://exorafarms.com/sitemap.xml',
    host: 'https://exorafarms.com',
  }
}
