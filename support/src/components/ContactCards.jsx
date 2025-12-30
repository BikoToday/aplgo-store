import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const ContactCards = () => {
    return (
        <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

                {/* Phone Card */}
                <div className="glass-panel p-8 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 mb-2">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Call Gugu</h3>
                        <p className="text-gray-600 text-lg mt-1">060 758 6902</p>
                    </div>
                </div>

                {/* WhatsApp Card */}
                <div className="glass-panel p-8 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-2">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">WhatsApp Support</h3>
                        <a
                            href="https://wa.me/27607586902"
                            className="inline-flex items-center gap-2 text-green-700 font-semibold mt-2 hover:underline"
                        >
                            Chat on WhatsApp →
                        </a>
                    </div>
                </div>

                {/* Address Card */}
                <div className="glass-panel p-8 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-2">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Visit Us</h3>
                        <p className="text-gray-600 mt-1 leading-relaxed">
                            223 Musgrave Road, Tinsley House, Office 8A, Durban, KwaZulu-Natal, 4001
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactCards;
