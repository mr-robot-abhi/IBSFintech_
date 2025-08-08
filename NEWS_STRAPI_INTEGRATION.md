# News Section - Strapi Integration Guide

## Overview
This document outlines the steps to integrate the news section with Strapi CMS, replacing the static data with dynamic content management.

## Current Structure
- **Main Page**: `/resources/news` - Lists all news articles
- **Individual Pages**: `/resources/news/[slug]` - Dynamic pages for each article
- **Data Source**: `lib/news.ts` - Static data file (to be replaced)

## Strapi Collection Type Setup

### 1. Create News Article Collection Type
```json
{
  "kind": "collectionType",
  "collectionName": "news_articles",
  "info": {
    "singularName": "news-article",
    "pluralName": "news-articles",
    "displayName": "News Article"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true
    },
    "excerpt": {
      "type": "text",
      "required": true
    },
    "content": {
      "type": "richtext",
      "required": true
    },
    "date": {
      "type": "date",
      "required": true
    },
    "category": {
      "type": "enumeration",
      "enum": [
        "Partnership",
        "Implementation",
        "Events",
        "Expansion",
        "Innovation",
        "Awards"
      ],
      "required": true
    },
    "author": {
      "type": "string",
      "required": true
    },
    "featured": {
      "type": "boolean",
      "default": false
    },
    "tags": {
      "type": "json"
    },
    "image": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "backgroundImage": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    }
  }
}
```

### 2. API Endpoints
- **Get All Articles**: `GET /api/news-articles?populate=*`
- **Get Article by Slug**: `GET /api/news-articles?filters[slug][$eq]={slug}&populate=*`
- **Get Featured Articles**: `GET /api/news-articles?filters[featured][$eq]=true&populate=*`

## Integration Steps

### 1. Environment Variables
Add to `.env.local`:
```env
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here
```

### 2. Update Data Functions
Replace the placeholder functions in `lib/news.ts` with actual Strapi API calls:

```typescript
export async function fetchNewsArticlesFromStrapi(): Promise<NewsArticle[]> {
  const response = await fetch(`${process.env.STRAPI_URL}/api/news-articles?populate=*`);
  const data = await response.json();
  return data.data.map((item: any) => ({
    id: item.id,
    slug: item.attributes.slug,
    title: item.attributes.title,
    excerpt: item.attributes.excerpt,
    content: item.attributes.content,
    date: item.attributes.date,
    category: item.attributes.category,
    author: item.attributes.author,
    image: item.attributes.image?.data?.attributes?.url,
    backgroundImage: item.attributes.backgroundImage?.data?.attributes?.url,
    featured: item.attributes.featured,
    tags: item.attributes.tags || []
  }));
}
```

### 3. Update Page Components
Modify the page components to use async data fetching:

```typescript
// app/resources/news/page.tsx
export default async function NewsPage() {
  const articles = await fetchNewsArticlesFromStrapi();
  return <NewsClient newsArticles={articles} />;
}

// app/resources/news/[slug]/page.tsx
export default async function NewsArticlePage({ params }: PageProps) {
  const article = await fetchNewsArticleBySlugFromStrapi(params.slug);
  if (!article) notFound();
  return <NewsArticleClient article={article} />;
}
```

### 4. Update Static Generation
Update `generateStaticParams` to fetch from Strapi:

```typescript
export async function generateStaticParams() {
  const articles = await fetchNewsArticlesFromStrapi();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
```

## Content Migration

### 1. Import Existing Data
- Export current news data from `lib/news.ts`
- Import into Strapi using the admin panel or API
- Upload images to Strapi media library
- Update image URLs in content

### 2. Content Formatting
- Convert HTML content to Strapi's rich text format
- Ensure proper image handling and optimization
- Set up proper SEO metadata

## Features to Implement

### 1. Search and Filtering
- Add search functionality by title/content
- Filter by category, date range, tags
- Implement pagination for large article lists

### 2. Related Articles
- Show related articles based on tags/category
- Implement "You might also like" section

### 3. Newsletter Integration
- Add newsletter signup forms
- Integrate with email marketing platforms

### 4. Social Sharing
- Implement proper social media sharing
- Add Open Graph and Twitter Card meta tags

## SEO Optimization

### 1. Meta Tags
- Dynamic title and description generation
- Open Graph and Twitter Card support
- Structured data markup

### 2. URL Structure
- Clean, SEO-friendly URLs
- Proper canonical URLs
- XML sitemap generation

### 3. Performance
- Image optimization and lazy loading
- Caching strategies
- CDN integration

## Testing Checklist

- [ ] All articles display correctly
- [ ] Individual article pages work
- [ ] Images load properly
- [ ] SEO metadata is correct
- [ ] Social sharing works
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] Error handling

## Fallback Strategy

If Strapi is unavailable:
1. Use static data as fallback
2. Show appropriate error messages
3. Implement retry mechanisms
4. Cache responses for offline access

## Maintenance

### Regular Tasks
- Monitor API performance
- Update content regularly
- Backup Strapi data
- Review and update SEO
- Monitor analytics

### Content Guidelines
- Consistent image sizes and formats
- SEO-friendly titles and descriptions
- Proper tagging and categorization
- Regular content updates
