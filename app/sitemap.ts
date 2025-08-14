import { MetadataRoute } from 'next';
import { getAllAwards } from './awards/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const awards = getAllAwards();
  
  const awardUrls = awards.map((award) => ({
    url: `https://ibsfintech.com/awards/${award.slug}`,
    lastModified: new Date(award.year, 11, 31),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://ibsfintech.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://ibsfintech.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ibsfintech.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ibsfintech.com/awards',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://ibsfintech.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://ibsfintech.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...awardUrls,
  ];
}
