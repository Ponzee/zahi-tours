"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";

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
        router.push(url);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col overflow-hidden">

      {/* Main Content */}
      <main id="main-content" className="flex-1 overflow-hidden flex flex-col">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 flex-1 min-h-0 overflow-y-auto">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 text-[#1a1612]">
              Support Zahi's Work
            </h1>
            <p className="text-sm md:text-base text-[#3d3529] max-w-2xl mx-auto leading-relaxed">
              Help Zahi keep documenting the Holy Land with independent, ad-light, educational videos. 
              Choose a membership tier that works for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm hover:shadow-md transition-all p-4 md:p-6 flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1 text-[#1a1612]">{tier.name}</h3>
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-[#1a1612]">
                    {tier.price}
                    <span className="text-sm md:text-base font-normal text-[#3d3529]">/month</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#3d3529] mb-4 leading-relaxed">{tier.description}</p>
                  <ul className="space-y-2 mb-4">
                    {tier.perks.map((perk, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-[#3d3529] flex items-start leading-relaxed">
                        <span className="text-[#c2410c] mr-2 font-bold">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleBecomeSupporter(tier.id)}
                  className="w-full rounded-full bg-[#c2410c] text-white px-4 py-2 text-xs font-medium hover:bg-[#9a3412] transition-colors mt-auto"
                >
                  Become a {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <SiteFooter />
      </main>
    </div>
  );
}
