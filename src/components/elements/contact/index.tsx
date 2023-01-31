import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 25px;
  margin-bottom: 15px;
  padding: 0 30px;
  color: #6299df;
  font-size: 18px;
  line-height: 25px;
  
  :focus {
    background-color: #f4f4f4;
  }
  
  svg {
    flex-shrink: 0;
    margin-right: 10px;
  }
  
  span {
    max-width: 230px;
  }
`;

const Contact = (props: {icon: React.ReactElement; text: string}) => {
  return (
    <Wrapper>
      {props.icon}
      <span contentEditable suppressContentEditableWarning spellCheck={false}>
        {props.text}
      </span>
    </Wrapper>
  );
}

export default React.memo(Contact);
