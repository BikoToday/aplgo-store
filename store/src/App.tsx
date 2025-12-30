import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { Background } from './components/Background';
import { StorePage } from './pages/StorePage';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

export default function App() {
    return (
        <Router>
            <CartProvider>
                <div className="min-h-screen flex flex-col">
                    <Background />
                    <ScrollToTop />
                    <Navbar />
                    <CartDrawer />

                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<StorePage />} />
                            {/* Fallback route */}
                            <Route path="*" element={<StorePage />} />
                        </Routes>
                    </main>

                    <footer className="py-12 text-center text-stone-400 text-sm font-light">
                        <p>&copy; {new Date().getFullYear()} APLGO with Gugu. All rights reserved.</p>
                    </footer>
                </div>
            </CartProvider>
        </Router>
    );
}
