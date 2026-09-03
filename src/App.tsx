import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Resources from './pages/Resources';
import Podcast from './pages/Podcast';
import ImpactReport from './pages/ImpactReport';

import AboutCDF from './pages/AboutCDF';
import AboutUs from './pages/AboutUs';
import TheFoundingTeam from './pages/TheFoundingTeam';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full overflow-hidden">
        
        <Header />

        <main className="flex-grow w-full">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Knowledge Hub */}
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/impact-report" element={<ImpactReport />} />
            <Route path="/resources" element={<Resources />} />

            {/* About */}
            <Route path="/about-cdf" element={<AboutCDF />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/the-founding-team" element={<TheFoundingTeam />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;