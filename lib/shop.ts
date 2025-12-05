import "server-only";

import { createServerClient } from "./supabaseClient";

export interface ShopProduct {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  price_cents: number;
  currency: string;
  image_url: string | null;
  status: string;
  stripe_price_id: string | null;
  image_urls?: string[] | null;
}

export async function fetchActiveProducts(): Promise<ShopProduct[]> {
  try {
    const supabase = createServerClient();

    // First, try to select all columns (Supabase will ignore missing ones)
    const { data, error } = await supabase
      .from("shop_products")
      .select("*")
      .eq("status", "active")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error loading shop products:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return [];
    }

    console.log(`Loaded ${data?.length || 0} active products from database`);
    if (data && data.length > 0) {
      console.log("Sample product:", JSON.stringify(data[0], null, 2));
    }
    
    return data ?? [];
  } catch (err: any) {
    console.error("Exception in fetchActiveProducts:", err);
    console.error("Exception stack:", err?.stack);
    return [];
  }
}
