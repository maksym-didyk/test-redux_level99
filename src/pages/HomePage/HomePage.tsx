import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useAppSelector } from '../../app/hooks';

export const HomePage = () => {
  const username = useAppSelector((state) => state.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/singup');
    }
  }, []);

  return (
    <>
      <Header />

      <div className="content">This is page content</div>
    </>
  );
};
