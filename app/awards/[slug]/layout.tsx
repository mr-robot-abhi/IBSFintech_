import { Metadata } from 'next';
import { getAwardBySlug } from '../data';

interface Props {
  children: React.ReactNode;
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const award = getAwardBySlug(params.slug);
  
  if (!award) {
    return {
      title: 'Award Not Found | IBSFINtech',
      description: 'The requested award could not be found.',
    };
  }

  return {
    title: `${award.title} | IBSFINtech Awards`,
    description: award.description || `Learn about IBSFINtech's ${award.title} achievement in ${award.year}.`,
    keywords: [
      'IBSFINtech',
      'Treasury Management',
      'Awards',
      'FinTech',
      'Risk Management',
      'Trade Finance',
      award.title,
      award.year.toString(),
      ...(award.event ? [award.event] : [])
    ].filter(Boolean),
    openGraph: {
      title: `${award.title} | IBSFINtech Awards`,
      description: award.description || `Learn about IBSFINtech's ${award.title} achievement in ${award.year}.`,
      type: 'article',
      publishedTime: new Date(award.year, 11, 31).toISOString(),
      authors: ['IBSFINtech'],
      images: award.imageUrl ? [
        {
          url: award.imageUrl,
          alt: award.title,
          width: 1200,
          height: 630,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${award.title} | IBSFINtech Awards`,
      description: award.description || `Learn about IBSFINtech's ${award.title} achievement in ${award.year}.`,
      images: award.imageUrl ? [award.imageUrl] : [],
    },
    alternates: {
      canonical: `/awards/${award.slug}`,
    },
  };
}

export default function AwardLayout({ children, params }: Props) {
  const award = getAwardBySlug(params.slug);
  
  if (!award) {
    return <>{children}</>;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Award",
    "name": award.title,
    "description": award.description || `IBSFINtech's ${award.title} achievement in ${award.year}`,
    "awardedFor": award.event || "Excellence in Treasury Management",
    "dateReceived": `${award.year}-12-31`,
    "recipient": {
      "@type": "Organization",
      "name": "IBSFINtech",
      "url": "https://ibsfintech.com",
      "description": "Leading provider of Treasury Management Solutions"
    },
    "sponsor": {
      "@type": "Organization",
      "name": award.event || "Industry Recognition",
      "description": "Prestigious industry award organization"
    },
    "category": "Technology & Innovation",
    "url": `https://ibsfintech.com/awards/${award.slug}`,
    "image": award.imageUrl,
    "sameAs": [
      "https://www.linkedin.com/company/ibsfintech",
      "https://twitter.com/ibsfintech"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      {children}
    </>
  );
}
