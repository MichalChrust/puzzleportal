import {Component, OnInit} from '@angular/core';
import {RankingService} from '../../../services/ranking-service';
import {User} from '../../../models/usermodels/User';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  users: User[];

  constructor(private rankingService: RankingService) {
  }

  ngOnInit() {
    // @properLogic
    console.log('@@@@@this.rankingService.getTopTen() method:');
    this.rankingService.getTopTen().subscribe((users) => {
      this.users = users;
      }
    );
    console.log('@@@@@ Outside method');
    console.log(this.users);
  }
}
