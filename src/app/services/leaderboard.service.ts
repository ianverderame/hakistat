import { Injectable } from '@angular/core';
import { SupabaseService } from '../core/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

constructor(private supabaseService: SupabaseService) {}

async getLeaderboard() {
  const { data, error } = await this.supabaseService.client
    .from('profiles')
    .select(`
      username,
      total_haki_points,
      user_rank_cache (
        rank_id,
        ranks (name)
      )
    `)
    .order('total_haki_points', { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

}
