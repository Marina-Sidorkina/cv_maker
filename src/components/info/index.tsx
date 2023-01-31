import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
`;

const Name = styled.h1`
  box-sizing: border-box;
  font-size: 26px;
  margin-bottom: 15px;
  color: #21247d;
`;

const Position = styled.p`
  margin-top: 0;
  font-size: 22px;
  color: #21247d;
`;

const Info = (props: {name: string; position: string;}) => {
  return (
      <Wrapper>
        <Name contentEditable suppressContentEditableWarning spellCheck={false}>{props.name}</Name>
        <Position contentEditable suppressContentEditableWarning spellCheck={false}>{props.position}</Position>
      </Wrapper>
  );
}

export default React.memo(Info);
