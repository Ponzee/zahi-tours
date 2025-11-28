import { createServerClient } from './supabaseClient';

export interface ActiveSubscription {
  id: string;
  tier: string;
  status: string;
  current_period_end: string;
}

export async function getActiveSubscriptionForUser(
  userId: string
): Promise<ActiveSubscription | null> {
  if (!userId) return null;

  try {
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .gt('current_period_end', new Date().toISOString())
      .single();

    if (error || !data) {
      return null;
    }

    return {
      id: data.id,
      tier: data.tier,
      status: data.status,
      current_period_end: data.current_period_end,
    };
  } catch (error) {
    console.error('Error fetching active subscription:', error);
    return null;
  }
}

