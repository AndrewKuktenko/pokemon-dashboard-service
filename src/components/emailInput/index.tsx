import { FC } from 'react';
import { Container, Input, Icon } from './styles';

const EmailInput: FC<any> = ({ onChange, value, register, required, ...props }) => {
  return (
      <Container>
          <Icon/>
          <Input {...props} {...register('email', { required })} placeholder="Email" onChange={onChange} value={value} name="email" />
      </Container>
  )
}

export default EmailInput;
