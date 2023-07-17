import { createGlobalStyle } from 'styled-components';
import * as CONSTANTS from 'ts/enums/styles';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

a {
  color: ${CONSTANTS.COLORS.L_BLUE_A};
  text-decoration: none;
  &:hover {
    color: ${CONSTANTS.COLORS.L_BLUE_A};
    opacity: 0.8;
  }
}
`
