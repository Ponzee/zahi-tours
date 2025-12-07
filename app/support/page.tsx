"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import AuthButton from "@/components/AuthButton";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      {/* Header */}
      <header className="border-b border-[#e5ddd4] bg-white/90 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Go to homepage"
          >
            <Image
              src="/icon.png"
              alt="Zahi Shaked Logo"
              width={40}
              height={40}
              className="rounded-xl pointer-events-none"
            />
            <span className="font-semibold tracking-tight text-sm sm:text-base text-[#1a1612] pointer-events-none">
              The Holy Land – By Zahi Shaked
            </span>
          </Link>
          <nav className="hidden md:flex gap-4 lg:gap-6 text-sm items-center flex-1 justify-center">
            <Link href="/#tours" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Watch</Link>
            <Link href="/support" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Support</Link>
            <Link href="/shop" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Shop</Link>
            <Link href="/#about" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">About</Link>
            <Link href="/#contact" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <AuthButton />
            <a
              href="/#contact"
              className="rounded-full bg-[#c2410c] text-white text-sm px-4 py-2 hover:bg-[#9a3412] whitespace-nowrap transition-colors"
            >
              Request a Private Tour
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg px-3 py-2 text-sm font-medium text-[#1a1612] hover:bg-[#f5f2ed] transition-colors"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e5ddd4] bg-white">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
              <Link href="/#tours" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Watch</Link>
              <Link href="/support" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Support</Link>
              <Link href="/shop" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
              <Link href="/#about" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/#contact" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <div className="pt-2 border-t border-[#e5ddd4]">
                <AuthButton />
              </div>
              <Link href="/#contact" className="mt-2 py-2 text-sm font-medium text-center rounded-full bg-[#c2410c] text-white hover:bg-[#9a3412] transition-colors" onClick={() => setMobileMenuOpen(false)}>Request a Private Tour</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1a1612]">
              Support Zahi's Work
            </h1>
            <p className="text-base md:text-lg text-[#3d3529] max-w-2xl mx-auto leading-relaxed">
              Help Zahi keep documenting the Holy Land with independent, ad-light, educational videos. 
              Choose a membership tier that works for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm hover:shadow-md transition-all p-6 md:p-8 flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-[#1a1612]">{tier.name}</h3>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-[#1a1612]">
                    {tier.price}
                    <span className="text-base md:text-lg font-normal text-[#3d3529]">/month</span>
                  </div>
                  <p className="text-sm md:text-base text-[#3d3529] mb-6 leading-relaxed">{tier.description}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.perks.map((perk, idx) => (
                      <li key={idx} className="text-sm md:text-base text-[#3d3529] flex items-start leading-relaxed">
                        <span className="text-[#c2410c] mr-2 font-bold">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleBecomeSupporter(tier.id)}
                  className="w-full rounded-full bg-[#c2410c] text-white px-5 py-3 text-sm font-medium hover:bg-[#9a3412] transition-colors mt-auto"
                >
                  Become a {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
