import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWhatsAppCheckout } from '../hooks/useWhatsAppCheckout';
import { Button } from './Button';
import { GlassPanel } from './GlassPanel';

export const CartDrawer = () => {
    const { items, isOpen, setIsOpen, updateQuantity, removeFromCart } = useCart();
    const { processCheckout } = useWhatsAppCheckout();

    const [name, setName] = useState('');
    const [area, setArea] = useState('');
    const [notes, setNotes] = useState('');

    const handleCheckout = () => {
        if (!name || !area) {
            alert('Please fill in your Name and Delivery Area');
            return;
        }
        processCheckout(items, { name, area, notes });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-stone-900/20 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <GlassPanel
                        variant="sidebar"
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-md flex flex-col"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className="flex items-center justify-between p-6 border-b border-stone-200/50">
                            <h2 className="text-xl font-serif font-medium flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5" />
                                Your Wellness Cart
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-stone-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-stone-400 space-y-4">
                                    <ShoppingBag className="w-12 h-12 opacity-20" />
                                    <p>Your cart is empty.</p>
                                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                                        Browse Collection
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {/* Items List */}
                                    <div className="space-y-4">
                                        {items.map((item) => (
                                            <div key={item.id} className="flex gap-4">
                                                <div className="w-20 h-20 bg-white rounded-md p-2 flex items-center justify-center border border-stone-100">
                                                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <h4 className="font-serif font-medium text-stone-800">{item.name}</h4>
                                                    <p className="text-xs text-stone-500">{item.code}</p>
                                                    <div className="flex items-center gap-3 pt-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-1 hover:bg-stone-100 rounded"
                                                        >
                                                            <Minus className="w-3 h-3 text-stone-500" />
                                                        </button>
                                                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-1 hover:bg-stone-100 rounded"
                                                        >
                                                            <Plus className="w-3 h-3 text-stone-500" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-xs text-stone-400 hover:text-red-500 self-start"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Checkout Form */}
                                    <div className="border-t border-stone-200/50 pt-6 space-y-4">
                                        <h3 className="font-medium text-stone-900">Checkout Details</h3>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="block text-xs font-medium text-stone-600 mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full px-3 py-2 bg-white/50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 transition-colors placeholder:text-stone-300"
                                                    placeholder="e.g. Jane Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-stone-600 mb-1">Delivery Area</label>
                                                <input
                                                    type="text"
                                                    value={area}
                                                    onChange={(e) => setArea(e.target.value)}
                                                    className="w-full px-3 py-2 bg-white/50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 transition-colors placeholder:text-stone-300"
                                                    placeholder="e.g. Sandton, Johannesburg"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-stone-600 mb-1">Notes (Optional)</label>
                                                <textarea
                                                    value={notes}
                                                    onChange={(e) => setNotes(e.target.value)}
                                                    className="w-full px-3 py-2 bg-white/50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 transition-colors placeholder:text-stone-300 resize-none h-20"
                                                    placeholder="Any special instructions..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-6 border-t border-stone-200/50 bg-white/50 backdrop-blur-sm">
                                <Button onClick={handleCheckout} className="w-full" size="lg">
                                    Checkout on WhatsApp
                                </Button>
                                <p className="text-center text-xs text-stone-400 mt-3">
                                    You'll be redirected to WhatsApp to confirm your order.
                                </p>
                            </div>
                        )}
                    </GlassPanel>
                </>
            )}
        </AnimatePresence>
    );
};
