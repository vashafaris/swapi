import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  padding: ${(props) => (props.contained ? '0.8rem 2.4rem' : '0.8rem .8rem')};
  min-width: 6.4rem;
  border-radius: 0.4rem;
  color: ${(props) => (props.contained ? 'white' : '#009EFE')};
  background: ${(props) => (props.contained ? '#0C70FF' : 'white')};
  border: none;
  box-shadow: ${(props) =>
    props.contained &&
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'};

  .endIcon {
    margin-left: 0.8rem;
  }
`;

const Button = ({ children, endIcon, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {children}
      {endIcon && <span className='endIcon'>{endIcon}</span>}
    </ButtonStyled>
  );
};

export default Button;
