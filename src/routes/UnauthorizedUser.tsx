import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SingUpPage from 'pages/auth/sign-up';
import SignInPage from 'pages/auth/sign-in';

const UnauthorizedUser: FC = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage/>} />
      <Route path="/sign-up" element={<SingUpPage />} />
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
};

export default UnauthorizedUser;
