import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 300px;
`;

const Top = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
`;

const Main = styled.div`
  box-sizing: border-box;
  width: 300px;
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
