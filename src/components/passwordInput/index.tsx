import { FC } from 'react';
import { Container, Input, Icon } from './styles';
// import LockIcon from 'assets/lock.svg';

const PasswordInput: FC<any> = ({ placeholder = 'Password', register, required, ...props }) => {
    return (
        <Container>
            <Icon/>
            <Input {...register('password', { required })} placeholder={placeholder} {...props} type="password" name="password" />
        </Container>
    )
}

export default PasswordInput;