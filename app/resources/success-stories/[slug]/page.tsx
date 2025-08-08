import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyClient from "@/components/success-stories/CaseStudyClient";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
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

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyClient caseStudy={caseStudy} />;
}
