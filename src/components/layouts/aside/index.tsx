import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Top = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
`;

const Main = styled.div`
  box-sizing: border-box;
  width: 250px;
`;

const Aside = (props: {top: React.ReactNode; children: React.ReactNode;}) => {
  return (
    <Wrapper>
      <Top>{props.top}</Top>
      <Main>{props.children}</Main>
    </Wrapper>
  )
}

export default React.memo(Aside);
