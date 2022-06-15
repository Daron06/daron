import { Cell } from '../chess/Cell';
import { Colors } from '../chess/Colors';
import { Figure, FigureName } from './Figure';
import blackKnight from '../../../assets/chess-img/black-knight.png';
import whiteKnight from '../../../assets/chess-img/white-knight.png';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = this.color === Colors.WHITE ? whiteKnight : blackKnight;
    this.name = FigureName.KNIGHT;
  }

  public showAvailable(): void {
    let thisBoardCells = this.cell?.board?.cells;
    super.showAvailable();
    const knightSteps = [
      [-2, 1],
      [-2, -1],
      [-1, 2],
      [-1, -2],
      [2, -1],
      [2, 1],
      [1, 2],
      [1, -2],
    ];

    for (let i = 0; i < knightSteps.length; i++) {
      const element = knightSteps[i];

      if (
        this.cell.x + element[0] <= 7 &&
        this.cell.x + element[0] >= 0 &&
        this.cell.y + element[1] <= 7 &&
        this.cell.y + element[1] >= 0
      ) {
        if (
          thisBoardCells[this.cell.x + element[0]][this.cell.y + element[1]]?.figure?.color !==
          this.cell?.figure?.color
        ) {
          thisBoardCells[this.cell?.x + element[0]][this.cell?.y + element[1]].available = true;
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
