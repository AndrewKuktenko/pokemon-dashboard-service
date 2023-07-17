import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
`;

export const ImageContainer = styled.div`
  display: inline-flex;
  border: 1px solid #000;
  border-radius: 5px;
  min-width: 300px;
`;

export const PreviewImage = styled.img`
  width: 400px;
  min-width: inherit;
  height: auto;
`;

export const DescriptionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  min-width: 300px;

  @media (max-width: 921px) {
    padding: 20px 0;
  }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const PropertyItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0;
`;

