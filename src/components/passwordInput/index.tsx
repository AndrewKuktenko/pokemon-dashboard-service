import { FC } from 'react';
import { Container, Input, Icon } from './styles';
import { EmailInputProps } from 'ts/types/password.input.props';

const PasswordInput: FC<EmailInputProps> = ({ register, required, ...props }) => {
    return (
        <Container>
            <Icon/>
            <Input autoComplete='off' {...register('password', { required, minLength: 8, maxLength: 16 })} placeholder="Password" {...props} type="password" name="password" />
        </Container>
    )
}

export default PasswordInput;