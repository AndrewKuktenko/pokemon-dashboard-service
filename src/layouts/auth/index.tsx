import { FC, PropsWithChildren } from 'react';
import { Container, Form, Logo } from './styles';

const AuthLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Container>
      <Logo>Pokedex</Logo>
      <Form autoComplete={'off'}>
        {children}
      </Form>
    </Container>
  );
};

export default AuthLayout;
