import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 35px;
`;

const Item = styled.div`
  box-sizing: border-box;
  min-height: 25px;
  color: #6299df;
  font-size: 18px;
  line-height: 25px;
  
  :focus {
    background-color: #f4f4f4;
  }
`;

const Contacts = () => {
  return (
    <Wrapper>
      <Item contentEditable suppressContentEditableWarning spellCheck={false}>nick@gmail.com</Item>
      <Item contentEditable suppressContentEditableWarning spellCheck={false}>+1 588-6500</Item>
    </Wrapper>
  );
}

export default React.memo(Contacts);
