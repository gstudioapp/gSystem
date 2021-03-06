import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/react';
import React, { FC } from 'react';

import { theme as gTheme, GSystemThemeType } from '../theme';

/**
 * ThemeProvider component for user
 */
export const ThemeProvider: FC<{ theme?: GSystemThemeType }> = ({ children, theme = gTheme }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ChakraThemeProvider theme={theme as any}>{children}</ChakraThemeProvider>;
};

ThemeProvider.displayName = 'ThemeProvider';
