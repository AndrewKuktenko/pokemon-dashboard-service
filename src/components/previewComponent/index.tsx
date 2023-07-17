import { FC } from 'react';
import {
  Container,
  PreviewImage,
  DescriptionContainer,
  Title,
  PropertyItem,
  ImageContainer,
} from './styles';
import testImg from 'assets/1.png';

const PreviewComponent: FC<{ name: string }> = ({ name }) => {

  return (
    <Container>
      <ImageContainer>
        <PreviewImage src={testImg} />
      </ImageContainer>
      <DescriptionContainer>
        <Title>
          {name}
        </Title>
        <PropertyItem>
          <span>Types</span>
          <span>Comma seperated types</span>
        </PropertyItem>
        <PropertyItem>
          <span>Types</span>
          <span>Comma seperated types</span>
        </PropertyItem>
        <PropertyItem>
          <span>Types</span>
          <span>Comma seperated types</span>
        </PropertyItem>
      </DescriptionContainer>
    </Container>
  );
}

export default PreviewComponent;
