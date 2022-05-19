import React from 'react';
import { Colors } from '../../../../models/games/chess/Colors';
import { Figure } from '../../../../models/games/figures/Figure';
import styles from './ChessCell.module.scss';

interface ChessCellProps {
  x: number;
  board: any;
  y: number;
  color: Colors;
  figure: Figure | null;
  available: boolean;
  id: number;

  setActive: React.Dispatch<React.SetStateAction<number | null>>;
  active: number | null;
}

export const ChessCell: React.FC<ChessCellProps> = ({
  x,
  y,
  board,
  color,
  figure,
  available,
  id,
  setActive,
  active,
}) => {
  console.log(figure);
  return (
    <div
      onClick={() => setActive(id)}
      className={`${styles.cell} ${styles[active === id && figure?.logo ? 'active' : color]}`}
    >
      {figure?.logo && <img alt="" src={figure.logo} />}
      {!!figure?.logo || <div className={styles.circle}></div>}
    </div>
  );
};
