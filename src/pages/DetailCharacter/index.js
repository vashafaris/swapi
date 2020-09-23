import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Layout from '../../components/Layout';
import { getDetailCharacterData } from '../../store/actions/starwarsAction';
import Card from '../../components/Card';
import Skeleton from 'react-loading-skeleton';
import Button from '../../components/Button';

const ButtonContainer = styled.div`
  margin-top: 1.2rem;
`;

const DetailCharacterPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    detailCharacter: { data, isFetching, error },
  } = useSelector((state) => state.starwars);

  useEffect(() => {
    dispatch(getDetailCharacterData(id));
  }, []);

  if (isFetching) {
    return (
      <Layout>
        <Card>
          <Skeleton width='20rem' />
          <hr />
          <Skeleton width='30rem' />
          <br />
          <Skeleton width='30rem' />
          <br />
          <Skeleton width='30rem' />
          <br />
          <Skeleton width='30rem' />
        </Card>
      </Layout>
    );
  }

  return (
    <Layout>
      <Card>
        <h1>{data.name}</h1>
        <hr />
        <p>Birth year: {data.birth_year}</p>
        <p>Hair color: {data.hair_color}</p>
        <p>Height: {data.height}</p>
        <p>Mass: {data.mass}</p>
      </Card>
      <ButtonContainer>
        <Link to='/character'>
          <Button>Back</Button>
        </Link>
      </ButtonContainer>
    </Layout>
  );
};

export default DetailCharacterPage;
