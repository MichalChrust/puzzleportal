import {Component, OnInit} from '@angular/core';
import {RankingService} from '../../../services/ranking-service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  topTenList;

  constructor(private rankingService: RankingService) {
  }

  ngOnInit() {
    // @properLogic
    this.topTenList = this.rankingService.getTopTen();
    // mock @LukeHawthorne
    this.topTenList = {
      topTen: [
        {
          position: 1,
          nick: 'Mihix',
          points: 12345
        },
        {
          position: 2,
          nick: 'Prefix',
          points: 12344
        },
        {
          position: 3,
          nick: 'Iksdix',
          points: 12343
        },
        {
          position: 4,
          nick: 'Bellix',
          points: 12342
        },
        {
          position: 5,
          nick: 'Symplix',
          points: 12341
        },
        {
          position: 6,
          nick: 'Kurczik',
          points: 12340
        },
        {
          position: 7,
          nick: 'Szymix',
          points: 12339
        },
        {
          position: 8,
          nick: 'Kekix',
          points: 12338
        },
        {
          position: 9,
          nick: 'Rubix',
          points: 12337
        },
        {
          position: 10,
          nick: 'Gogux',
          points: 12336
        }
      ]
    };
  }
}
