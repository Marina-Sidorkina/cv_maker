import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{image: string}>`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
`;

const Preview = (props: {image: string;}) => {
  return <Wrapper image={props.image} />;
}

export default React.memo(Preview);
