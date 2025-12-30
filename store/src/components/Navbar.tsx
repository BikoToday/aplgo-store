import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { GlassPanel } from './GlassPanel';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const { totalItems, setIsOpen } = useCart();

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <GlassPanel
                    className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between rounded-full"
                >
                    {/* Logo */}
                    <a href="https://aplgo.co.za/" className="flex items-center gap-2">
                        <img src="/aplgo_logo.png" alt="APLGO Logo" className="h-8 w-auto" />
                    </a>

                    {/* Nav Links - Desktop */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="https://aplgo.co.za/" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Home</a>
                        <a href="https://store.aplgo.co.za/" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Store</a>
                        <a href="https://store.aplgo.co.za/" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">About Us</a>
                        <a href="https://support.aplgo.co.za/" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Support</a>
                    </nav>

                    {/* Cart Trigger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="relative p-2 hover:bg-stone-100/50 rounded-full transition-colors group"
                    >
                        <ShoppingBag className="w-5 h-5 text-stone-700 group-hover:text-stone-900" />
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-stone-900 text-[10px] text-white rounded-full font-medium">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </GlassPanel>
            </motion.header>

            {/* Spacer to prevent content from hiding behind fixed header */}
            <div className="h-24" />
        </>
    );
};
