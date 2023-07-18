import { FC } from 'react';
import { Container, Input, Icon } from './styles';
import { EmailInputProps } from 'ts/types/email.input.props';

const EmailInput: FC<EmailInputProps> = ({ register, required, ...props }) => {
  return (
      <Container>
          <Icon/>
          <Input autoComplete='off'  {...register('email', { required, pattern: /^\S+@\S+$/i })} {...props} placeholder="Email" name="email" />
      </Container>
  )
}

export default EmailInput;
