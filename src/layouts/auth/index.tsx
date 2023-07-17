import { FC } from 'react';
import { Container, Form } from './styles';

const AuthLayout: FC<any> = ({ children }) => {
  return (
    <Container>
      <Form autoComplete='off'>
        {children}
      </Form>
    </Container>
  );
};

export default AuthLayout;
