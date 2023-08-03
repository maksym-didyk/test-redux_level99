import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../../images/header-fixed.png';
import imgEdit from '../../images/edit.png';
import { useAppSelector } from '../../app/hooks';

export const Header = () => {
  const username = useAppSelector((state) => state.username);

  const usernameHeader = Object.values(username).length > 2
    ? `${username}`
    : 'Hello, Guest!';

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={imgLogo} alt="BestRest Logo" />
        </Link>
      </div>

      <div>
        {`${usernameHeader} `}

        <Link to="/singup" title="Change name">
          <img className="header__edit-image" src={imgEdit} alt="Edit name" />
        </Link>
      </div>
    </div>
  );
};
