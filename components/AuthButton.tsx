"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // If Supabase is not configured, immediately show buttons
    if (!supabase) {
      setLoading(false);
      return;
    }

    const checkUser = async () => {
      if (!supabase) return;
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error('Error checking user:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    if (!supabase) return;

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <span className="text-sm text-[#3d3529]">Loading...</span>
    );
  }

  // If Supabase is not configured, show sign in/sign up buttons anyway
  if (!supabase) {
    return (
      <div className="flex items-center gap-3">
        <a
          href="/account"
          className="text-sm text-[#1a1612] hover:text-[#c2410c] transition-colors"
        >
          Sign In
        </a>
        <a
          href="/account?signup=true"
          className="text-sm rounded-full bg-[#c2410c] text-white px-4 py-2 hover:bg-[#9a3412] transition-colors"
        >
          Sign Up
        </a>
      </div>
    );
  }

  if (user) {
    return (
      <div className="relative group">
        <button className="text-sm text-[#1a1612] hover:text-[#c2410c] transition-colors">
          {user.email?.split("@")[0]}
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e5ddd4] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
          <div className="py-2">
            <a
              href="/account"
              className="block px-4 py-2 text-sm text-[#1a1612] hover:bg-[#faf8f5] transition-colors"
            >
              Account
            </a>
            <a
              href="/member"
              className="block px-4 py-2 text-sm text-[#1a1612] hover:bg-[#faf8f5] transition-colors"
            >
              Member Hub
            </a>
            <button
              onClick={handleSignOut}
              className="w-full text-left px-4 py-2 text-sm text-[#1a1612] hover:bg-[#faf8f5] transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Not logged in - show both Sign In and Sign Up
  return (
    <div className="flex items-center gap-3">
      <a
        href="/account"
        className="text-sm text-[#1a1612] hover:text-[#c2410c] transition-colors"
      >
        Sign In
      </a>
      <a
        href="/account?signup=true"
        className="text-sm rounded-full bg-[#c2410c] text-white px-4 py-2 hover:bg-[#9a3412] transition-colors"
      >
        Sign Up
      </a>
    </div>
  );
}

