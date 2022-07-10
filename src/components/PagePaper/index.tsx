import { Paper } from '@mui/material';
import React from 'react';

const PagePaper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Paper sx={{ padding: 2 }} variant="outlined" square>
      {children}
    </Paper>
  );
};

export default PagePaper;
