import { MetadataRoute } from 'next';
import { getAllAwards } from './data';

export default function sitemap(): MetadataRoute.Sitemap {
  const awards = getAllAwards();
  
  const awardUrls = awards.map((award) => ({
    url: `https://ibsfintech.com/awards/${award.slug}`,
    lastModified: new Date(award.year, 11, 31), // December 31st of the award year
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://ibsfintech.com/awards',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...awardUrls,
  ];
}
