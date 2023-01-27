import React, {Ref} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 25px #bcbcbc;
  background-color: #ffffff;
`;

const Content = (props: {children: React.ReactNode; refLink: Ref<any>}) => {
  return (
      <Wrapper>
        <div ref={props.refLink}>
          {props.children}
        </div>
      </Wrapper>
  );
}

export default React.memo(Content);
