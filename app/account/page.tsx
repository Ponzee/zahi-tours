"use client";

import { useEffect, useState, Suspense } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import ManageSubscriptionButton from "@/components/ManageSubscriptionButton";
import { SITE_URL } from "@/lib/config";

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
    if (!supabase) {
      setLoading(false);
      return;
    }

    const checkUser = async () => {
      if (!supabase) return;
      
      // Check for OAuth callback in URL hash
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      if (hashParams.get('access_token') || hashParams.get('error')) {
        // OAuth callback detected, Supabase will handle it automatically
        // Just wait a moment for the session to be established
        await new Promise(resolve => setTimeout(resolve, 500));
      }

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
      setLoading(false);
    };

    checkUser();

    // Listen for auth state changes (including OAuth callbacks)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user && supabase) {
        // Fetch subscription when user logs in
        supabase
          .from("subscriptions")
          .select("*")
          .eq("user_id", session.user.id)
          .eq("status", "active")
          .single()
          .then(({ data }) => {
            setSubscription(data);
          });
      } else {
        setSubscription(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
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
      // Redirect to homepage after sign-in, unless there's a specific redirect path
      if (redirectPath) {
        router.push(redirectPath);
      } else {
        router.push('/');
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
        options: {
          emailRedirectTo: `${SITE_URL}/account`,
        },
      });

      if (error) throw error;

      alert("Check your email to confirm your account!");
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleOAuthSignIn = async (provider: 'google' | 'facebook') => {
    if (!supabase) return;

    try {
      // Redirect to homepage after OAuth sign-in, unless there's a specific redirect path
      const redirectTo = redirectPath ? `${SITE_URL}${redirectPath}` : `${SITE_URL}/`;

      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo,
        },
      });

      if (error) throw error;
    } catch (error: any) {
      alert(`Error signing in with ${provider}: ${error.message}`);
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
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-[#3d3529]">Loading...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <div className="max-w-md mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <div className="rounded-2xl bg-[#f5f2ed] border border-[#e5ddd4] shadow-sm p-6 md:p-8">
              <h1 className="font-headline text-3xl font-bold tracking-tight mb-8 text-center text-[#1a1612]">
                {isSignIn ? "Sign In" : "Create Account"}
              </h1>

              {/* OAuth Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleOAuthSignIn('google')}
                  className="w-full flex items-center justify-center gap-3 rounded-xl border-2 border-[#e5ddd4] bg-white px-5 py-3 text-sm font-medium text-[#1a1612] hover:bg-[#faf8f5] hover:border-[#c2410c] transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>

                <button
                  onClick={() => handleOAuthSignIn('facebook')}
                  className="w-full flex items-center justify-center gap-3 rounded-xl border-2 border-[#e5ddd4] bg-white px-5 py-3 text-sm font-medium text-[#1a1612] hover:bg-[#faf8f5] hover:border-[#c2410c] transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Continue with Facebook
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e5ddd4]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-[#f5f2ed] text-[#3d3529]">Or continue with email</span>
                </div>
              </div>

              <form
                onSubmit={isSignIn ? handleSignIn : handleSignUp}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#1a1612]">
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
                    className="w-full rounded-xl border border-[#e5ddd4] bg-white px-4 py-3 text-sm text-[#1a1612] focus:outline-none focus:ring-2 focus:ring-[#c2410c] focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2 text-[#1a1612]">
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
                    className="w-full rounded-xl border border-[#e5ddd4] bg-white px-4 py-3 text-sm text-[#1a1612] focus:outline-none focus:ring-2 focus:ring-[#c2410c] focus:border-transparent transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#c2410c] text-white px-5 py-3 text-sm font-medium hover:bg-[#9a3412] transition-colors shadow-sm mt-6"
                >
                  {isSignIn ? "Sign In" : "Sign Up"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsSignIn(!isSignIn)}
                  className="text-sm text-[#3d3529] hover:text-[#c2410c] transition-colors"
                >
                  {isSignIn
                    ? "Don't have an account? Sign up"
                    : "Already have an account? Sign in"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 flex-1">
        <h1 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-[#1a1612]">
          Account
        </h1>

        <div className="space-y-8">
          {/* User Info */}
          <div className="rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#1a1612]">Account Information</h2>
            <div className="space-y-2">
              <div>
                <span className="text-sm text-[#3d3529]">Email:</span>
                <span className="ml-2 text-sm font-medium text-[#1a1612]">{user.email}</span>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="mt-4 rounded-full border-2 border-[#e5ddd4] px-4 py-2 text-sm font-medium text-[#1a1612] bg-white hover:bg-[#faf8f5] hover:border-[#c2410c] transition-colors"
            >
              Sign Out
            </button>
          </div>

          {/* Subscription Status */}
          <div className="rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#1a1612]">Subscription</h2>
            {subscription ? (
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-[#3d3529]">Status:</span>
                  <span className="ml-2 text-sm font-medium capitalize text-[#1a1612]">
                    {subscription.status}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-[#3d3529]">Tier:</span>
                  <span className="ml-2 text-sm font-medium capitalize text-[#1a1612]">
                    {subscription.tier}
                  </span>
                </div>
                {subscription.current_period_end && (
                  <div>
                    <span className="text-sm text-[#3d3529]">Renews:</span>
                    <span className="ml-2 text-sm font-medium text-[#1a1612]">
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
                <p className="text-sm text-[#3d3529]">
                  You don't have an active subscription.
                </p>
                <a
                  href="/support"
                  className="inline-block rounded-full bg-[#c2410c] text-white px-5 py-3 text-sm font-medium hover:bg-[#9a3412] transition-colors"
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
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <div className="text-[#3d3529]">Loading...</div>
      </div>
    }>
      <AccountPageContent />
    </Suspense>
  );
}
