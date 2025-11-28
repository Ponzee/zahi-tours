"use client";

import { useState } from "react";

export default function ManageSubscriptionButton({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/stripe/create-portal-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-50 disabled:opacity-50"
    >
      {loading ? "Loading..." : "Manage Subscription"}
    </button>
  );
}

