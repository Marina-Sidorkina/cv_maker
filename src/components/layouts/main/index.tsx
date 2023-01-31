import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
`;

const Main = (props: {children: React.ReactNode}) => {
  return <Wrapper>{props.children}</Wrapper>
}

export default React.memo(Main);
