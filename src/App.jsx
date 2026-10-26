import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollObserver from './components/common/ScrollObserver';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookCar from './pages/BookCar';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-red-600 selection:text-white overflow-x-hidden w-full">
        {/* Auto Scroll To Top on route transition */}
        <ScrollToTop />

        {/* Global Scroll Animation Observer */}
        <ScrollObserver />

        {/* Sticky Responsive Navbar with User's Uploaded Logo */}
        <Navbar />

        {/* Main Application Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookCar />} />
            <Route path="/book-a-car" element={<BookCar />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Comprehensive Footer */}
        <Footer />
      </div>
    </Router>
  );
}
