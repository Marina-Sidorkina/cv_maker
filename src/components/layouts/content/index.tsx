import React, {Ref} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 25px #bcbcbc;
  background-color: #ffffff;
`;

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 25px;
  width: 100%;
  height: 45px;
  background-color: #046398;
  font-family: 'Inconsolata', monospace;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
`;

const Content = (props: {children: React.ReactNode; refLink: Ref<any>}) => {
  return (
      <Wrapper>
        <div ref={props.refLink}>
          <Header>Резюме</Header>
          <Main>{props.children}</Main>
        </div>
      </Wrapper>
  );
}

export default React.memo(Content);
