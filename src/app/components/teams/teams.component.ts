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
            { Team: 'FCK', Player_1: 'LastCall', Player_2: 'Shouli', Player_3: 'nox' }, 
            { Team: 'The Brothers Prophecy', Player_1: 'bradyvision', Player_2: 'dirtyverdy', Player_3: 'prophecy' },
            { Team: 'Greasy Boyz', Player_1: 'zboy5z5', Player_2: 'Jack', Player_3: 'NickatNi7e' },
            { Team: '100L x hakistat.com', Player_1: 'Eidolon', Player_2: 'ntRoze', Player_3: 'spaceman' },
            { Team: 'Nessies For You', Player_1: 'Rakki', Player_2: 'xipugz', Player_3: 'VIPER'},
            { Team: 'ByFire', Player_1: 'Kaido', Player_2: 'Seeby', Player_3: 'Kahzine'},
            { Team: 'Ruh Roh', Player_1: 'TheHeuman', Player_2: 'Stinkerson', Player_3: 'Hova'},
            { Team: 'LF1', Player_1: 'AN7', Player_2: 'Uorax', Player_3: 'blank'},
            { Team: 'Lost in the Loot', Player_1: 'Nokk', Player_2: 'Flaco', Player_3: 'PGK'},
            { Team: 'Bee Happy', Player_1: 'Kevin', Player_2: 'katelyn0068', Player_3: 'SERAFISK'},
            { Team: 'Old Broke Infamous', Player_1: 'Fishiness', Player_2: 'xThinkSo', Player_3: 'ebok'},
            { Team: 'Spooky Buttcheeks', Player_1: 'Lau', Player_2: 'mysteryz', Player_3: '0ptical'},
            { Team: 'Los Pollos Hermanos', Player_1: '77', Player_2: 'ZorraAssassin', Player_3: 'cbits'},
            { Team: 'Windows 95', Player_1: 'Dusterbia', Player_2: 'm2', Player_3: 'Cloudz'},
            { Team: 'Smirky Katz', Player_1: 'Truth', Player_2: 'Haki', Player_3: 'AiymAPotato'},
            { Team: 'Silly Little Apes', Player_1: 'dasledgehammer', Player_2: 'Bvtterr', Player_3: 'mer' },
            { Team: 'Team Hibiscus', Player_1: 'balynce', Player_2: 'imsh1ny', Player_3: 'Thunder' },
            { Team: 'Loved ones', Player_1: 'Pod of War', Player_2: 'Needasoda', Player_3: 'WinterDeadEye23'},
            { Team: 'Shitter', Player_1: 'Toasty', Player_2: '', Player_3: '' },
            
    ]
  }
}
