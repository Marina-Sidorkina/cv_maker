import React from 'react';

const Title = (props: {children: React.ReactNode; level: 1 | 2}) => {
  return (
      <h1>{props.children}</h1>
  );
}

export default React.memo(Title);
