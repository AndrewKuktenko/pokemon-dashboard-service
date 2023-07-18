import styled, { keyframes } from "styled-components";
import { AiOutlineLoading } from 'react-icons/ai';
import * as CONSTANTS from 'ts/enums/styles';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
`;

export const LoadingIcon = styled(AiOutlineLoading)`
  display: inline-block;
  animation: ${rotate} 400ms linear infinite;
  font-size: 30px;
  color: ${CONSTANTS.COLORS.L_BLUE_B};
`;
