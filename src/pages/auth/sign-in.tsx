import { FC } from 'react';
import { message } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'data/store';
import { signIn } from 'data/actions/user';
import AuthLayout from 'layouts/auth';
import { AuthInputs } from 'ts/types/sign-up.inputs';
import { getLoadingSelector } from 'data/selectors/loading';
import { Title, Button, CreateAccountLabel, ErrorMessage } from './styles';
import PasswordInput from 'components/passwordInput';
import EmailInput from 'components/emailInput';

const SingInPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getLoadingSelector('sign_in'));

  const onSubmit: SubmitHandler<AuthInputs> = (data) => {
    dispatch(signIn(data.email, data.password, (error: string) => {
      message.open({ type: 'error', content: error });
    }));
  };
  return (
    <AuthLayout>
      <Title>SIGN IN</Title>
      {errors.email?.type === "required" && (
        <ErrorMessage>Email is required</ErrorMessage>
      )}
      {errors.email?.type === "pattern" && (
        <ErrorMessage>Invalid email</ErrorMessage>
      )}
      <EmailInput register={register} required/>
      {errors.password?.type === "required" && (
        <ErrorMessage>Password is required</ErrorMessage>
      )}
      {(errors.password?.type === 'maxLength' || errors.password?.type === 'minLength') && (
        <ErrorMessage>Password length must be higher than 8 and lower than 16</ErrorMessage>
      )}
      <PasswordInput register={register} required/>
      <Button loading={loading} disabled={loading} type="primary" size="large" onClick={handleSubmit(onSubmit)}>Submit</Button>
      <CreateAccountLabel><Link to="/sign-up">Do not have one? Create account!</Link></CreateAccountLabel>
    </AuthLayout>
  );
};

export default SingInPage;
