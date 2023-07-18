import { FC } from 'react';
import { message } from 'antd';
import { useAppDispatch, useAppSelector } from 'data/store';
import { signUp } from 'data/actions/user';
import { getLoadingSelector } from 'data/selectors/loading';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import { AuthInputs } from 'ts/types/sign-up.inputs';
import { Title, Button, CreateAccountLabel, ErrorMessage } from './styles';
import PasswordInput from 'components/passwordInput';
import EmailInput from 'components/emailInput';

const SingUpPage: FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getLoadingSelector('sign_in'));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>()
  const onSubmit: SubmitHandler<AuthInputs> = (data) => {
    dispatch(signUp(data.email, data.password, (error: string) => {
      message.open({ type: 'error', content: error });
    }));
  };
  return (
    <AuthLayout>
      <Title>SIGN UP</Title>
      {errors.email?.type === "required" && (
        <ErrorMessage>Email is required</ErrorMessage>
      )}
      {errors.email?.type === "pattern" && (
        <ErrorMessage>Invalid email</ErrorMessage>
      )}
      <EmailInput register={register} aria-invalid={errors.email ? "true" : "false"} required/>
      {errors.password?.type === "required" && (
        <ErrorMessage>Password is required</ErrorMessage>
      )}
      {(errors.password?.type === 'maxLength' || errors.password?.type === 'minLength') && (
        <ErrorMessage>Password length must be higher than 8 and lower than 16</ErrorMessage>
      )}
      <PasswordInput register={register} aria-invalid={errors.password ? "true" : "false"} required/>
      <Button loading={loading} disabled={loading} type="primary" size="large" onClick={handleSubmit(onSubmit)}>Submit</Button>
      <CreateAccountLabel><Link to="/sign-in">I already have an account.</Link></CreateAccountLabel>
    </AuthLayout>
  );
};

export default SingUpPage;
