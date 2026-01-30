import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import CompatibilityPage from './pages/CompatibilityPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  const location = useLocation();
  const hideLanguageSwitcher = location.pathname === '/test';

  return (
    <>
      {!hideLanguageSwitcher && <LanguageSwitcher />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result/:type" element={<ResultPage />} />
        <Route path="/compatibility" element={<CompatibilityPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}
