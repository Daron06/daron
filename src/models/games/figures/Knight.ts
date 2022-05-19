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
}
