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
      { noob: 'spaceman', score: 145, rank: 'Pred', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'proph', score: 144, rank: 'Masters', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'zboy', score: 118, rank: 'Masters', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'jakoby', score: 103, rank: 'Masters', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'kaido', score: 92, rank: 'Diamond', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'brode', score: 73, rank: 'Diamond', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'haki', score: 65, rank: 'Diamond', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'dirtyverdy', score: 43, rank: 'Diamond', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'nedlock', score: 43, rank: 'Platinum', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'kenny', score: 42, rank: 'Platinum', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'kevin', score: 40, rank: 'Platinum', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'oalios', score: 35, rank: 'Platinum', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'shouli', score: 31, rank: 'Platinum', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'bradyvision', score: 30, rank: 'Gold', elbowCount: 2, kneeCount: 2, feetCount: 1.75 },
      { noob: 'lastcall', score: 30, rank: 'Gold', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'nox', score: 27, rank: 'Gold', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'winter', score: 23, rank: 'Gold', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'rakki', score: 20, rank: 'Gold', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'silly salmon', score: 20, rank: 'Silver', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'nemutoe', score: 17, rank: 'Silver', elbowCount: 1.5, kneeCount: 2, feetCount: 2 },
      { noob: 'ntroze', score: 17, rank: 'Silver', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'm2', score: 15, rank: 'Silver', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'heuman', score: 13, rank: 'Rookie', elbowCount: 2, kneeCount: 1.5, feetCount: 2 },
      { noob: 'pgk', score: 9, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'lumdum', score: 5, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'hova', score: 2, rank: 'Rookie', elbowCount: 2, kneeCount: 2, feetCount: 2 },
      { noob: 'toasty', score: -240, rank: 'Toasty', elbowCount: 2, kneeCount: 2, feetCount: 2 }
    ];
  }
}
