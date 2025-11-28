"use client";

import { useEffect, useState, Suspense } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import ManageSubscriptionButton from "@/components/ManageSubscriptionButton";

function AccountPageContent() {
  const [user, setUser] = useState<any>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect");
  const signupParam = searchParams.get("signup");
  const [isSignIn, setIsSignIn] = useState(!signupParam);

  useEffect(() => {
    const checkUser = async () => {
      if (supabase) {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
        
        if (user) {
          // Fetch subscription status
          const { data } = await supabase
            .from("subscriptions")
            .select("*")
            .eq("user_id", user.id)
            .eq("status", "active")
            .single();
          
          setSubscription(data);
        }
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setUser(data.user);
      if (redirectPath) {
        router.push(redirectPath);
      } else {
        router.refresh();
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      alert("Check your email to confirm your account!");
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setUser(null);
    setSubscription(null);
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-neutral-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-neutral-50 text-neutral-900">
        <div className="max-w-md mx-auto px-4 py-12 md:py-16">
          <h1 className="text-3xl font-bold tracking-tight mb-8 text-center">
            {isSignIn ? "Sign In" : "Create Account"}
          </h1>

          <form
            onSubmit={isSignIn ? handleSignIn : handleSignUp}
            className="space-y-4"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete={isSignIn ? "current-password" : "new-password"}
                className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-sm text-neutral-600 hover:text-neutral-900"
            >
              {isSignIn
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          Account
        </h1>

        <div className="space-y-8">
          {/* User Info */}
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Account Information</h2>
            <div className="space-y-2">
              <div>
                <span className="text-sm text-neutral-600">Email:</span>
                <span className="ml-2 text-sm font-medium">{user.email}</span>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="mt-4 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-50"
            >
              Sign Out
            </button>
          </div>

          {/* Subscription Status */}
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Subscription</h2>
            {subscription ? (
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-neutral-600">Status:</span>
                  <span className="ml-2 text-sm font-medium capitalize">
                    {subscription.status}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-neutral-600">Tier:</span>
                  <span className="ml-2 text-sm font-medium capitalize">
                    {subscription.tier}
                  </span>
                </div>
                {subscription.current_period_end && (
                  <div>
                    <span className="text-sm text-neutral-600">Renews:</span>
                    <span className="ml-2 text-sm font-medium">
                      {new Date(subscription.current_period_end).toLocaleDateString()}
                    </span>
                  </div>
                )}
                <div className="pt-4">
                  <ManageSubscriptionButton userId={user.id} />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-neutral-600">
                  You don't have an active subscription.
                </p>
                <a
                  href="/support"
                  className="inline-block rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800"
                >
                  Become a Supporter
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-neutral-600">Loading...</div>
      </div>
    }>
      <AccountPageContent />
    </Suspense>
  );
}

