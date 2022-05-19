import React from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../Layouts/MainLayout';

export const Games: React.FC = () => {
  return (
    <MainLayout>
      <Link to="chess">Chess</Link>
    </MainLayout>
  );
};
