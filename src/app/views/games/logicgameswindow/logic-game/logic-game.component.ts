import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logic-game',
  templateUrl: './logic-game.component.html',
  styleUrls: ['./logic-game.component.css']
})
export class LogicGameComponent implements OnInit {
  text;
  keywords;

  constructor() { }

  ngOnInit() {
    const data = history.state.data;
    this.text = data['text'];
    this.keywords = data['keywords'];
  }
}
