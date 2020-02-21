import { Component, OnInit } from '@angular/core';
import {RankingService} from '../../../services/ranking-service';
import {RankingUser} from '../../../models/RankingUser';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  topTenList: Observable<RankingUser>;

  constructor(private rankingService: RankingService) { }

  ngOnInit() {
    this.getTopTen();
  }

  getTopTen() {
    this.topTenList = this.rankingService.getTopTen();
    return this.topTenList;
  }

}
