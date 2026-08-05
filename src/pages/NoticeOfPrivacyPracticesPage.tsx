import { useEffect } from 'react';
import { Landmark } from 'lucide-react';
import { setPageSeo } from '../utils/seoUtils';
import PolicyMarkdownViewer from '../components/PolicyMarkdownViewer';
import rawMarkdown from '../../policies/Notice_of_Privacy_Practices.md?raw';

export default function NoticeOfPrivacyPracticesPage() {
  useEffect(() => {
    setPageSeo({
      title: 'HIPAA Notice of Privacy Practices | Miracle View Health',
      description: 'HIPAA Notice of Privacy Practices (NPP) outlining patient health information privacy rights under 45 CFR Parts 160 and 164.',
      canonicalPath: '/notice-of-privacy-practices'
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <PolicyMarkdownViewer
      rawMarkdown={rawMarkdown}
      pageTitle="HIPAA Notice of Privacy Practices"
      subtitle="Your rights and our responsibilities regarding your Protected Health Information (PHI)"
      badgeText="Compliance & Security Portal"
      badgeIcon={<Landmark className="w-4.5 h-4.5 text-[#c39b3d]" />}
      pageId="notice-of-privacy-practices-page"
    />
  );
}
