import { Cell } from './../chess/Cell';
import { Colors } from './../chess/Colors';

export enum FigureName {
  FIGURE = 'Фигура',
  BISHOP = 'Слон',
  KING = 'Король',
  KNIGHT = 'Конь',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  PAWN = 'Пешка',
}

export class Figure {
  color: Colors;
  id: number;
  logo: string | null;
  cell: Cell;
  name: FigureName;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureName.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell) {}
}
