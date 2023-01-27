import React from 'react';

const Label = (props: {id: string; children: React.ReactNode}) => {
  return (
    <label htmlFor={props.id}>{props.children}</label>
  );
}

export default React.memo(Label);
