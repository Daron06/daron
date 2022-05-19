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
}
