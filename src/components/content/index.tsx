import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 25px #bcbcbc;
  border: 0.5px solid #200589;
  background-color: #ffffff;
`;

const Content = (props: {children: React.ReactNode}) => {
  return <Wrapper>{props.children}</Wrapper>;
}

export default React.memo(Content);
