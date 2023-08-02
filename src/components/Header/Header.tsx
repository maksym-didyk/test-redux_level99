import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../../images/header-fixed.png';
import imgEdit from '../../images/edit.png';
import { useAppSelector } from '../../app/hooks';

export const Header = () => {
  const username = useAppSelector((state) => state.username);

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={imgLogo} alt="BestRest Logo" />
        </Link>
      </div>

      <div>
        {Object.entries(username).length !== 0
          ? `${username}`
          : 'Hello, Guest!'}
        {' '}
        <Link to="/singup" title="Change name">
          <img className="header__edit-image" src={imgEdit} alt="Edit name" />
        </Link>
      </div>

    </div>
  );
};
