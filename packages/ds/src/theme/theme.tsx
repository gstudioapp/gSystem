import { extendTheme } from '@chakra-ui/react';

import { Button, Card, Heading, Icon, Input, MenuSelect, Text } from './components';
import { layerStyles, textStyles } from './styles';
import {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
} from './foundations';

export * from './utils';

export const theme = extendTheme({
  // Foundations
  borders,
  breakpoints,
  colors,
  radii,
  shadows,
  space,

  // Typography
  fonts,
  fontSizes,
  fontWeights,

  components: {
    Button,
    Card,
    Heading,
    Icon,
    Input,
    MenuSelect,
    Text,
  },

  textStyles,
  layerStyles,

  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});
