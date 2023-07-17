import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 450px;
  padding: 30px 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 30px 0px;
  }
`;

