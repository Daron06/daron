import React from 'react';
import { Board } from '../../../models/games/Board';
import { Cell } from '../../../models/games/chess/Cell';
import { ChessCell } from '../Chess/ChessCell/ChessCell';
import styles from './ChessBoard.module.scss';

interface ChessBoardProps {
  board: Board;
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
}

export const ChessBoard: React.FC<ChessBoardProps> = ({ board, setBoard }) => {
  const [active, setActive] = React.useState<number | null>(null);
  const [takeFigure, setTakeFigure] = React.useState<Cell | null>(null);

  const handleStep = (cell: Cell) => {
    board.doStep(cell);
  };

  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <React.Fragment key={cell.id}>
              <ChessCell
                cell={cell}
                setActive={setActive}
                active={active}
                handleStep={handleStep}
                setTakeFigure={setTakeFigure}
                takeFigure={takeFigure}
              />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
