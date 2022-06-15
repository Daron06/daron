import { Cell } from '../chess/Cell';
import { Colors } from '../chess/Colors';
import { Figure, FigureName } from './Figure';
import blackKing from '../../../assets/chess-img/black-king.png';
import whiteKing from '../../../assets/chess-img/white-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = this.color === Colors.WHITE ? whiteKing : blackKing;
    this.name = FigureName.KING;
  }

  public showAvailable(): void {
    let thisBoardCells = this.cell?.board?.cells;
    super.showAvailable();

    // по прямым
    if (
      this.cell.x + 1 <= 7 &&
      thisBoardCells[this.cell.x + 1][this.cell.y]?.figure?.color !== this.cell?.figure?.color
    ) {
      thisBoardCells[this.cell.x + 1][this.cell.y].available = true;
    }
    if (
      this.cell.x - 1 >= 0 &&
      thisBoardCells[this.cell.x - 1][this.cell.y]?.figure?.color !== this.cell?.figure?.color
    ) {
      thisBoardCells[this.cell.x - 1][this.cell.y].available = true;
    }

    if (
      this.cell.y + 1 <= 7 &&
      thisBoardCells[this.cell.x][this.cell.y + 1]?.figure?.color !== this.cell?.figure?.color
    ) {
      thisBoardCells[this.cell.x][this.cell.y + 1].available = true;
    }
    if (
      this.cell.y - 1 >= 0 &&
      thisBoardCells[this.cell.x][this.cell.y - 1]?.figure?.color !== this.cell?.figure?.color
    ) {
      thisBoardCells[this.cell.x][this.cell.y - 1].available = true;
    }

    // по касательной
    if (
      this.cell.x + 1 <= 7 &&
      this.cell.y + 1 <= 7 &&
      thisBoardCells[this.cell.x + 1][this.cell.y + 1]?.figure?.color !== this.cell?.figure?.color
    ) {
      thisBoardCells[this.cell.x + 1][this.cell.y + 1].available = true;
    }
    if (
      this.cell.x - 1 >= 0 &&
      this.cell.y + 1 <= 7 &&
      thisBoardCells[this.cell.x - 1][this.cell.y + 1]?.figure?.color !== this.cell?.figure?.color
    ) {
      thisBoardCells[this.cell.x - 1][this.cell.y + 1].available = true;
    }

    if (
      this.cell.x + 1 <= 7 &&
      this.cell.y - 1 >= 0 &&
      thisBoardCells[this.cell.x + 1][this.cell.y - 1]?.figure?.color !== this.cell?.figure?.color
    ) {
      thisBoardCells[this.cell.x + 1][this.cell.y - 1].available = true;
    }
    if (
      this.cell.x - 1 >= 0 &&
      this.cell.y - 1 >= 0 &&
      thisBoardCells[this.cell.x - 1][this.cell.y - 1]?.figure?.color !== this.cell?.figure?.color
    ) {
      thisBoardCells[this.cell.x - 1][this.cell.y - 1].available = true;
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
