import React from 'react';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import styles from './MainLayout.module.scss';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.wrapper}>
        <Nav />
        {children}
      </div>
    </div>
  );
};
