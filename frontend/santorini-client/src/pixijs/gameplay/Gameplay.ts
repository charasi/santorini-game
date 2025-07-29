import type { GridContainer } from "../ifc/ifc.ts";

export class Gameplay {
  private grid: GridContainer[];
  private _currentPlayer: number;
  private phase: string;
  private adjacentTile: number[][] = [
    [2, 6, 7],
    [1, 3, 6, 7, 8],
    [2, 4, 7, 8, 9],
    [3, 5, 8, 9, 10],
    [4, 9, 10],
    [1, 2, 7, 11, 12],
    [1, 2, 3, 6, 8, 11, 12, 13],
    [2, 3, 4, 7, 9, 12, 13, 14],
    [3, 4, 5, 8, 10, 13, 14, 15],
    [4, 5, 9, 14, 15],
    [6, 7, 12, 16, 17],
    [6, 7, 8, 11, 13, 16, 17, 18],
    [7, 8, 9, 12, 14, 17, 18, 19],
    [8, 9, 10, 13, 15, 18, 19, 20],
    [9, 10, 14, 19, 20],
    [11, 12, 17, 21, 22],
    [11, 12, 13, 16, 18, 21, 22, 23],
    [12, 13, 14, 17, 19, 22, 23, 24],
    [13, 14, 15, 18, 20, 23, 24, 25],
    [14, 15, 19, 24, 25],
    [16, 17, 22],
    [16, 17, 18, 21, 23],
    [17, 18, 19, 22, 24],
    [18, 19, 20, 23, 25],
    [19, 20, 24],
  ];

  private players: object[] = [
    { currentPhase: "None", nextPhase: "Move" },
    { currentPhase: "None", nextPhase: "Move" },
  ];

  constructor(grid: GridContainer[]) {
    this.grid = grid;
    this._currentPlayer = 1;
    this.phase = "None";
  }

  get currentPlayer(): number {
    return this._currentPlayer;
  }

  set currentPlayer(value: number) {
    this._currentPlayer = value;
  }
}
