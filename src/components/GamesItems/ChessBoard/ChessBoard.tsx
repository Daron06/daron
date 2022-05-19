import React from 'react';
import { Board } from '../../../models/games/Board';
import { ChessCell } from '../Chess/ChessCell/ChessCell';
import styles from './ChessBoard.module.scss';

interface ChessBoardProps {
  board: Board;
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
}

export const ChessBoard: React.FC<ChessBoardProps> = ({ board, setBoard }) => {
  const [active, setActive] = React.useState<number | null>(null);
  console.log(board);
  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <ChessCell {...cell} setActive={setActive} active={active} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
