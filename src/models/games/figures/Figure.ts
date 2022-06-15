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

  public canMove(target: Cell): boolean {
    return target.available;
  }

  public moveFigure(cell: Cell) {
    this.cell = cell;
  }

  public showAvailable(): void {}

  public cleanAvailable(): void {
    this.cell.board.cells.map((el) => el.map((item) => (item.available = false)));
  }

  public checkmate(cell: Cell) {}
}
