import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from 'layouts/main';
import MainPage from 'pages/main';
import PreviewPage from 'pages/preview';

const AuthorizedUser: FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon/:name" element={<PreviewPage/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainLayout>
  );
};

export default AuthorizedUser;
