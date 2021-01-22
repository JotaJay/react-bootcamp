import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories, InputError } from './style';

interface Repository {
  full_name: string;
  description: string;
  owner: { login: string; avatar_url: string };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositores] = useState<Repository[]>([]);

  async function handleAddRepo(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!newRepo) {
      setInputError('Type author/repo to search for a repository');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositores([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Oops...Something went wrong.');
      setNewRepo('');
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Github Repositories</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepo}>
        <input
          placeholder="Search a repository"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Search</button>
      </Form>
      {inputError && <InputError>{inputError}</InputError>}

      <Repositories>
        {repositories.map(repo => (
          <a key={repo.full_name} href="teste">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
