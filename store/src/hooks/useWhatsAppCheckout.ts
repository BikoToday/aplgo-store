import { CartItem } from '../types';

interface CheckoutDetails {
    name: string;
    area: string;
    notes?: string;
}

export const useWhatsAppCheckout = () => {
    const processCheckout = (items: CartItem[], details: CheckoutDetails) => {
        const phoneNumber = '27607586902';

        let message = `Hi Gugu, I'd like to place an order.\n\n`;
        message += `Name: ${details.name}\n`;
        message += `Delivery area: ${details.area}\n\n`;

        message += `Items:\n`;
        items.forEach(item => {
            const link = item.waLink || item.whatsappLink;
            message += `– ${item.code} x${item.quantity} — ${link}\n`;
        });

        if (details.notes) {
            message += `\nNotes: ${details.notes}\n`;
        }

        message += `\nPlease confirm total and delivery options. Thank you.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return { processCheckout };
};
