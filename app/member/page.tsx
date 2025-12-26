import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { getActiveSubscriptionForUser } from "@/lib/getActiveSubscriptionForUser";
import ManageSubscriptionButton from "@/components/ManageSubscriptionButton";
import SiteFooter from "@/components/SiteFooter";

async function getServerSideUser() {
  if (!supabase) return null;
  
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export default async function MemberPage() {
  const user = await getServerSideUser();

  if (!user) {
    redirect("/account?redirect=/member");
  }

  const subscription = await getActiveSubscriptionForUser(user.id);

  if (!subscription) {
    redirect("/support?reason=no-subscription");
  }


  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 flex-1">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Welcome, Supporter of The Holy Land
          </h1>
          <p className="text-lg text-neutral-700">
            Thank you for supporting Zahi's work. Here's your exclusive content.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
            Active {subscription.tier.charAt(0).toUpperCase() + subscription.tier.slice(1)} Member
          </div>
        </div>

        <div className="mb-8">
          <ManageSubscriptionButton userId={user.id} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Exclusive Videos */}
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-3">Exclusive Videos</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Behind-the-scenes content and extended tour footage.
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-sm text-neutral-900 hover:text-amber-600 font-medium"
              >
                → Jerusalem Old City Extended Tour
              </a>
              <a
                href="#"
                className="block text-sm text-neutral-900 hover:text-amber-600 font-medium"
              >
                → Galilee Behind the Scenes
              </a>
              <a
                href="#"
                className="block text-sm text-neutral-900 hover:text-amber-600 font-medium"
              >
                → Q&A Session Recording
              </a>
            </div>
          </div>

          {/* Downloadable Guides */}
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-3">Downloadable Guides</h3>
            <p className="text-sm text-neutral-600 mb-4">
              PDF guides and resources for your Holy Land journey.
            </p>
            <div className="space-y-3">
              <a
                href="/member/downloads/jerusalem-itinerary.pdf"
                className="block text-sm text-neutral-900 hover:text-amber-600 font-medium"
              >
                → Jerusalem 3-Day Itinerary
              </a>
              <a
                href="/member/downloads/galilee-guide.pdf"
                className="block text-sm text-neutral-900 hover:text-amber-600 font-medium"
              >
                → Galilee Travel Guide
              </a>
              <a
                href="/member/downloads/bible-sites-map.pdf"
                className="block text-sm text-neutral-900 hover:text-amber-600 font-medium"
              >
                → Bible Sites Map
              </a>
            </div>
          </div>

          {/* Community Access */}
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Connect with other supporters and Zahi.
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-sm text-neutral-900 hover:text-amber-600 font-medium"
              >
                → Supporter Forum
              </a>
              <a
                href="#"
                className="block text-sm text-neutral-900 hover:text-amber-600 font-medium"
              >
                → Monthly Q&A Schedule
              </a>
              <a
                href="#"
                className="block text-sm text-neutral-900 hover:text-amber-600 font-medium"
              >
                → Tour Booking Priority
              </a>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
