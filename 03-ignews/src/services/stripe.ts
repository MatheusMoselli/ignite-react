import Stripe from "stripe";
import ignews from "../../package.json";

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "IgNews",
    version: ignews.version,
  },
});
