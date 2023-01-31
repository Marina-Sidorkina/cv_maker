import React, {useMemo, useRef} from 'react';
import {Header, Footer, Content, Avatar, Aside, Contact, Main, Info} from './components';
import { useReactToPrint } from 'react-to-print';
import { ReactComponent as MailIcon } from '../src/assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../src/assets/icons/phone.svg';

function App() {
  const componentRef = useRef(null);

  const avatar = <Avatar isSquare={false} onClick={() => console.log('Avatar clicked')}/>;

  const defaults = useMemo(() => ({
    mail: 'nick@mail.com',
    phone: '+7 (777) 777-77-77',
    GitHub: 'https://github.com/Marina-Sidorkina/cv_maker',
    name: 'Имя Фамилия',
    position: 'Должность'
  }), []);

  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Header onClick={handlePrintClick}/>
      <Content refLink={componentRef}>
        <Aside top={avatar}>
          <Contact icon={<MailIcon />} text={defaults.mail}/>
          <Contact icon={<PhoneIcon />} text={defaults.phone}/>
        </Aside>
        <Main>
          <Info name={defaults.name} position={defaults.position}/>
        </Main>
      </Content>
      <Footer href={defaults.GitHub}/>
    </>
  );
}

export default App;
