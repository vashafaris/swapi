import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from '../../components/Grid';
import Card from '../../components/Card';
import { getCharacterData } from '../../store/actions/starwarsAction';
import Button from '../../components/Button';

const CharacterCard = styled.div`
  flex: 1;
  .row {
    display: flex;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-right: 15%;
  }

  .info-container {
    display: flex;
    flex-direction: column;
  }

  .button-container {
    margin-top: 1.6rem;
  }
`;

const CharacterPage = () => {
  const dispatch = useDispatch();
  const {
    character: { data, isFetching, error },
  } = useSelector((state) => state.starwars);

  console.log('data', data, isFetching, error);

  useEffect(() => {
    dispatch(getCharacterData());
  }, []);

  if (isFetching || data.length == 0) {
    const tempContent = Array.from({ length: 10 });
    return (
      <Layout>
        <Row>
          {tempContent.map((item, index) => {
            return (
              <Col key={index} lg='3' md='2' sm='1'>
                <Card>
                  <Skeleton />
                  <hr />
                  <Skeleton />
                  <Skeleton />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Layout>
    );
  }

  return (
    <Layout>
      <Row>
        {data.length > 0 &&
          data.map((item) => {
            let id = item.url.split('/');
            id = id[id.length - 2];
            return (
              <Col key={id} lg='3' md='2' sm='1'>
                <Card>
                  <CharacterCard>
                    <h1>{item.name}</h1>
                    <hr />
                    <div className='row'>
                      <div className='title-container'>
                        <p>Birth Year</p>
                        <p>Eye Color</p>
                      </div>
                      <div className='info-container'>
                        <p>Eye Color</p>
                        <p>{item.eye_color}</p>
                      </div>
                    </div>
                    <div className='button-container'>
                      <Link to={`/character/${id}`}>
                        <Button contained>SEE MORE</Button>
                      </Link>
                    </div>
                  </CharacterCard>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Layout>
  );
};

export default CharacterPage;
