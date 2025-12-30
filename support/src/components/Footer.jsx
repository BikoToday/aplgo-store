import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative pt-16 pb-8 border-t border-white/20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <img
                    src="/footer-bg.jpg"
                    alt="Footer Background"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>
            {/* Teal Overlay */}
            <div className="absolute inset-0 bg-teal-900/10 backdrop-blur-[2px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2 mb-1">
                            <img src="/logo.png" alt="APLGO" className="h-10 w-auto object-contain" />
                            <span className="text-gray-600/80 text-sm font-light pt-1">with Gugu</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            APLGO with Gugu is a global wellness system offering premium, plant-based supplements designed to support everyday balance and vitality.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://www.facebook.com/za.aplgo" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-gray-600 hover:bg-teal-100 hover:text-teal-800 transition-colors"><Facebook className="w-4 h-4" /></a>
                            <a href="https://www.instagram.com/aplgo.sa/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-gray-600 hover:bg-teal-100 hover:text-teal-800 transition-colors"><Instagram className="w-4 h-4" /></a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Main Pages</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="https://www.aplgo.co.za/" className="hover:text-teal-800 hover:underline">Home</a></li>
                            <li><a href="https://store.aplgo.co.za/" className="hover:text-teal-800 hover:underline">Store</a></li>
                            <li><a href="https://about.aplgo.co.za/" className="hover:text-teal-800 hover:underline">About Us</a></li>
                            <li><a href="https://support.aplgo.co.za/" className="hover:text-teal-800 hover:underline">Support</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-teal-800 hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-teal-800 hover:underline">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-teal-800 hover:underline">Return Policy</a></li>
                        </ul>
                    </div>

                    {/* Empty Col / Decoration */}
                    <div className="hidden md:block">
                        {/* Optional decoration space */}
                    </div>
                </div>

                <div className="border-t border-gray-200/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>Copyright © 2026 All rights reserved</p>
                    <p>
                        Website designed by <a href="https://www.bikotoday.co.za/" className="text-teal-800 font-semibold hover:underline">BikoToday</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
