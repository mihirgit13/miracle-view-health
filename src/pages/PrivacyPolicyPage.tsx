import { useEffect } from 'react';
import { Shield } from 'lucide-react';
import { setPageSeo } from '../utils/seoUtils';
import PolicyMarkdownViewer from '../components/PolicyMarkdownViewer';
import rawMarkdown from '../../policies/Privacy_Policy.md?raw';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Website Privacy Policy | Miracle View Health',
      description: 'Read the official Privacy Policy for Miracle View Health LLC detailing how we protect patient privacy, handle PHI, and maintain HIPAA compliance.',
      canonicalPath: '/privacy-policy'
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <PolicyMarkdownViewer
      rawMarkdown={rawMarkdown}
      pageTitle="Website Privacy Policy"
      subtitle="How we protect and manage the information you share with us"
      badgeText="Compliance & Security Portal"
      badgeIcon={<Shield className="w-4.5 h-4.5 text-[#c39b3d]" />}
      pageId="privacy-policy-page"
    />
  );
}
