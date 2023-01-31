import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';


const Wrapper = styled.div`
  padding: 0 40px;
`;

const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 25px;
  margin-bottom: 10px;
  color: #6299df;
  font-size: 18px;
  line-height: 25px;
  
  :focus {
    background-color: #f4f4f4;
  }
  
  svg {
    margin-right: 10px;
  }
`;

const Contacts = () => {
  return (
    <Wrapper>
      <Item contentEditable suppressContentEditableWarning spellCheck={false}>
        <MailIcon contentEditable={false} />
        nick@gmail.com
      </Item>
      <Item contentEditable suppressContentEditableWarning spellCheck={false}>
        <PhoneIcon contentEditable={false} />
        +1 588-6500
      </Item>
    </Wrapper>
  );
}

export default React.memo(Contacts);
