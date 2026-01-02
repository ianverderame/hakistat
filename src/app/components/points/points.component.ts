import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  constructor(private leaderboardService: LeaderboardService ) {}

  leaderboard: any[] = [];

  async ngOnInit() {
    this.leaderboard = await this.leaderboardService.getLeaderboard();
  }
  
}
