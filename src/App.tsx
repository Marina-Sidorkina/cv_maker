import React, {useRef} from 'react';
import {Header, Footer, Content, Avatar, Aside, Contacts} from './components';
import { useReactToPrint } from 'react-to-print';

function App() {
  const componentRef = useRef(null);
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  })

  const avatar = <Avatar isSquare={false} onClick={() => console.log('Avatar clicked')}/>;

  return (
    <>
      <Header onClick={handlePrintClick}/>
      <Content refLink={componentRef}>
        <Aside top={avatar}>
          <Contacts/>
        </Aside>
      </Content>
      <Footer href={"https://github.com/Marina-Sidorkina/cv_maker"}/>
    </>
  );
}

export default App;
