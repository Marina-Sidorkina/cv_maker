import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: ${(props: {isSquare: boolean}) => props.isSquare ? '10px' : '50%'};
  background-color: #eeeeee;
  cursor: pointer;
`;

const Avatar = (props: {
  isSquare: boolean;
  onClick: Function;
}) => {
  return <Wrapper isSquare={props.isSquare} onClick={() => props.onClick()}/>
}

export default React.memo(Avatar);
