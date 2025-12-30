export type CollectionType = 'Daily' | 'Premium' | 'Elite';

export interface Product {
    id: string;
    code: string;
    name: string; // Derived from code usually, but good to have
    image: string;
    whatsappLink: string;
    collection: CollectionType;
    description?: string;
}

export interface CartItem extends Product {
    quantity: number;
    waLink?: string; // Mapped from Product.whatsappLink
}

export interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}
