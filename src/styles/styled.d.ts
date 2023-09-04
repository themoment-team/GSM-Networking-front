import 'styled-components';

import theme from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
