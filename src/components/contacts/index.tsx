import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';


const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 30px;
`;

const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 25px;
  margin-bottom: 15px;
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

const Contacts = () => {
  return (
    <Wrapper>
      <Item>
        <MailIcon />
        <span contentEditable suppressContentEditableWarning spellCheck={false}>nick@gmail.com</span>
      </Item>
      <Item >
        <PhoneIcon />
        <span contentEditable suppressContentEditableWarning spellCheck={false}>+1 588-6500</span>
      </Item>
    </Wrapper>
  );
}

export default React.memo(Contacts);
