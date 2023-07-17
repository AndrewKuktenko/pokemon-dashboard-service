import { styled } from "styled-components";
import * as CONSTANTS from 'ts/enums/styles';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  max-width: ${CONSTANTS.MAIN_CONTAINER_MAX_WIDTH}px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`
