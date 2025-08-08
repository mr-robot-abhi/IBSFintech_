import { newsArticles } from "@/lib/news";
import NewsClient from "@/components/news/NewsClient";

// Generate metadata for SEO
export const metadata = {
  title: 'Latest News - IBSFINtech',
  description: 'Stay updated with the latest developments, partnerships, and innovations from IBSFINtech',
  openGraph: {
    title: 'Latest News - IBSFINtech',
    description: 'Stay updated with the latest developments, partnerships, and innovations from IBSFINtech',
  },
};

export default function NewsPage() {
  return <NewsClient newsArticles={newsArticles} />;
}
