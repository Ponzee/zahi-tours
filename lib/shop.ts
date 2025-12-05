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

    // First, test if we can query ANY products (for debugging)
    const { data: allData, error: allError } = await supabase
      .from("shop_products")
      .select("*")
      .limit(10);

    console.log("DEBUG: All products query result:", {
      count: allData?.length || 0,
      error: allError,
      sample: allData?.[0] ? { id: allData[0].id, name: allData[0].name, status: allData[0].status } : null
    });

    // Now filter by active status
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
    } else {
      console.warn("No active products found. All products statuses:", allData?.map(p => ({ id: p.id, status: p.status })));
    }
    
    return data ?? [];
  } catch (err: any) {
    console.error("Exception in fetchActiveProducts:", err);
    console.error("Exception stack:", err?.stack);
    return [];
  }
}
