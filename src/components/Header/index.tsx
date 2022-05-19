import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <Link to="/">Home</Link>
    </div>
  );
};
