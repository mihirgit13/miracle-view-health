import { useEffect } from 'react';
import { Eye } from 'lucide-react';
import { setPageSeo } from '../utils/seoUtils';
import PolicyMarkdownViewer from '../components/PolicyMarkdownViewer';
import rawMarkdown from '../../policies/Accessibility_and_Disclaimer.md?raw';

export default function AccessibilityDisclaimerPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Accessibility Statement & Disclaimer | Miracle View Health',
      description: 'Web Content Accessibility Guidelines (WCAG 2.1 AA) statement and medical disclaimer for Miracle View Health LLC.',
      canonicalPath: '/accessibility-statement'
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <PolicyMarkdownViewer
      rawMarkdown={rawMarkdown}
      pageTitle="Accessibility Statement & Disclaimer"
      subtitle="Our commitment to digital inclusion and terms governing website information"
      badgeText="Compliance & Security Portal"
      badgeIcon={<Eye className="w-4.5 h-4.5 text-[#c39b3d]" />}
      pageId="accessibility-statement-page"
    />
  );
}
