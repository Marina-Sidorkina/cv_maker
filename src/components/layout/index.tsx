import React from 'react';

const Layout = (props: {children: React.ReactNode}) => {
  return (
    <div className="Layout">
      {props.children}
    </div>
  );
}

export default React.memo(Layout);
