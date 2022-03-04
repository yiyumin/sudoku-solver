import '@fontsource/play';
import {
  extendTheme,
  withDefaultColorScheme,
  theme as base,
} from '@chakra-ui/react';

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'red',
  }),
  {
    fonts: {
      heading: `Play, ${base.fonts.heading}`,
    },
  }
);

export default theme;
