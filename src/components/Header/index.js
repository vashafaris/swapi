import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
  /* position: relative; */
  display: flex;
  padding-left: 10%;
  height: 7.2rem;
  /* width: 100%; */
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  .logo {
    height: 4.8rem;
    margin-right: 4.8rem;
  }

  p {
    margin: 0 1.6rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <img className='logo' src={require('../../assets/logo.png')} />
      <Link to='/'>
        <p>Movies</p>
      </Link>
      <Link to='/character'>
        <p>Character</p>
      </Link>
    </HeaderStyled>
  );
};

export default Header;
