import { FC } from 'react';
import { Container, Input, Icon } from './styles';
// import LockIcon from 'assets/lock.svg';

const PasswordInput: FC<any> = ({ placeholder = 'Password', register, required, ...props }) => {
    return (
        <Container>
            <Icon/>
            <Input autoComplete='off' {...register('password', { required, minLength: 8, maxLength: 16 })} placeholder={placeholder} {...props} type="password" name="password" />
        </Container>
    )
}

export default PasswordInput;