import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  position: relative;
  width: 100%;
  padding: 2.4rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: ${({ margin }) => margin && margin};

  hr {
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  }
`;

const Card = ({ margin, children }) => {
  return (
    <CardStyled margin={margin}>
      <>{children}</>
    </CardStyled>
  );
};

export default Card;
