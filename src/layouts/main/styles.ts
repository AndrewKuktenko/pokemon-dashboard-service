import { styled } from "styled-components";
import * as CONSTANTS from 'ts/enums/styles';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: ${CONSTANTS.COLORS.WHITE};
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: ${CONSTANTS.MAIN_CONTAINER_MAX_WIDTH}px;
  margin: auto;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 ${CONSTANTS.MAIN_CONTAINER_SIDES_PADDING}px;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 425px) {
    padding: 0 ${CONSTANTS.MAIN_CONTAINER_SIDES_PADDING_MOBILE}px;
  }
`;
