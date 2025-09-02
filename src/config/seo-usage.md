# SEO Configuration Usage Guide

## Overview
The `seo.js` file provides centralized SEO configuration for the entire site, making it easy to maintain consistent metadata, structured data, and social sharing settings.

## Basic Usage

### 1. Simple Page Metadata (Recommended)
```javascript
// app/page.js
import { generateMetadata } from '../src/config/seo'

export const metadata = generateMetadata('home')
```

### 2. Custom URL for Page Metadata
```javascript
// app/custom-page/page.js
import { generateMetadata } from '../../src/config/seo'

export const metadata = generateMetadata('about', 'https://exorafarms.com/custom-url')
```

### 3. Manual Configuration (Advanced)
```javascript
// app/page.js
import { pageMetadata, openGraphDefaults, twitterDefaults } from '../src/config/seo'

export const metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords.join(', '),
  
  openGraph: {
    ...openGraphDefaults,
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
  },
  
  twitter: {
    ...twitterDefaults,
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
  },
}
```

## Structured Data Usage

### 1. In React Components
```javascript
// src/components/AboutUs/AboutUsPage.jsx
import { generateStructuredData } from '../../config/seo'

const AboutUsPage = () => {
  return (
    <div>
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData('organization')}
      />
      
      {/* Your component content */}
    </div>
  )
}
```

### 2. Custom Structured Data
```javascript
import { generateStructuredData } from '../config/seo'

// Add custom data to existing schema
const customOrgData = generateStructuredData('organization', {
  telephone: '+91-9876543210',
  email: 'contact@exorafarms.com'
})

// Use in component
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={customOrgData}
/>
```

### 3. Breadcrumb Schema
```javascript
import { structuredData } from '../config/seo'

const breadcrumbItems = [
  { name: 'Home', url: 'https://exorafarms.com' },
  { name: 'About Us', url: 'https://exorafarms.com/about' }
]

const breadcrumbSchema = structuredData.breadcrumb(breadcrumbItems)

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
/>
```

## Available Page Keys
- `home` - Homepage metadata
- `about` - About Us page metadata
- `blog` - Blog listing page metadata
- `vision` - Vision/Exora Club page metadata

## Available Structured Data Types
- `organization` - Company/organization schema
- `website` - Website schema
- `breadcrumb()` - Breadcrumb navigation schema (function)

## Adding New Pages

### 1. Add to pageMetadata in seo.js
```javascript
// src/config/seo.js
export const pageMetadata = {
  // ... existing pages
  contact: {
    title: 'Contact Us | Perfect Neighbourhood LLP',
    description: 'Get in touch with Perfect Neighbourhood LLP for premium real estate and agricultural investment opportunities.',
    keywords: [...defaultKeywords, 'contact', 'get in touch', 'consultation']
  }
}
```

### 2. Use in your page
```javascript
// app/contact/page.js
import { generateMetadata } from '../../src/config/seo'

export const metadata = generateMetadata('contact')
```

## Benefits

### ✅ Centralized Management
- All SEO settings in one place
- Easy to update site-wide changes
- Consistent branding and messaging

### ✅ Reduced Duplication
- Reusable metadata templates
- Shared Open Graph and Twitter settings
- Common structured data schemas

### ✅ Easy Maintenance
- Add new pages with one line of code
- Update global settings from one file
- Type-safe configuration (with TypeScript)

### ✅ SEO Best Practices
- Consistent metadata structure
- Proper structured data implementation
- Social media optimization

## Current Implementation Status

### ✅ Implemented Pages
- Homepage (`app/page.js`)
- About Us (`app/about/page.js`)

### 🔄 To Be Implemented
- Blog pages
- Vision page
- Individual blog post pages

### 📝 Next Steps
1. Update remaining pages to use SEO config
2. Add blog post dynamic metadata
3. Implement breadcrumb schemas
4. Add FAQ structured data for relevant pages
