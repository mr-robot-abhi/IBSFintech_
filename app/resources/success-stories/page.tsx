import { caseStudies } from "@/lib/caseStudies";
import SuccessStoriesClient from "@/components/success-stories/SuccessStoriesClient";

const successStories = caseStudies;

// Generate metadata for SEO
export const metadata = {
  title: 'Success Stories - IBSFINtech',
  description: 'Discover how leading organizations transformed their treasury operations with IBSFINtech\'s innovative solutions',
  openGraph: {
    title: 'Success Stories - IBSFINtech',
    description: 'Discover how leading organizations transformed their treasury operations with IBSFINtech\'s innovative solutions',
  },
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient successStories={successStories} />;
}
