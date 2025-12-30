import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartContextType, CartItem, Product } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};

// Custom hook for safe local storage persistence
function useLocalStorageCart(key: string, initialValue: CartItem[]) {
    // Initialize state function to avoid re-reading localStorage on every render
    const [cart, setCart] = useState<CartItem[]>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error reading from localStorage', error);
            return initialValue;
        }
    });

    // Update localStorage whenever cart changes
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(cart));
        } catch (error) {
            console.error('Error writing to localStorage', error);
        }
    }, [key, cart]);

    return [cart, setCart] as const;
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useLocalStorageCart('aplgo_cart_v1', []);
    const [isOpen, setIsOpen] = useState(false);

    const addToCart = (product: Product) => {
        setItems((currentItems) => {
            const existingItemIndex = currentItems.findIndex(item => item.id === product.id);

            if (existingItemIndex > -1) {
                // Item exists, update quantity
                const newItems = [...currentItems];
                newItems[existingItemIndex].quantity += 1;
                return newItems;
            } else {
                // Item does not exist, append new item
                // Mapping Product to CartItem structure including waLink
                const newItem: CartItem = {
                    ...product,
                    quantity: 1,
                    waLink: product.whatsappLink
                };
                return [...currentItems, newItem];
            }
        });
        setIsOpen(true);
    };

    const removeFromCart = (productId: string) => {
        setItems((currentItems) => currentItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        setItems((currentItems) =>
            currentItems.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setItems([]);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                isOpen,
                setIsOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
