



import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import logo from '../src/assets/logo.png';

function App() {
  return (
    <>
    
      <Header />
     <main className='py-3'>
        <Container>
        <p>main page</p>
        </Container>
        </main>
   <Footer/>
    </>
  );
};

export default App;
