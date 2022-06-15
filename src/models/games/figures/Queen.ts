import { Cell } from '../chess/Cell';
import { Colors } from '../chess/Colors';
import { Figure, FigureName } from './Figure';
import blackQueen from '../../../assets/chess-img/black-queen.png';
import whiteQueen from '../../../assets/chess-img/white-queen.png';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = this.color === Colors.WHITE ? whiteQueen : blackQueen;
    this.name = FigureName.QUEEN;
  }

  public showAvailable(): void {
    let thisBoardCells = this.cell?.board?.cells;
    super.showAvailable();
    //Движение по сечению
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

    //Движение по прямой

    for (let i = 1; i < 8; i++) {
      if (this.cell.x + i <= 7) {
        if (
          !!thisBoardCells[this.cell.x + i][this.cell.y]?.figure?.color &&
          thisBoardCells[this.cell.x + i][this.cell.y]?.figure?.color !== this.cell.figure?.color
        ) {
          thisBoardCells[this.cell.x + i][this.cell.y].available = true;
          break;
        } else if (
          thisBoardCells[this.cell.x + i][this.cell.y]?.figure?.color === this.cell.figure?.color
        ) {
          break;
        } else {
          thisBoardCells[this.cell.x + i][this.cell.y].available = true;
        }
      }
    }

    for (let i = 1; i < 8; i++) {
      if (this.cell.x - i >= 0) {
        if (
          !!thisBoardCells[this.cell.x - i][this.cell.y]?.figure?.color &&
          thisBoardCells[this.cell.x - i][this.cell.y]?.figure?.color !== this.cell.figure?.color
        ) {
          thisBoardCells[this.cell.x - i][this.cell.y].available = true;
          break;
        } else if (
          thisBoardCells[this.cell.x - i][this.cell.y]?.figure?.color === this.cell.figure?.color
        ) {
          break;
        } else {
          thisBoardCells[this.cell.x - i][this.cell.y].available = true;
        }
      }
    }

    for (let i = 1; i < 8; i++) {
      if (this.cell.y - i >= 0) {
        if (
          !!thisBoardCells[this.cell.x][this.cell.y - i]?.figure?.color &&
          thisBoardCells[this.cell.x][this.cell.y - i]?.figure?.color !== this.cell.figure?.color
        ) {
          thisBoardCells[this.cell.x][this.cell.y - i].available = true;
          break;
        } else if (
          thisBoardCells[this.cell.x][this.cell.y - i]?.figure?.color === this.cell.figure?.color
        ) {
          break;
        } else {
          thisBoardCells[this.cell.x][this.cell.y - i].available = true;
        }
      }
    }

    for (let i = 1; i < 8; i++) {
      if (this.cell.y + i <= 7) {
        if (
          !!thisBoardCells[this.cell.x][this.cell.y + i]?.figure?.color &&
          thisBoardCells[this.cell.x][this.cell.y + i]?.figure?.color !== this.cell.figure?.color
        ) {
          thisBoardCells[this.cell.x][this.cell.y + i].available = true;
          break;
        } else if (
          thisBoardCells[this.cell.x][this.cell.y + i]?.figure?.color === this.cell.figure?.color
        ) {
          break;
        } else {
          thisBoardCells[this.cell.x][this.cell.y + i].available = true;
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
