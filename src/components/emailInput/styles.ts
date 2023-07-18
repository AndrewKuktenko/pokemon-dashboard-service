import { styled } from "styled-components";
import { AiOutlineMail } from 'react-icons/ai';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  line-height: 19px;
  width: 100%;
  font-size: 16px;
  border: 1px solid rgb(230, 234, 238);
  border-radius: 2px;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-weight: 500;
  transition: all 0.2s ease 0s;
  padding: 14px 15px 14px 38px;

  &:hover, &:active, &:focus {
    border: 1px solid rgb(87, 102, 236);
    outline: rgb(87, 102, 236);
    transition: all 0.2s ease-in-out 0s;
  }
`;

export const Icon = styled(AiOutlineMail)`
  position: absolute;
  left: 14px;
  top: 17px;
`;