import { FC } from 'react';
import AuthorizedUser from 'routes/AuthorizedUser';
import UnauthorizedUser from 'routes/UnauthorizedUser';
import { GlobalStyle } from 'components/common/styles';

export const App: FC = () => {
  const isAuth = false;
  return (
    <div className="app">
      <GlobalStyle />
      {isAuth ? <AuthorizedUser /> : <UnauthorizedUser />}
    </div>
  );
}
