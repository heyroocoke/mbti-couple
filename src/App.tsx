import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import CompatibilityPage from './pages/CompatibilityPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result/:type" element={<ResultPage />} />
        <Route path="/compatibility" element={<CompatibilityPage />} />
      </Routes>
      <Footer />
    </>
  );
}
