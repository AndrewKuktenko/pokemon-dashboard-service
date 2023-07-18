import { styled } from "styled-components";
import { Button as AntdButton } from 'antd';
import * as CONSTANTS from 'ts/enums/styles';

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Button = styled(AntdButton)`
  margin-top: 20px;
`;

export const CreateAccountLabel = styled.span`
  color: ${CONSTANTS.COLORS.L_BLUE_B};
  margin-top: 20px;
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  text-align: center;
  color: ${CONSTANTS.COLORS.RED};
  align-self: baseline;
`;
