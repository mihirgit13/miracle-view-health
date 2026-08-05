import { useEffect } from 'react';
import { FileText } from 'lucide-react';
import { setPageSeo } from '../utils/seoUtils';
import PolicyMarkdownViewer from '../components/PolicyMarkdownViewer';
import rawMarkdown from '../../policies/Terms_of_Medical_Service.md?raw';

export default function TermsOfServicePage() {
  useEffect(() => {
    setPageSeo({
      title: 'Terms of Medical Service | Miracle View Health',
      description: 'Official Terms of Medical Service and treatment guidelines for patients of Miracle View Health LLC.',
      canonicalPath: '/terms-of-service'
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <PolicyMarkdownViewer
      rawMarkdown={rawMarkdown}
      pageTitle="Terms of Medical Service"
      subtitle="Rules, responsibilities, and expectations for patients and visitors"
      badgeText="Compliance & Security Portal"
      badgeIcon={<FileText className="w-4.5 h-4.5 text-[#c39b3d]" />}
      pageId="terms-of-service-page"
    />
  );
}
