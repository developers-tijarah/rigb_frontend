import PropTypes from 'prop-types';
import { useMemo } from 'react';

// @mui
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';

// hooks
import useSettings from '../hooks/useSettings';

// locals
import palette from './base/palette';
import typography from './base/typography';
import breakpoints from './base/breakpoints';
import shadows, { customShadows } from './base/shadows';
import componentsOverrides from './components';

// ----------------------------------------------------------------------------------------------------
ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const { themeMode, themeDirection } = useSettings();
  const isLightMode = themeMode === 'light';

  const themeOptions = useMemo(
    () => ({
      palette: isLightMode ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLightMode ? shadows.light : shadows.dark,
      customShadows: isLightMode ? customShadows.light : customShadows.dark,
    }),
    [isLightMode, themeDirection]
  );

  const theme = createTheme(themeOptions);

  console.log(theme);
  theme.components = componentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
