import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import { SignUpInputs } from 'ts/types/sign-up.inputs';
import { Title, Button, CreateAccountLabel } from './styles';
import PasswordInput from 'components/passwordInput';
import EmailInput from 'components/emailInput';

const SingUpPage: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<SignUpInputs>()
  const onSubmit: SubmitHandler<SignUpInputs> = (data) => console.log(data);

  return (
    <AuthLayout>
      <Title>SIGN UP</Title>
      <EmailInput register={register} required/>
      <PasswordInput register={register} required/>
      <Button type="primary" size="large" onClick={handleSubmit(onSubmit)}>Submit</Button>
      <CreateAccountLabel><Link to="/sign-in">I already have an account.</Link></CreateAccountLabel>
    </AuthLayout>
  );
};

export default SingUpPage;
