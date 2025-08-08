import { notFound } from "next/navigation";
import { newsArticles, getNewsArticleBySlug } from "@/lib/news";
import NewsArticleClient from "@/components/news/NewsArticleClient";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all news articles
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const article = getNewsArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'News Article Not Found',
    };
  }
  
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.backgroundImage],
    },
  };
}

export default function NewsArticlePage({ params }: PageProps) {
  const article = getNewsArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <NewsArticleClient article={article} />;
}
