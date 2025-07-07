// src/app/services/member-stats.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MemberStats } from '../models/member-stats';

@Injectable({
  providedIn: 'root'
})
export class MemberStatsService {
  private baseUrl = '/api/members/stats';

  constructor(private http: HttpClient) {}

  // Fetch all members with their stats
  // getAllMemberStats(): Observable<MemberStats[]> {
  //   return this.http.get<MemberStats[]>(this.baseUrl);
  // }

  // Fetch stats for a specific member
  // getMemberStatsById(id: string): Observable<MemberStats> {
  //   return this.http.get<MemberStats>(`${this.baseUrl}/${id}`);
  // }
}
