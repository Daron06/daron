import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <div className={styles.root}>
      nav
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
        </ul>
      </nav>
    </div>
  );
};
