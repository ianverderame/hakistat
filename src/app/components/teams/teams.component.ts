import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teamsData: {
    Team: string;
    Player_1: string;
    Player_2: string;
    Player_3: string;
  }[] = [];
  constructor() { }

  ngOnInit(): void {
    this.teamsData = [
            { Team: 'FCK', Player_1: 'LastCall', Player_2: 'PGK', Player_3: 'Shouli' }, 
            { Team: 'FCKU2', Player_1: 'BradyVision', Player_2: 'Chill Guy Kien', Player_3: 'NickatNi7e' },
            { Team: 'Greasy Boyz', Player_1: 'Zboy5z5', Player_2: 'BrodE', Player_3: 'Jak0by' },
            { Team: 'Nessies For You', Player_1: 'Rakki', Player_2: 'Haki', Player_3: 'Kaezuh' },
            { Team: 'Hakistat.com', Player_1: 'Omnipotene', Player_2: 'Spaceman', Player_3: 'Eidolon' }, 
            { Team: 'EastR', Player_1: 'Nox', Player_2: 'Kevin', Player_3: 'Warsz' },
            { Team: 'Nom :3', Player_1: 'Oalios', Player_2: 'm2', Player_3: 'Nedlock' },
            { Team: 'ByFire', Player_1: 'Kaido', Player_2: 'Seeby', Player_3: 'Lau'},
            { Team: 'Loved ones', Player_1: 'DirtyVerdy', Player_2: 'Roze', Player_3: 'Winter'},
            { Team: 'More Loved ones', Player_1: 'Lumdum', Player_2: 'Silly Salmon', Player_3: 'Nemutoe'},
            { Team: 'Shitter', Player_1: 'Toasty', Player_2: '', Player_3: '' },
    ]
  }
}
