import { React, FC } from 'react';
import { useAppDispatch } from 'data/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'data/actions/user';
import { Container, Title, SignOutLabel } from './styles';

const IGNORED_PATHS = ['pokemon'];

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const pathToTitle = (pathname: string) => {
    const path = pathname.split('/').filter(e => e && !IGNORED_PATHS.includes(e));
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
      <SignOutLabel onClick={() => dispatch(signOut())}>
        Sign Out
      </SignOutLabel>
    </Container>
  );
}

export default Header;
