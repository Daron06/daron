import { Board } from '../Board';
import { Figure } from '../figures/Figure';
import { Colors } from './Colors';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean;
  id: number;

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x;
    this.board = board;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.available = false;
    this.id = Math.random();
  }

  public moveFigure(cell: Cell): boolean {
    if (cell.figure?.canMove(this)) {
      cell.figure.moveFigure(this);
      this.figure = cell.figure;
      cell.figure = null;
      return true;
    } else {
      cell.figure?.cleanAvailable();
      return false;
    }
  }
}
