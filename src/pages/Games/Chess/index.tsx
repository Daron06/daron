import React from 'react';
import { ChessBoard } from '../../../components/GamesItems/ChessBoard/ChessBoard';
import { MainLayout } from '../../../Layouts/MainLayout';
import { Board } from '../../../models/games/Board';
// import styles from './Chess.module.scss';

export const Chess: React.FC = () => {
  const [board, setBoard] = React.useState(new Board());
  const restart = () => {
    const newBoard = new Board();
    newBoard.initCell();
    newBoard.addFigure();
    setBoard(newBoard);
  };

  React.useEffect(() => {
    restart();
  }, []);

  return (
    <MainLayout>
      <ChessBoard board={board} setBoard={setBoard} />
    </MainLayout>
  );
};
