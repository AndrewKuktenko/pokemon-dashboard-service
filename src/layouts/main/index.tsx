import { FC } from 'react';
import Header from 'components/header';
import { Container, ContentContainer, MainWrapper } from './styles';

const MainLayout: FC<any> = ({ children }) => {
  return (
    <Container>
      <MainWrapper>
        <Header />
        <ContentContainer>
          {children}
        </ContentContainer>
      </MainWrapper>
    </Container>
  );
};

export default MainLayout;
