import React from 'react';

import logo from '../../assets/logo.svg';
import { Title, Form } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Github Repositories</Title>

      <Form>
        <input placeholder="Search a repository" />
        <button type="submit">Search</button>
      </Form>
    </>
  );
};

export default Dashboard;
