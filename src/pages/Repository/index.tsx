import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Profile, Header, Metrics, Issues } from './style';
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
        <Link to="/">
          <FiChevronLeft size={16} />
          Go back
        </Link>
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
      <Metrics>
        <ul>
          <li>
            <strong>15422</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </Metrics>
      <Issues>
        <Link key="teste" to="/repositories">
          <div>
            <strong>issue</strong>
            <p>Issue description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link key="teste" to="/repositories">
          <div>
            <strong>issue</strong>
            <p>Issue description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link key="teste" to="/repositories">
          <div>
            <strong>issue</strong>
            <p>Issue description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
