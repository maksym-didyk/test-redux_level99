import React from 'react';
import { Header } from '../../components/Header/Header';
import { UsernameForm } from '../../components/UsernameForm';

export const SingUpPage: React.FC = () => {
  return (
    <>
      <Header />

      <UsernameForm />
    </>
  );
};
