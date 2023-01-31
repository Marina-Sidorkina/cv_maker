import React, {useRef} from 'react';
import {Header, Footer, Content, Avatar, Aside, Contact} from './components';
import { useReactToPrint } from 'react-to-print';
import { ReactComponent as MailIcon } from '../src/assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../src/assets/icons/phone.svg';

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
          <Contact icon={<MailIcon/>} text={'nick@mail.com'}/>
          <Contact icon={<PhoneIcon/>} text={'+7 (777) 777-77-77'}/>
        </Aside>
      </Content>
      <Footer href={"https://github.com/Marina-Sidorkina/cv_maker"}/>
    </>
  );
}

export default App;
