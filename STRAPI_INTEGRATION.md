# Strapi Integration for Case Studies

This document outlines how to integrate the case studies with Strapi CMS.

## Current Structure

The case studies are currently stored in `lib/caseStudies.ts` as static data. This file contains:

- `CaseStudy` interface defining the data structure
- `caseStudies` array with all case study data
- Helper functions for data access
- Placeholder functions for Strapi API integration

## Strapi Collection Type Setup

### 1. Create Case Study Content Type

In your Strapi admin panel, create a new collection type called "Case Study" with the following fields:

```json
{
  "title": "Text (required)",
  "description": "Text (required)",
  "excerpt": "Text (required)",
  "slug": "UID (required, target: title)",
  "date": "Date (required)",
  "category": "Enumeration (required)",
  "fullContent": "Rich Text (required)",
  "challenges": "JSON (required)",
  "solutions": "JSON (required)",
  "results": "JSON (required)",
  "companyInfo": "Text (required)",
  "image": "Media (single, required)",
  "backgroundImage": "Media (single, required)"
}
```

### 2. Category Enumeration Values

Set up the category enumeration with these values:
- FMCG
- Mining & Metals
- Financial Services
- Real Estate
- Manufacturing

### 3. Permissions

Ensure the following permissions are set for the Case Study content type:
- `find` - Public
- `findOne` - Public

## API Integration

### 1. Update Environment Variables

Add your Strapi URL to your environment variables:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
# or for production
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-instance.com
```

### 2. Update Helper Functions

Replace the placeholder functions in `lib/caseStudies.ts` with actual API calls:

```typescript
export const fetchCaseStudiesFromStrapi = async (): Promise<CaseStudy[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/case-studies?populate=*`);
  const data = await response.json();
  
  return data.data.map((item: any) => ({
    id: item.id,
    title: item.attributes.title,
    description: item.attributes.description,
    excerpt: item.attributes.excerpt,
    slug: item.attributes.slug,
    date: item.attributes.date,
    category: item.attributes.category,
    fullContent: item.attributes.fullContent,
    challenges: item.attributes.challenges,
    solutions: item.attributes.solutions,
    results: item.attributes.results,
    companyInfo: item.attributes.companyInfo,
    image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.image.data.attributes.url}`,
    backgroundImage: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.backgroundImage.data.attributes.url}`
  }));
};

export const fetchCaseStudyBySlugFromStrapi = async (slug: string): Promise<CaseStudy | null> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/case-studies?filters[slug][$eq]=${slug}&populate=*`);
  const data = await response.json();
  
  if (!data.data || data.data.length === 0) {
    return null;
  }
  
  const item = data.data[0];
  return {
    id: item.id,
    title: item.attributes.title,
    description: item.attributes.description,
    excerpt: item.attributes.excerpt,
    slug: item.attributes.slug,
    date: item.attributes.date,
    category: item.attributes.category,
    fullContent: item.attributes.fullContent,
    challenges: item.attributes.challenges,
    solutions: item.attributes.solutions,
    results: item.attributes.results,
    companyInfo: item.attributes.companyInfo,
    image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.image.data.attributes.url}`,
    backgroundImage: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.backgroundImage.data.attributes.url}`
  };
};
```

### 3. Update Pages to Use API

Update the pages to use the API functions instead of static data:

#### Success Stories Page (`app/resources/success-stories/page.tsx`)

```typescript
// Add async to the component
export default async function SuccessStoriesPage() {
  const successStories = await fetchCaseStudiesFromStrapi();
  
  // Rest of the component remains the same
}
```

#### Individual Case Study Page (`app/resources/success-stories/[slug]/page.tsx`)

```typescript
// Add async to the component
export default async function CaseStudyPage({ params }: PageProps) {
  const caseStudy = await fetchCaseStudyBySlugFromStrapi(params.slug);
  
  if (!caseStudy) {
    notFound();
  }
  
  // Rest of the component remains the same
}
```

### 4. Update Homepage Component

For the homepage CaseStudies component, you'll need to fetch the data at build time or use client-side fetching:

```typescript
// Option 1: Server Component with async data fetching
export default async function CaseStudies() {
  const allCaseStudies = await fetchCaseStudiesFromStrapi();
  const homepageCaseStudies = allCaseStudies.filter(cs => 
    ['dabur-fmcg-automation', 'hindustan-zinc-automation', 'credit-saison-nbfc', 'polycab-cable-wire'].includes(cs.slug)
  );
  
  // Rest of the component
}

// Option 2: Client Component with useEffect
"use client";
import { useEffect, useState } from 'react';

export default function CaseStudies() {
  const [homepageCaseStudies, setHomepageCaseStudies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const allCaseStudies = await fetchCaseStudiesFromStrapi();
      const filtered = allCaseStudies.filter(cs => 
        ['dabur-fmcg-automation', 'hindustan-zinc-automation', 'credit-saison-nbfc', 'polycab-cable-wire'].includes(cs.slug)
      );
      setHomepageCaseStudies(filtered);
    };
    
    fetchData();
  }, []);
  
  // Rest of the component
}
```

## Data Migration

### 1. Import Existing Data

Use the existing data from `lib/caseStudies.ts` to populate your Strapi instance:

1. Go to your Strapi admin panel
2. Navigate to Content Manager > Case Study
3. Create new entries using the data from the static file
4. Upload the corresponding images to the Media Library
5. Link the images to the case study entries

### 2. Image Handling

Ensure all case study images are uploaded to Strapi's Media Library:
- Client logos (e.g., `/Case_Studies/IBSFINtech-Client-Dabur.png`)
- Background images (e.g., `/Case_Studies/Dabur_CaseStudy.jpg`)

## SEO and Performance

### 1. Static Generation

For better performance, consider using static generation:

```typescript
// In individual case study page
export async function generateStaticParams() {
  const caseStudies = await fetchCaseStudiesFromStrapi();
  
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}
```

### 2. Metadata

Add dynamic metadata to your pages:

```typescript
// In individual case study page
export async function generateMetadata({ params }: PageProps) {
  const caseStudy = await fetchCaseStudyBySlugFromStrapi(params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }
  
  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      images: [caseStudy.backgroundImage],
    },
  };
}
```

## Testing

1. Test the API endpoints in your browser or Postman
2. Verify that all case studies are accessible
3. Check that images are loading correctly
4. Test the homepage component with the new data source
5. Verify that all links are working properly

## Fallback Strategy

Keep the static data as a fallback in case the Strapi API is unavailable:

```typescript
export const fetchCaseStudiesFromStrapi = async (): Promise<CaseStudy[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/case-studies?populate=*`);
    const data = await response.json();
    
    // Transform and return data
    return data.data.map(/* transformation logic */);
  } catch (error) {
    console.error('Failed to fetch from Strapi, using fallback data:', error);
    return caseStudies; // Fallback to static data
  }
};
```

This approach ensures your site remains functional even if there are issues with the CMS.
