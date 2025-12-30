import React from 'react';
import NavBar from './components/NavBar';
import FloatingElements from './components/FloatingElements';
import HeroContact from './components/HeroContact';
import ContactCards from './components/ContactCards';
import FAQAccordion from './components/FAQAccordion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative font-sans text-gray-800 selection:bg-teal-200 selection:text-teal-900">
      <NavBar />
      <FloatingElements />

      <main>
        <HeroContact />
        <ContactCards />
        <FAQAccordion />
      </main>

      <Footer />
    </div>
  );
}

export default App;
