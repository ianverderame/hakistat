import { Injectable } from '@angular/core';
import { SupabaseService } from '../core/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

constructor(private supabaseService: SupabaseService) {}

async getLeaderboard() {
  const { data, error } = await this.supabaseService.client
    .from('leaderboard_view')
    .select('username, total_haki_points, rank')
    .order('total_haki_points', { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

}
