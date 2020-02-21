export class RankingUser {
  place: string;
  nick: string;
  points: number;

  constructor(place: string, nick: string, points: number) {
    this.place = place;
    this.nick = nick;
    this.points = points;
  }
}
