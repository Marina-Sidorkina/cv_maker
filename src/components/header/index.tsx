import React from 'react';
import styled from "styled-components";
import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg';

const Wrapper = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 30px;
  padding: 0 30px;
  background-color: #21247d;
`;

const Logo = styled.div`
  font-size: 24px;
  color: #ffffff;
`;

const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 112px;
  height: 30px;
  border: none;
  border-radius: 2px;
  background-color: #fbf8fd;
  cursor: pointer;
  font-size: 14px;
  font-style: italic;
  color: #21247d;
  
  &:hover {
    filter: brightness(120%);
  }

  &:active {
    opacity: 0.8;
  }
`;

const Header = (props: {onClick: Function}) => {
  return (
    <Wrapper>
      <Logo>CV Maker</Logo>
      <Button onClick={() => props.onClick()}>
        <PrintIcon/>
        Напечатать
      </Button>
    </Wrapper>
  );
}

export default React.memo(Header);
