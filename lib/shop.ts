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
  image_urls?: string[] | null;
}

export async function fetchActiveProducts(): Promise<ShopProduct[]> {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("shop_products")
    .select("id, slug, name, description, price_cents, currency, image_url, status, image_urls")
    .eq("status", "active")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error loading shop products", error);
    return [];
  }

  return data ?? [];
}
