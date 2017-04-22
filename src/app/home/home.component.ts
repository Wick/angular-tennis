import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public winner: string;
  public deuce: boolean = false;
  public advantage: string;
  public players: any = {
    p1: {
      name: 'Player 1',
      score: 0
    },
    p2: {
      name: 'Player 2',
      score: 0
    }
  };

  constructor() {}

  public ngOnInit() {
  }

  public reset() {
    this.winner = '';
    this.players.p1.score = 0;
    this.players.p2.score = 0;
    this.deuce = false;
    this.advantage = '';
  }

  public addScore(player: string) {
    if (this.deuce) {
      if (this.advantage) {
        if (this.advantage === player) {
            this.winner = this.players[player].name;
        } else {
          this.advantage = '';
        }
      } else {
        this.advantage = player;
      }
      return;
    }
    switch (this.players[player].score) {
      case 30:
        this.players[player].score += 10;
        this.checkDuece();
        break;
      case 40:
        this.winner = this.players[player].name;
        return;
      default:
        this.players[player].score += 15;
    }
  }

  public checkDuece() {
    if (this.players.p1.score === 40 && this.players.p2.score === 40) {
        this.deuce = true;
    }
  }
}
