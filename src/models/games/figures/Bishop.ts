import { Cell } from '../chess/Cell';
import { Colors } from '../chess/Colors';
import { Figure, FigureName } from './Figure';
import blackBishop from '../../../assets/chess-img/black-bishop.png';
import whiteBishop from '../../../assets/chess-img/white-bishop.png';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = this.color === Colors.WHITE ? whiteBishop : blackBishop;
    this.name = FigureName.BISHOP;
  }

  public showAvailable(): void {
    let thisBoardCells = this.cell?.board?.cells;
    super.showAvailable();

    for (let i = 1; i < 8; i++) {
      if (this.cell.x + i <= 7 && this.cell.y + i <= 7) {
        if (
          !!thisBoardCells[this.cell.x + i][this.cell.y + i]?.figure?.color &&
          thisBoardCells[this.cell.x + i][this.cell.y + i]?.figure?.color !==
            this.cell.figure?.color
        ) {
          thisBoardCells[this.cell.x + i][this.cell.y + i].available = true;
          break;
        } else if (
          thisBoardCells[this.cell.x + i][this.cell.y + i]?.figure?.color ===
          this.cell.figure?.color
        ) {
          break;
        } else {
          thisBoardCells[this.cell.x + i][this.cell.y + i].available = true;
        }
      }
    }

    for (let i = 1; i < 8; i++) {
      if (this.cell.x - i >= 0 && this.cell.y - i >= 0) {
        if (
          !!thisBoardCells[this.cell.x - i][this.cell.y - i]?.figure?.color &&
          thisBoardCells[this.cell.x - i][this.cell.y - i]?.figure?.color !==
            this.cell.figure?.color
        ) {
          thisBoardCells[this.cell.x - i][this.cell.y - i].available = true;
          break;
        } else if (
          thisBoardCells[this.cell.x - i][this.cell.y - i]?.figure?.color ===
          this.cell.figure?.color
        ) {
          break;
        } else {
          thisBoardCells[this.cell.x - i][this.cell.y - i].available = true;
        }
      }
    }

    for (let i = 1; i < 8; i++) {
      if (this.cell.x + i <= 7 && this.cell.y - i >= 0) {
        if (
          !!thisBoardCells[this.cell.x + i][this.cell.y - i]?.figure?.color &&
          thisBoardCells[this.cell.x + i][this.cell.y - i]?.figure?.color !==
            this.cell.figure?.color
        ) {
          thisBoardCells[this.cell.x + i][this.cell.y - i].available = true;
          break;
        } else if (
          thisBoardCells[this.cell.x + i][this.cell.y - i]?.figure?.color ===
          this.cell.figure?.color
        ) {
          break;
        } else {
          thisBoardCells[this.cell.x + i][this.cell.y - i].available = true;
        }
      }
    }

    for (let i = 1; i < 8; i++) {
      if (this.cell.x - i >= 0 && this.cell.y + i <= 7) {
        if (
          !!thisBoardCells[this.cell.x - i][this.cell.y + i]?.figure?.color &&
          thisBoardCells[this.cell.x - i][this.cell.y + i]?.figure?.color !==
            this.cell.figure?.color
        ) {
          thisBoardCells[this.cell.x - i][this.cell.y + i].available = true;
          break;
        } else if (
          thisBoardCells[this.cell.x - i][this.cell.y + i]?.figure?.color ===
          this.cell.figure?.color
        ) {
          break;
        } else {
          thisBoardCells[this.cell.x - i][this.cell.y + i].available = true;
        }
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
