import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from '../../components/Grid';
import Card from '../../components/Card';
import { getMovieData } from '../../store/actions/starwarsAction';
import Skeleton from 'react-loading-skeleton';

const MoviePage = () => {
  const dispatch = useDispatch();
  const {
    movies: { data, isFetching, error },
  } = useSelector((state) => state.starwars);

  console.log('movie', data, isFetching);

  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  if (isFetching || data.length == 0) {
    const tempContent = Array.from({ length: 6 });
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
                  <Skeleton />
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
    <>
      <Layout>
        <Row>
          {data.length > 0 &&
            data.map((item, index) => {
              return (
                <Col key={index} lg='3' md='2' sm='1'>
                  <Card>
                    <h3>{item.title}</h3>
                    <hr />
                    <h4>Producer</h4>
                    <p>{item.producer}</p>
                    <h4 style={{ marginTop: '.8rem' }}>Synopsys</h4>
                    <p>{item.opening_crawl}</p>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Layout>
    </>
  );
};

export default MoviePage;
