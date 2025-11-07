import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fanart',
  templateUrl: './fanart.component.html',
  styleUrls: ['./fanart.component.css']
})
export class FanartComponent implements OnInit {
fanartCollection: {
  imageUrl: string;
  title?: string;
  artist?: string;
}[] = [];

  ngOnInit(): void {

    this.fanartCollection = [
      { imageUrl: '../../assets/hakistat_heart.jpg', title: 'Hakistat Heart', artist: 'Reese' },
      { imageUrl: '../../assets/visit_hakistat.jpg', title: 'Visit Hakistat', artist: 'Avery'}
    ];

  }

}
