import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Member } from '../models/member';
import { MemberStats } from '../models/member-stats';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = '/api/members'; // Adjust base URL when back end is created

  constructor(private http: HttpClient) {}

  // Get all members
  // getAllMembers(): Observable<Member[]> {
  //   return this.http.get<Member[]>(this.baseUrl);
  // }

  // Get a single member by ID
  // getMemberById(id: string): Observable<Member> {
  //   return this.http.get<Member>(`${this.baseUrl}/${id}`);
  // }

  // Get member stats (including charts)
  // getMemberStats(id: string): Observable<MemberStats> {
  //   return this.http.get<MemberStats>(`${this.baseUrl}/${id}/stats`);
  // }

  // Optional: Search or filter members
  // searchMembers(query: string): Observable<Member[]> {
  //   return this.http.get<Member[]>(`${this.baseUrl}?search=${query}`);
  // }
}
