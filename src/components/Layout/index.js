import React from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.div`
  position: relative;
  min-height: 80vh;
  height: 80vh;
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
`;

const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
