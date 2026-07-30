import { Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesOverviewPage from '../pages/ServicesOverviewPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';

import ResourcesHubPage from '../pages/ResourcesHubPage';
import CareersPage from '../pages/CareersPage';
import ContactPage from '../pages/ContactPage';
import BookNowPage from '../pages/BookNowPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsOfServicePage from '../pages/TermsOfServicePage';
import NoticeOfPrivacyPracticesPage from '../pages/NoticeOfPrivacyPracticesPage';
import AccessibilityDisclaimerPage from '../pages/AccessibilityDisclaimerPage';
import { servicesData } from '../data/servicesData';

// Wrapper for ServiceDetail to handle data fetching from params
function ServiceDetailWrapper() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <ServiceDetailPage 
      service={service} 
      onBack={() => navigate('/services')} 
      onBookNow={() => navigate('/book-appointment')} 
    />
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesOverviewPage />} />
      <Route path="/services/:id" element={<ServiceDetailWrapper />} />

      <Route path="/resources" element={<ResourcesHubPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/book-appointment" element={<BookNowPage />} />

      {/* Policies */}
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/notice-of-privacy-practices" element={<NoticeOfPrivacyPracticesPage />} />
      <Route path="/accessibility-statement" element={<AccessibilityDisclaimerPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
