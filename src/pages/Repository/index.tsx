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

interface Issue {
  id: string;
  html_url: string;
  title: string;
  user: { login: string };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<QueryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get<Repository>(`/repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });
    api.get<Issue[]>(`/repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
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
            {issues.map(issue => {
              return (
                <a key={issue.id} href={issue.html_url}>
                  <div>
                    <strong>{issue.title}</strong>
                    <p>{issue.user.login}</p>
                  </div>
                  <FiChevronRight size={20} />
                </a>
              );
            })}
          </Issues>
        </>
      )}
    </>
  );
};

export default Repository;
