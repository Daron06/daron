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
}
