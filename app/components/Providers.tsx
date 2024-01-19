"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {

  const stripestring = process.env.NEXT_PUBLIC_STRIPE_KEY as string;

  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripestring}
      successUrl="http://keen-seahorse-68531d.netlify.app/stripe/success"
      cancelUrl="http://keen-seahorse-68531d.netlify.app/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}