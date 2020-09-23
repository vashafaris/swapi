import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const NotFound = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 2.4rem;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFound>
        <h1>sorry, page not found</h1>
        <Link to='/'>
          <Button contained>Home</Button>
        </Link>
      </NotFound>
    </Layout>
  );
};

export default NotFoundPage;
