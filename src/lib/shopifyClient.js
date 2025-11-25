import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: import.meta.env.VITE_SHOPIFY_DOMAIN,
    storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN
});

export const checkout = async () => {
    const variantId = import.meta.env.VITE_SHOPIFY_PRODUCT_ID;

    if (import.meta.env.VITE_SHOPIFY_DOMAIN.includes('your-shop-name')) {
        alert('Shopify integration is in demo mode. Please configure credentials in .env');
        return;
    }

    try {
        const checkout = await client.checkout.create();
        const lineItemsToAdd = [
            {
                variantId: variantId,
                quantity: 1
            }
        ];

        const checkoutWithItem = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);

        // Redirect to Shopify Checkout
        window.location.href = checkoutWithItem.webUrl;
    } catch (error) {
        console.error('Error creating checkout:', error);
        alert('Failed to initiate checkout. Please try again later.');
    }
};
