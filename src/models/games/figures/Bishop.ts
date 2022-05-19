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
}
