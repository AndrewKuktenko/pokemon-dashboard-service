import { React, FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Title } from './styles';

const Header: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  

  const pathToTitle = (pathname: string) => {
    const path = pathname.split('/').filter(e => e);
    if (!path.length) {
      return 'Pokedex';
    }
    const title = path.join(' / ');
    return `Home / ${title}`;
  }

  return (
    <Container>
      <Title onClick={() => navigate('/')}>
        {pathToTitle(location.pathname)}
      </Title>
    </Container>
  );
}

export default Header;
