import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';

import logo from '../../assets/images/logo.png';

const navLinks = [
    { name: 'Home', href: 'https://www.aplgo.co.za/' },
    { name: 'Store', href: 'https://store.aplgo.co.za/' },
    { name: 'About Us', href: 'https://about.aplgo.co.za/', active: true },
    { name: 'Support', href: 'https://support.aplgo.co.za/' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "bg-white/30 backdrop-blur-lg shadow-sm py-4" : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
                        <img src={logo} alt="APLGO" className="h-12 w-auto" />
                        <span className="text-xl font-light text-primary hidden sm:inline-block">with Gugu</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary relative group flex items-center gap-1",
                                    link.active ? "text-primary" : "text-text"
                                )}
                            >
                                {link.name}
                                {link.active && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    />
                                )}
                                {!link.active && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                                )}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Button variant="primary" className="py-2 px-6 text-sm" onClick={() => window.open('https://store.aplgo.co.za/', '_blank')}>
                            Shop Now
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-text"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white/90 backdrop-blur-xl shadow-2xl p-6 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xl font-bold">Menu</span>
                                <button onClick={() => setMobileMenuOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "text-lg font-medium border-b border-gray-100 pb-2 flex justify-between items-center",
                                            link.active ? "text-primary" : "text-text"
                                        )}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <Button variant="primary" className="mt-4 w-full" onClick={() => window.open('https://store.aplgo.co.za/', '_blank')}>
                                    Shop Now
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
