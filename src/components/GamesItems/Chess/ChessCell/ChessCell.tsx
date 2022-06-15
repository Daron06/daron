import React from 'react';
import { Cell } from '../../../../models/games/chess/Cell';
import styles from './ChessCell.module.scss';

interface ChessCellProps {
  cell: Cell;

  handleStep: (cell: Cell) => void;
  setTakeFigure: React.Dispatch<React.SetStateAction<Cell | null>>;
  takeFigure: Cell | null;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
  active: number | null;
}

export const ChessCell: React.FC<ChessCellProps> = ({
  cell,
  setActive,
  active,
  handleStep,
  setTakeFigure,
  takeFigure,
}) => {
  const onClick = () => {
    setActive(cell.figure?.logo ? cell.id : null);
    handleStep(cell);

    if (cell.figure?.logo && !active) {
      setTakeFigure(cell);
    }
    if (takeFigure) {
      setTakeFigure(null);
    }
  };

  return (
    <div
      onClick={onClick}
      className={`${styles.cell} ${
        styles[active === cell.id && cell.figure?.logo ? 'active' : cell.color]
      }`}
    >
      {cell?.figure?.logo && <img alt="" src={cell.figure.logo} />}
      {!cell?.figure?.logo && cell?.available && <div className={styles.circle}></div>}
    </div>
  );
};
