import React, { useState } from 'react';
import { cn } from '../utils/cn';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-white/40 rounded-xl overflow-hidden bg-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/40">
            <button
                onClick={onClick}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none bg-transparent"
            >
                <span className="text-lg font-semibold text-gray-900 pr-8">{question}</span>
                <span className="flex-shrink-0 text-gray-500">
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                </span>
            </button>
            <div
                className={cn(
                    "px-6 text-gray-700 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 py-4 border-t border-white/20" : "max-h-0 py-0"
                )}
            >
                {answer}
            </div>
        </div>
    );
};

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "What is APLGO?",
            a: "APLGO is a wellness brand offering premium, plant-based supplements designed to support everyday balance, energy, and wellbeing."
        },
        {
            q: "How do I choose the right product?",
            a: "Each product has a detailed description and ingredients listed on the Store page. If you’re unsure, message Gugu on WhatsApp and she’ll guide you based on your goals."
        },
        {
            q: "How do I place an order?",
            a: "Add your products to cart and proceed to checkout. When you confirm, you’ll be redirected to WhatsApp to finalise your order and payment with Gugu."
        },
        {
            q: "How can I track my order?",
            a: "After your order is dispatched, Gugu will send you a delivery tracking number (waybill). You can use it to track your delivery until it arrives."
        },
        {
            q: "What is your return policy?",
            a: "If there’s an issue with your order, contact Gugu as soon as possible with your order details. We’ll review and assist fairly, based on the specific situation."
        },
        {
            q: "Are these products medicine?",
            a: "No. These are wellness supplements and are not intended to diagnose, treat, cure, or prevent disease. If you have a medical condition, speak to your healthcare professional first."
        }
    ];

    return (
        <section id="faq" className="py-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/40 text-gray-800 text-sm font-semibold tracking-wide border border-white/50 backdrop-blur-sm">
                        FAQs
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">Your Questions Answered</h2>
                    <p className="text-lg text-gray-700 max-w-xl mx-auto">
                        Here are the most common questions customers ask before buying from us.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        />
                    ))}
                </div>

                <div className="text-center pt-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 text-teal-900 font-semibold border-b-2 border-teal-900/20 hover:border-teal-900 pb-1 transition-all"
                    >
                        Get In Touch →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
