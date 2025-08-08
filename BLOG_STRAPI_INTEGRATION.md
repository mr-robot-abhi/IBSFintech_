# Blog Strapi Integration Guide

This document provides step-by-step instructions for integrating the Blog section with Strapi CMS.

## Overview

The Blog section currently uses hardcoded data from `lib/blog.ts`. This guide will help you migrate to Strapi CMS for dynamic content management.

## Current Structure

- **Data Source**: `lib/blog.ts`
- **Interface**: `BlogPost`
- **Pages**: 
  - `/resources/blog` (listing page)
  - `/resources/blog/[slug]` (individual blog post)
- **Components**: 
  - `components/blog/BlogClient.tsx`
  - `components/blog/BlogPostClient.tsx`

## Strapi Setup

### 1. Create Blog Post Collection Type

In your Strapi admin panel:

1. Go to **Content-Type Builder**
2. Click **Create new collection type**
3. Name it `Blog Post`
4. Add the following fields:

#### Text Fields
- `title` (Text) - Required, Unique
- `slug` (Text) - Required, Unique, URL-friendly
- `excerpt` (Long Text) - Required
- `content` (Rich Text) - Required
- `author` (Text) - Required
- `category` (Text) - Required
- `readTime` (Text) - Required (e.g., "8 min read")

#### Media Fields
- `image` (Media) - Single image for blog card
- `backgroundImage` (Media) - Single image for blog post hero

#### Boolean Fields
- `featured` (Boolean) - Default: false

#### JSON Fields
- `tags` (JSON) - Array of strings

#### Number Fields
- `views` (Number) - Optional, for analytics

### 2. Configure Permissions

1. Go to **Settings > Users & Permissions plugin > Roles**
2. Select **Public** role
3. Enable the following permissions for **Blog Post**:
   - `find` - Find blog posts
   - `findOne` - Find one blog post
4. Save the permissions

### 3. API Configuration

The API endpoint will be: `GET /api/blog-posts`

Example response structure:
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Treasury Management in the Digital Age",
        "slug": "treasury-management-digital-transformation",
        "excerpt": "Explore how digital transformation is reshaping treasury management...",
        "content": "<p>The landscape of treasury management...</p>",
        "date": "2024-12-15T00:00:00.000Z",
        "author": "IBSFINtech Team",
        "category": "Digital Transformation",
        "readTime": "8 min read",
        "featured": true,
        "tags": ["Digital Transformation", "Treasury Management", "Automation"],
        "views": 1250,
        "image": {
          "data": {
            "id": 1,
            "attributes": {
              "url": "/uploads/blog_image_1.jpg",
              "alternativeText": "Blog post image"
            }
          }
        },
        "backgroundImage": {
          "data": {
            "id": 2,
            "attributes": {
              "url": "/uploads/blog_bg_1.jpg",
              "alternativeText": "Blog background image"
            }
          }
        },
        "createdAt": "2024-12-15T10:00:00.000Z",
        "updatedAt": "2024-12-15T10:00:00.000Z"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 6
    }
  }
}
```

## Environment Variables

Add the following to your `.env.local` file:

```env
# Strapi Configuration
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token_here
```

## Code Integration

### 1. Update lib/blog.ts

Replace the hardcoded functions with Strapi API calls:

```typescript
// lib/blog.ts

export async function fetchBlogPostsFromStrapi(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${process.env.STRAPI_API_URL}/api/blog-posts?populate=*&sort=date:desc`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.data.map((item: any) => ({
      id: item.id.toString(),
      slug: item.attributes.slug,
      title: item.attributes.title,
      excerpt: item.attributes.excerpt,
      content: item.attributes.content,
      date: new Date(item.attributes.date || item.attributes.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category: item.attributes.category,
      author: item.attributes.author,
      image: item.attributes.image?.data?.attributes?.url || '/default-blog-image.jpg',
      backgroundImage: item.attributes.backgroundImage?.data?.attributes?.url || '/default-blog-bg.jpg',
      featured: item.attributes.featured || false,
      tags: item.attributes.tags || [],
      readTime: item.attributes.readTime || '5 min read',
      views: item.attributes.views || 0
    }));
  } catch (error) {
    console.error('Error fetching blog posts from Strapi:', error);
    return blogPosts; // Fallback to hardcoded data
  }
}

export async function fetchBlogPostBySlugFromStrapi(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.data.length === 0) {
      return null;
    }
    
    const item = data.data[0];
    
    return {
      id: item.id.toString(),
      slug: item.attributes.slug,
      title: item.attributes.title,
      excerpt: item.attributes.excerpt,
      content: item.attributes.content,
      date: new Date(item.attributes.date || item.attributes.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category: item.attributes.category,
      author: item.attributes.author,
      image: item.attributes.image?.data?.attributes?.url || '/default-blog-image.jpg',
      backgroundImage: item.attributes.backgroundImage?.data?.attributes?.url || '/default-blog-bg.jpg',
      featured: item.attributes.featured || false,
      tags: item.attributes.tags || [],
      readTime: item.attributes.readTime || '5 min read',
      views: item.attributes.views || 0
    };
  } catch (error) {
    console.error('Error fetching blog post from Strapi:', error);
    return getBlogPostBySlug(slug) || null; // Fallback to hardcoded data
  }
}
```

### 2. Update Page Components

Update the page components to use async data fetching:

```typescript
// app/resources/blog/page.tsx
import { fetchBlogPostsFromStrapi } from "@/lib/blog";
import BlogClient from "@/components/blog/BlogClient";

export const metadata = {
  title: 'Blog - IBSFINtech',
  description: 'Insights, trends, and best practices in treasury management and financial technology from IBSFINtech experts',
  openGraph: {
    title: 'Blog - IBSFINtech',
    description: 'Insights, trends, and best practices in treasury management and financial technology from IBSFINtech experts',
  },
};

export default async function BlogPage() {
  const blogPosts = await fetchBlogPostsFromStrapi();
  return <BlogClient blogPosts={blogPosts} />;
}
```

```typescript
// app/resources/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { fetchBlogPostsFromStrapi, fetchBlogPostBySlugFromStrapi } from "@/lib/blog";
import BlogPostClient from "@/components/blog/BlogPostClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogPosts = await fetchBlogPostsFromStrapi();
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = await fetchBlogPostBySlugFromStrapi(params.slug);
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await fetchBlogPostBySlugFromStrapi(params.slug);
  if (!post) {
    notFound();
  }
  return <BlogPostClient post={post} />;
}
```

## Data Migration

### 1. Export Current Data

Create a script to export current blog data:

```typescript
// scripts/export-blog-data.ts
import { blogPosts } from '../lib/blog';
import fs from 'fs';

const exportData = blogPosts.map(post => ({
  title: post.title,
  slug: post.slug,
  excerpt: post.excerpt,
  content: post.content,
  date: post.date,
  category: post.category,
  author: post.author,
  featured: post.featured,
  tags: post.tags,
  readTime: post.readTime
}));

fs.writeFileSync('blog-export.json', JSON.stringify(exportData, null, 2));
```

### 2. Import to Strapi

1. Use the Strapi admin panel to manually create blog posts
2. Or create a migration script using Strapi's API
3. Upload images to Strapi's media library
4. Update image URLs in the content

## Testing

### 1. Local Development

1. Start your Strapi server: `npm run develop`
2. Start your Next.js app: `npm run dev`
3. Test the blog pages: `http://localhost:3000/resources/blog`

### 2. Production Deployment

1. Deploy Strapi to your hosting platform
2. Update environment variables with production URLs
3. Test all blog functionality in production

## Additional Features

### 1. Search and Filtering

Add search and filtering capabilities:

```typescript
// Add to lib/blog.ts
export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/blog-posts?filters[$or][0][title][$containsi]=${query}&filters[$or][1][content][$containsi]=${query}&populate=*`
  );
  // ... process response
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/blog-posts?filters[category][$eq]=${category}&populate=*`
  );
  // ... process response
}
```

### 2. Pagination

Implement server-side pagination:

```typescript
export async function fetchBlogPostsWithPagination(page: number = 1, pageSize: number = 6): Promise<{posts: BlogPost[], total: number, totalPages: number}> {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/blog-posts?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*&sort=date:desc`
  );
  // ... process response with pagination metadata
}
```

### 3. Related Posts

Add related posts functionality:

```typescript
export async function getRelatedPosts(currentPostId: string, category: string, limit: number = 3): Promise<BlogPost[]> {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/blog-posts?filters[id][$ne]=${currentPostId}&filters[category][$eq]=${category}&pagination[limit]=${limit}&populate=*`
  );
  // ... process response
}
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure Strapi CORS settings include your Next.js domain
2. **Image URLs**: Make sure image URLs are properly formatted with the full Strapi URL
3. **API Token**: Verify your Strapi API token has the correct permissions
4. **Environment Variables**: Double-check all environment variables are set correctly

### Debug Tips

1. Check browser network tab for API calls
2. Verify Strapi API responses in the admin panel
3. Test API endpoints directly using tools like Postman
4. Check console logs for error messages

## Next Steps

1. Set up Strapi admin panel
2. Create blog post collection type
3. Migrate existing data
4. Update code to use Strapi API
5. Test thoroughly
6. Deploy to production

For additional support, refer to the [Strapi documentation](https://docs.strapi.io/) and [Next.js documentation](https://nextjs.org/docs).
