import React, { useState } from 'react';
import { cn } from '../utils/cn';
import { ArrowDown, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const HeroContact = () => {
    const [formData, setFormData] = useState({
        requestType: 'Product question',
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ requestType: 'Product question', fullName: '', phone: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const requestOptions = [
        "Product question", "Order / delivery", "Payment / EFT proof",
        "Returns / issue", "Other"
    ];

    return (
        <section className="relative pt-32 pb-16 px-6 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 animate-in slide-in-from-left-8 duration-700 fade-in">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-teal-800/10 text-teal-900 text-sm font-semibold tracking-wide border border-teal-800/5 backdrop-blur-sm">
                        Support
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight text-balance font-serif">
                        Support from Gugu, Every Step of Your Wellness Journey
                    </h1>

                    <div className="space-y-4">
                        {[
                            "Clear, honest guidance from Gugu to help you choose the right APLGO products",
                            "Ongoing APLGO support whenever you need clarity or reassurance"
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-3 text-lg text-gray-700/80">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-600/20 text-teal-800 flex items-center justify-center text-sm">✓</span>
                                {text}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center gap-2 text-teal-900 font-semibold border-b-2 border-teal-900/20 hover:border-teal-900 pb-1 transition-all"
                    >
                        Our FAQs <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Right Form */}
                <div className="animate-in slide-in-from-right-8 duration-700 fade-in delay-200">
                    <div className="glass-panel p-8 md:p-10 relative overflow-hidden">
                        {/* Success Overlay */}
                        {status === 'success' && (
                            <div className="absolute inset-0 bg-white/90 backdrop-blur-md z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in">
                                <CheckCircle className="w-16 h-16 text-teal-500 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600">Thanks — we’ve received your message. Gugu will get back to you shortly.</p>
                                <button onClick={() => setStatus('idle')} className="mt-6 text-teal-800 font-medium hover:underline">Send another</button>
                            </div>
                        )}

                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Drop Us a Line</h2>
                            <p className="text-gray-600">We’re here and ready to listen!</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Request Type</label>
                                    <select
                                        name="requestType"
                                        value={formData.requestType}
                                        onChange={handleChange}
                                        className="w-full glass-input"
                                    >
                                        {requestOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                </div>

                                <div className="col-span-2">
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full glass-input"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full glass-input"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full glass-input"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="How can we help?"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full glass-input resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                                    <AlertCircle className="w-4 h-4" />
                                    Something went wrong. Please try again or WhatsApp us.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-gray-900 text-white rounded-xl py-4 font-semibold text-lg hover:bg-gray-800 transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'submitting' ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : 'Submit →'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroContact;
