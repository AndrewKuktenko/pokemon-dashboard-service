import { FC } from 'react';
import { useAppSelector } from 'data/store';
import AuthorizedUser from 'routes/AuthorizedUser';
import UnauthorizedUser from 'routes/UnauthorizedUser';
import { isUserAuthenticated } from 'data/selectors/user';
import { GlobalStyle } from 'components/common/styles';

export const App: FC = () => {
  const isAuth = useAppSelector(isUserAuthenticated);

  return (
    <div className="app">
      <GlobalStyle />
      {isAuth ? <AuthorizedUser /> : <UnauthorizedUser />}
    </div>
  );
}
