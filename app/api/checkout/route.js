const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET);

export const POST = async (req, res) => {
  // get items from body
  const items = req.body.items;

  // refactor data to the shape Stripe expects
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  // create Stripe session
  const stripeSession = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http//localhost:3000/success",
    cancel_url: "http//localhost:3000/cancel",
  });

  // return session URL
  return new Response(
    JSON.stringify({
      url: stripeSession.url,
    })
  );
};
