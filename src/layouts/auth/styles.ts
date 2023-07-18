import { styled } from "styled-components";
import * as CONSTANTS from 'ts/enums/styles';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0 ${CONSTANTS.MAIN_CONTAINER_SIDES_PADDING}px;
  @media (max-width: 425px) {
    padding: 0 ${CONSTANTS.MAIN_CONTAINER_SIDES_PADDING_MOBILE}px;
  }
`;

export const Form = styled.form`
  padding: 30px 60px;
  width: 450px;
  height: 360px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 30px 0px;
    width: 100%;
  }
`;

export const Logo = styled.h3`
  cursor: pointer;
`

