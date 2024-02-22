import Stripe from "stripe";
import { STRIPE_APIKEY } from "../../config.js";
const stripe = new Stripe(STRIPE_APIKEY)

export default async function paymentRequest(line_items,orderId) {
    const session = await stripe.checkout.sessions.create({
        line_items,
        metadata: {
            orderId
        },
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });
    console.log(orderId)
    return session.url
}