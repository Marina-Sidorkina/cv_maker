import React from 'react';
import {Header, Footer, Content, Avatar} from './components';

function App() {
  return (
    <>
      <Header onClick={() => {console.log('Print clicked');}}/>
      <Content>
        <Avatar isSquare={false} onClick={() => {console.log('Avatar clicked');}}/>
      </Content>
      <Footer href={"https://github.com/Marina-Sidorkina/cv_maker"}/>
    </>
  );
}

export default App;
