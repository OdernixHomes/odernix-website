import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import SEOHead from './components/SEOHead';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import { useAnalytics } from './hooks/useAnalytics';

// Analytics wrapper component that uses the hook inside Router context
const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  useAnalytics();
  return <>{children}</>;
};

function App() {
  return (
    <ErrorBoundary>
      <SEOHead />
      <Router>
        <ScrollToTop />
        <AnalyticsProvider>
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <ErrorBoundary>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* <Route path="/blog" element={<Blog />} /> */}
                  <Route path="/careers" element={<Careers />} />
                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </AnalyticsProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;