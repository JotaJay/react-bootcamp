import React from 'react';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Github Repositories</Title>

      <Form>
        <input placeholder="Search a repository" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/40603427?s=460&u=a1563b4d0775c3031bda3263fac42ac22a4a61aa&v=4"
            alt="Junior profile pic"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              cumque!
            </p>
          </div>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
