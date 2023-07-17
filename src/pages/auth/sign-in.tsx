import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import { SignUpInputs } from 'ts/types/sign-up.inputs';
import { Title, Button, CreateAccountLabel } from './styles';
import PasswordInput from 'components/passwordInput';
import EmailInput from 'components/emailInput';

const SingInPage: FC = () => {
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
      <Title>SIGN IN</Title>
      <EmailInput register={register} required/>
      <PasswordInput register={register} required/>
      <Button type="primary" size="large" onClick={handleSubmit(onSubmit)}>Submit</Button>
      <CreateAccountLabel><Link to="/sign-up">Do not have one? Create account!</Link></CreateAccountLabel>
    </AuthLayout>
  );
};

export default SingInPage;
