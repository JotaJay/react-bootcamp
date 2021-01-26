import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Profile, Header, Metrics, Issues } from './style';
import logo from '../../assets/logo.svg';

interface QueryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: { login: string; avatar_url: string };
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<QueryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, Setissues] = useState('');

  useEffect(() => {
    const result = api
      .get<Repository>(`/repos/${params.repository}`)
      .then(response => {
        console.log(response.data);
        setRepository(response.data);
      });
  }, [params.repository]);
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Go back
        </Link>
      </Header>
      {repository && (
        <>
          <Profile>
            <img src={`${repository?.owner.avatar_url}`} alt="joao" />
            <div>
              <strong>{repository?.full_name}</strong>
              <p>{repository?.description}</p>
            </div>
          </Profile>
          <Metrics>
            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
              </li>
              <li>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
              </li>
              <li>
                <strong>{repository.open_issues_count}</strong>
                <span>Open Issues</span>
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
      )}
    </>
  );
};

export default Repository;
