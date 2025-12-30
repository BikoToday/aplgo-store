import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '../utils/cn';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: 'https://www.aplgo.co.za/' },
        { name: 'Store', href: 'https://store.aplgo.co.za/' },
        { name: 'About Us', href: 'https://about.aplgo.co.za/' },
        { name: 'Support', href: 'https://support.aplgo.co.za/' }, // Current page, but keeping external consistency
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "bg-white/30 backdrop-blur-md shadow-sm border-b border-white/20" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo Area */}
                <a href="https://www.aplgo.co.za/" className="flex items-center gap-2 group">
                    <img src="/logo.png" alt="APLGO" className="h-12 w-auto object-contain" />
                    <span className="text-gray-600 font-light text-sm pt-1">with Gugu</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors duration-200 hover:text-teal-700",
                                link.name === 'Support' ? "text-teal-800 font-semibold" : "text-gray-700"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="https://store.aplgo.co.za/"
                        className="group flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-900/10"
                    >
                        Shop <ShoppingBag className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-gray-800 hover:bg-white/20 rounded-lg"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-white/20 p-6 md:hidden animate-in slide-in-from-top-4 fade-in duration-200">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100/50"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://store.aplgo.co.za/"
                            className="mt-2 flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl text-base font-medium"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
