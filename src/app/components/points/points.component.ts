import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  pointsData: {
    noob: string;
    score: number;
    rank: string;
    elbowCount: number;
    kneeCount: number;
    feetCount: number;
  }[] = [];

  ngOnInit(): void {
    this.pointsData = [
  { noob: 'proph', score: 260, rank: 'Pred', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'spaceman', score: 174, rank: 'Masters', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'jakoby', score: 117, rank: 'Masters', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'zboy', score: 116, rank: 'Masters', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'kaido', score: 109, rank: 'Diamond', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'dirtyverdy', score: 102, rank: 'Diamond', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'oalios', score: 102, rank: 'Diamond', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'haki', score: 75, rank: 'Diamond', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'brode', score: 75, rank: 'Platinum', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'nedlock', score: 64, rank: 'Platinum', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'kenny', score: 58, rank: 'Platinum', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'm2', score: 57, rank: 'Platinum', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'kien', score: 50, rank: 'Platinum', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'seeby', score: 50, rank: 'Gold', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'bradyvision', score: 48, rank: 'Gold', elbowCount: 2, kneeCount: 2, feetCount: 1.75 },
  { noob: 'kevin', score: 46, rank: 'Gold', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'shouli', score: 41, rank: 'Gold', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'ntroze', score: 37, rank: 'Gold', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'lastcall', score: 35, rank: 'Silver', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'heuman', score: 33, rank: 'Silver', elbowCount: 2, kneeCount: 1.5, feetCount: 2 },
  { noob: 'nox', score: 32, rank: 'Silver', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'lumdum', score: 30, rank: 'Silver', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'silly salmon', score: 30, rank: 'Bronze', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'nemutoe', score: 27, rank: 'Bronze', elbowCount: 1.5, kneeCount: 2, feetCount: 2 },
  { noob: 'an7', score: 26, rank: 'Bronze', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'bvtterr', score: 25, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'stink', score: 25, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'aero', score: 20, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'pgk', score: 12, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'nick', score: 11, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'fairest one', score: 10, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'hova', score: 10, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'opnate', score: 7, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'ltto', score: 5, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'gav', score: 3, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'envyxskillet', score: 1, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'winter', score: -6, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'rakki', score: -300, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
  { noob: 'toasty', score: -565, rank: 'Toasty', elbowCount: 2, kneeCount: 2, feetCount: 2 },
];

  }
}
