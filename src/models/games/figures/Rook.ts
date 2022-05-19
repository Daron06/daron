import { Cell } from '../chess/Cell';
import { Colors } from '../chess/Colors';
import { Figure, FigureName } from './Figure';
import blackRook from '../../../assets/chess-img/black-rook.png';
import whiteRook from '../../../assets/chess-img/white-rook.png';

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = this.color === Colors.WHITE ? whiteRook : blackRook;
    this.name = FigureName.ROOK;
  }
}
