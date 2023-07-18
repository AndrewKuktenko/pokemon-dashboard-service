import { styled } from "styled-components";
import * as CONSTANTS from 'ts/enums/styles';

export const Container = styled.div`
  width: 100%;
  height: ${CONSTANTS.HEADER_HEIGHT}px;
  display: flex;
  padding: 20px ${CONSTANTS.MAIN_CONTAINER_SIDES_PADDING}px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    padding: 20px ${CONSTANTS.MAIN_CONTAINER_SIDES_PADDING_MOBILE}px;
  }
`;

export const Title = styled.h2`
  cursor: pointer;
`;

export const SignOutLabel = styled.span`
  color: ${CONSTANTS.COLORS.L_BLUE_B};
  cursor: pointer;
`;
