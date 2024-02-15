import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_APIKEY)

import { Order } from "../../models/index.js";

export default async (request,response) => {
    const sig = request.headers['stripe-signature'];
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK);
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`)
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    if(event.type === 'checkout.session.completed'){
        const checkoutSessionCompleted = event.data.object;
        const order = await Order.findOne({
          where: {
            id: checkoutSessionCompleted.metadata.orderId
          }
        });
        if(!order) return console.error('Paid and no Order not found');
        
        order.payment_id = checkoutSessionCompleted.payment_intent;
        order.status = 1;
        order.save();

    }else{
        console.log('Webhook received unknown event type', event.type);
    }
    response.send();
      
}