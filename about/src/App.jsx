import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Mission from './components/sections/Mission';
import ProductGrid from './components/sections/ProductGrid';
import Certifications from './components/sections/Certifications';
import Philosophy from './components/sections/Philosophy';
import MeetGugu from './components/sections/MeetGugu';
import GlobalReach from './components/sections/GlobalReach';
import JoinUs from './components/sections/JoinUs';

function App() {
  return (
    <div className="min-h-screen font-sans text-text selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <ProductGrid />
        <Certifications />
        <Philosophy />
        <MeetGugu />
        <GlobalReach />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
