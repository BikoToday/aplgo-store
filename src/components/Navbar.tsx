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
                    <Link to="/" className="text-xl font-serif font-semibold tracking-tight text-stone-900">
                        APLGO <span className="font-sans text-xs font-normal text-stone-500 ml-1">with Gugu</span>
                    </Link>

                    {/* Nav Links - Desktop */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Journal</Link>
                        <Link to="/store" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Shop</Link>
                        <Link to="/about" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">About</Link>
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
