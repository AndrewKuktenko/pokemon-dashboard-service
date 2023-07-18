import { FC, PropsWithChildren } from 'react';
import Header from 'components/header';
import { Container, ContentContainer, MainWrapper } from './styles';

const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
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
