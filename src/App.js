import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import FrontEnd from './pages/FrontEnd';
import BackEnd from './pages/BackEnd';
import TechStacks from './pages/TechStacks';
import { trackPageView } from './lib/analytics';

// Component to track page views
function PageTracker() {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view when location changes
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <PageTracker />
        <main>
          <Routes>
            <Route path="/" element={
              <section id="home">
                <HeroSection 
                  title="Master Web Development"
                  subtitle={{
                    regular: "Your complete roadmap to becoming a ",
                    gradient: "full-stack developer."
                  }}
                 
                  
                />
              </section>
            } />
            <Route path="/frontend" element={<FrontEnd />} />
            <Route path="/backend" element={<BackEnd />} />
            <Route path="/tech-stacks" element={<TechStacks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
