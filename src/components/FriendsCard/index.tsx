import { Avatar } from '@mui/material';
import React from 'react';
import style from './FriendsCard.module.scss';
interface FriendsCardProps {
  id: number;
  img: string;
  name: string;
}

export const FriendsCard: React.FC<FriendsCardProps> = ({ img, name, id }) => {
  return (
    <div className={style.root}>
      <div>
        <Avatar sx={{ width: 56, height: 56 }} src={img} alt={name} />
        <div>
          <div>{name}</div>
          <span>Написать сообщение</span>
        </div>
      </div>
      <div>Удалить из друзей</div>
    </div>
  );
};
