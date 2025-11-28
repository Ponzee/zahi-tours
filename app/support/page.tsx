"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const tiers = [
  {
    id: "tier1",
    name: "Supporter",
    price: "$5",
    description: "Help Zahi keep creating free educational content",
    perks: [
      "Access to exclusive behind-the-scenes videos",
      "Early access to new tour content",
      "Supporter badge on community posts",
    ],
  },
  {
    id: "tier2",
    name: "Insider",
    price: "$15",
    description: "Deeper access to Zahi's work and community",
    perks: [
      "Everything in Supporter",
      "Monthly Q&A sessions",
      "Downloadable PDF guides",
      "Priority support for tour bookings",
    ],
  },
  {
    id: "tier3",
    name: "VIP",
    price: "$50",
    description: "The ultimate Holy Land experience",
    perks: [
      "Everything in Insider",
      "Live virtual tours with Zahi",
      "Personalized itinerary consultation",
      "Exclusive VIP-only content library",
    ],
  },
];

export default function SupportPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      if (supabase) {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  const handleBecomeSupporter = async (tierId: string) => {
    if (!user) {
      router.push("/account?redirect=/support");
      return;
    }

    try {
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: tierId, userId: user.id }),
      });

      const { url, error } = await response.json();

      if (error) {
        alert(`Error: ${error}`);
        return;
      }

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Support Zahi's Work
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Help Zahi keep documenting the Holy Land with independent, ad-light, educational videos. 
            Choose a membership tier that works for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold tracking-tight mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold mb-2">{tier.price}<span className="text-base font-normal text-neutral-600">/month</span></div>
                <p className="text-sm text-neutral-600 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-6">
                  {tier.perks.map((perk, idx) => (
                    <li key={idx} className="text-sm text-neutral-700 flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleBecomeSupporter(tier.id)}
                className="w-full rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Become a {tier.name}
              </button>
            </div>
          ))}
        </div>

        {loading && (
          <div className="text-center mt-8 text-neutral-600">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

