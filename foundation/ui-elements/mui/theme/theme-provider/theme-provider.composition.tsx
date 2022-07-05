import { Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider } from './theme-provider';

export const BasicThemeProvider = () => {
  return (
    <ThemeProvider>
      <Typography variant='body1'>HOC for all mui wrapped components</Typography>
    </ThemeProvider>
  );
}
