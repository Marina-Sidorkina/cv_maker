import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  bottom: 0;
  background-color: #21247d;
  color: #ffffff;
`;

const Link = styled.a`
  color: #ffffff;
`;

const Footer = (props: {href: string;}) => {
  return <Wrapper>
    <Link href={props.href} target="_blank">GitHub</Link>
  </Wrapper>
}

export default React.memo(Footer);
