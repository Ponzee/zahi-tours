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

    // Defer auth check to avoid blocking initial render
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

    // Set up auth state listener immediately (non-blocking)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Use requestIdleCallback or setTimeout to defer initial auth check
    let idleCallbackId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    if (typeof window !== "undefined" && window.requestIdleCallback) {
      idleCallbackId = window.requestIdleCallback(checkUser, { timeout: 200 });
    } else {
      timeoutId = setTimeout(checkUser, 0);
    }

    return () => {
      subscription.unsubscribe();
      if (idleCallbackId !== null && typeof window !== "undefined" && window.cancelIdleCallback) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
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
          className="text-sm text-[#1a1612] hover:text-[#c2410c] transition-colors duration-150"
        >
          Sign In
        </a>
        <a
          href="/account?signup=true"
          className="text-sm rounded-full bg-[#c2410c] text-white px-4 py-2 hover:bg-[#9a3412] transition-colors duration-150"
        >
          Sign Up
        </a>
      </div>
    );
  }

  if (user) {
    return (
      <div className="relative group">
        <button className="rounded-full bg-[#c2410c] text-white text-sm px-4 py-2 hover:bg-[#9a3412] transition-colors whitespace-nowrap font-medium">
          {user.email?.split("@")[0]}
        </button>
        <div className="absolute right-0 mt-2 w-56 bg-white border border-[#e5ddd4] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity transition-visibility duration-150 z-50 overflow-hidden">
          <div className="py-2">
            <a
              href="/account"
              className="block px-5 py-3 text-sm font-medium text-[#1a1612] hover:bg-[#faf8f5] transition-colors duration-150 border-b border-[#f5f2ed]"
            >
              Account
            </a>
            <a
              href="/member"
              className="block px-5 py-3 text-sm font-medium text-[#1a1612] hover:bg-[#faf8f5] transition-colors duration-150 border-b border-[#f5f2ed]"
            >
              Member Hub
            </a>
            <button
              onClick={handleSignOut}
              className="w-full text-left px-5 py-3 text-sm font-medium text-[#c2410c] hover:bg-[#faf8f5] transition-colors duration-150"
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
        className="text-sm text-[#1a1612] hover:text-[#c2410c] transition-colors duration-150"
      >
        Sign In
      </a>
      <a
        href="/account?signup=true"
          className="text-sm rounded-full bg-[#c2410c] text-white px-4 py-2 hover:bg-[#9a3412] transition-colors duration-150"
      >
        Sign Up
      </a>
    </div>
  );
}

