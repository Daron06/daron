import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const links = [
  {
    active: false,
    path: '/messages',
    title: 'Messages',
  },
  {
    active: false,
    path: '/friends',
    title: 'Friends',
  },
  {
    active: false,
    path: '/news',
    title: 'News',
  },
  {
    active: false,
    path: '/products',
    title: 'Products',
  },
  {
    active: false,
    path: '/games',
    title: 'Games',
  },
];

export const Nav: React.FC = () => {
  const [pageLinks, setPageLinks] = React.useState(links);

  const onActiveLink = (path: string) => {
    setPageLinks(
      pageLinks.map((el) => (el.path === path ? { ...el, active: true } : { ...el, active: false }))
    );
  };

  return (
    <div className={styles.root}>
      <nav>
        <ul>
          {pageLinks.map((el) => (
            <li key={el.title}>
              <Link
                onClick={onActiveLink.bind(this, el.path)}
                className={el.active ? styles.active : ''}
                to={el.path}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
