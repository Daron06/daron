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
}
