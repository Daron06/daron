import { Cell } from '../chess/Cell';
import { Colors } from '../chess/Colors';
import { Figure, FigureName } from './Figure';
import blackPawn from '../../../assets/chess-img/black-pawn.png';
import whitePawn from '../../../assets/chess-img/white-pawn.png';

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = this.color === Colors.WHITE ? whitePawn : blackPawn;
    this.name = FigureName.PAWN;
  }

  public showAvailable(): void {
    let thisBoardCells = this.cell?.board?.cells;
    super.showAvailable();

    //black pawn
    if (this.cell.figure?.color === Colors.BLACK) {
      //Если в двух впереди стоящих клетках нет фигур, и это первый ход, тогда можно ходить на две клетки вперёд
      if (
        this.cell.x === 6 &&
        thisBoardCells[this.cell?.x - 1][this.cell?.y]?.figure === null &&
        thisBoardCells[this.cell?.x - 2][this.cell?.y]?.figure === null
      ) {
        thisBoardCells[4][this.cell.y].available = true;
      }
      //  Если доска не закончилась, и впереди нет фигуры, тогда шаг вперёд
      if (this.cell?.x !== 0 && thisBoardCells[this.cell?.x - 1][this.cell?.y]?.figure === null) {
        thisBoardCells[this.cell.x - 1][this.cell.y].available = true;
      }
      // Если доска не закончилась, и впереди слева есть фигура, тогда можно её съесть
      if (
        this.cell?.x !== 0 &&
        thisBoardCells[this.cell?.x - 1][this.cell?.y - 1]?.figure?.color === Colors.WHITE
      ) {
        thisBoardCells[this.cell.x - 1][this.cell.y - 1].available = true;
      }
      // Если доска не закончилась, и впереди справа есть фигура, тогда можно её съесть
      if (
        this.cell?.x !== 0 &&
        this.cell?.y !== 7 &&
        thisBoardCells[this.cell?.x - 1][this.cell?.y + 1]?.figure?.color === Colors.WHITE
      ) {
        thisBoardCells[this.cell.x - 1][this.cell.y + 1].available = true;
      }
    }

    //white pawn
    if (this.cell.figure?.color === Colors.WHITE) {
      //Если в двух впереди стоящих клетках нет фигур, и это первый ход, тогда можно ходить на две клетки вперёд
      if (
        this.cell.x === 1 &&
        thisBoardCells[this.cell?.x + 1][this.cell?.y]?.figure === null &&
        thisBoardCells[this.cell?.x + 2][this.cell?.y]?.figure === null
      ) {
        thisBoardCells[3][this.cell.y].available = true;
      }

      //  Если доска не закончилась, и впереди нет фигуры, тогда шаг вперёд
      if (this.cell?.x !== 7 && thisBoardCells[this.cell?.x + 1][this.cell?.y]?.figure === null) {
        thisBoardCells[this.cell.x + 1][this.cell.y].available = true;
      }

      // Если доска не закончилась, и впереди справа есть фигура, тогда можно её съесть
      if (
        this.cell?.x !== 7 &&
        thisBoardCells[this.cell?.x + 1][this.cell?.y + 1]?.figure?.color === Colors.BLACK
      ) {
        thisBoardCells[this.cell.x + 1][this.cell.y + 1].available = true;
      }

      //Если доска не закончилась, и впереди слева есть фигура, тогда можно её съесть
      if (
        this.cell?.x !== 7 &&
        this.cell?.y !== 0 &&
        thisBoardCells[this.cell?.x + 1][this.cell?.y - 1]?.figure?.color === Colors.BLACK
      ) {
        thisBoardCells[this.cell.x + 1][this.cell.y - 1].available = true;
      }
    }
  }

  public canMove(target: Cell): boolean {
    this.showAvailable();
    return super.canMove(target);
  }

  public cleanAvailable(): void {
    super.cleanAvailable();
  }
}
