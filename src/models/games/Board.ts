import { Bishop } from './figures/Bishop';
import { Rook } from './figures/Rook';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Pawn } from './figures/Pawn';
import { Colors } from './chess/Colors';
import { Cell } from './chess/Cell';
import { Queen } from './figures/Queen';

export class Board {
  cells: Cell[][] = [];

  public initCell() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          if (i === 1) {
            row.push(new Cell(this, i, j, Colors.BLACK, null));
          } else {
            row.push(new Cell(this, i, j, Colors.BLACK, null)); // чёрные
          }
        } else {
          row.push(new Cell(this, i, j, Colors.WHITE, null)); // белые
        }
      }
      this.cells.push(row);
    }
  }

  public getCells(x: number, y: number) {
    return this.cells[y][x];
  }

  private addPawn() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.WHITE, this.getCells(i, 1));
      new Pawn(Colors.BLACK, this.getCells(i, 6));
    }
  }

  private addQueen() {
    new Queen(Colors.WHITE, this.getCells(3, 0));
    new Queen(Colors.BLACK, this.getCells(3, 7));
  }

  private addKing() {
    new King(Colors.WHITE, this.getCells(4, 0));
    new King(Colors.BLACK, this.getCells(4, 7));
  }

  private addKnight() {
    new Knight(Colors.WHITE, this.getCells(1, 0));
    new Knight(Colors.WHITE, this.getCells(6, 0));
    new Knight(Colors.BLACK, this.getCells(1, 7));
    new Knight(Colors.BLACK, this.getCells(6, 7));
  }

  private addRook() {
    new Rook(Colors.WHITE, this.getCells(0, 0));
    new Rook(Colors.WHITE, this.getCells(7, 0));
    new Rook(Colors.BLACK, this.getCells(0, 7));
    new Rook(Colors.BLACK, this.getCells(7, 7));
  }

  private addBishop() {
    new Bishop(Colors.WHITE, this.getCells(2, 0));
    new Bishop(Colors.WHITE, this.getCells(5, 0));
    new Bishop(Colors.BLACK, this.getCells(2, 7));
    new Bishop(Colors.BLACK, this.getCells(5, 7));
  }

  public addFigure() {
    this.addPawn();
    this.addQueen();
    this.addBishop();
    this.addRook();
    this.addKnight();
    this.addKing();
  }
}
