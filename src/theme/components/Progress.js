// ----------------------------------------------------------------------

export const Progress = (theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 4,
          borderRadius: 4,
          overflow: 'hidden',
        },
        bar: {
          borderRadius: 0,
        },
        colorPrimary: {
          backgroundColor: theme.palette.primary[isLight ? 'lighter' : 'darker'],
        },
        colorSecondary: {
          backgroundColor: theme.palette.secondary[isLight ? 'lighter' : 'darker'],
        },

        buffer: {
          backgroundColor: 'transparent',
        },
      },
    },
  };
};
