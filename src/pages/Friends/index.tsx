import React from 'react';
import { FriendsCard } from '../../components/FriendsCard';
import PagePaper from '../../components/PagePaper';
import style from './Friends.module.scss';
const people = [
  {
    name: 'Alex',
    id: 1,
    img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
  },
  {
    name: 'Daron',
    id: 2,
    img: 'https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg',
  },
  {
    name: 'Mora',
    id: 3,
    img: 'https://vjoy.cc/wp-content/uploads/2020/10/foto-dlya-avatarki-dlya-parnej-v-vk011.jpg',
  },
  {
    name: 'Ul',
    id: 4,
    img: 'https://abrakadabra.fun/uploads/posts/2022-03/1647337144_2-abrakadabra-fun-p-avatarka-dlya-estetiki-6.png',
  },
];

export const Friends: React.FC = () => {
  return (
    <PagePaper>
      <div className={style.root}>
        <div>
          <button>Найти новых друзей</button>
          <input placeholder="Поиск друзей" />
        </div>
        {people.map((item) => (
          <React.Fragment key={item.id}>
            <FriendsCard {...item} />
          </React.Fragment>
        ))}
      </div>
    </PagePaper>
  );
};
