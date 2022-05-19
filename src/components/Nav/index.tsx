import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

export const Nav: React.FC = () => {
  return (
    <div className={styles.root}>
      <nav>
        <ul>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
