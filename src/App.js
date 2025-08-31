import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import FrontEnd from './pages/FrontEnd';
import BackEnd from './pages/BackEnd';
import TechStacks from './pages/TechStacks';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
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
