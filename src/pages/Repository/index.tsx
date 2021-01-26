import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Profile, Header } from './style';
import logo from '../../assets/logo.svg';

interface QueryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<QueryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="" />
        <a href="/">
          <FiChevronLeft />
          Go back
        </a>
      </Header>
      <Profile>
        <img
          src="https://avatars.githubusercontent.com/u/40603427?s=460&u=a1563b4d0775c3031bda3263fac42ac22a4a61aa&v=4"
          alt="joao"
        />
        <div>
          <strong>Teste</strong>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Profile>
    </>
  );
};

export default Repository;
