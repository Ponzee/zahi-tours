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

    const { data, error } = await supabase
      .from("shop_products")
      .select("id, slug, name, description, price_cents, currency, image_url, status, stripe_price_id, image_urls")
      .eq("status", "active")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error loading shop products:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return [];
    }

    console.log(`Loaded ${data?.length || 0} active products from database`);
    return data ?? [];
  } catch (err: any) {
    console.error("Exception in fetchActiveProducts:", err);
    return [];
  }
}
