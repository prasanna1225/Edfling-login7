import './index.css';
import Card from 'react-bootstrap/Card';
import {Col, Row, Form,Button, FormGroup} from 'react-bootstrap';

import Pic from './images/login-7.jpg';
import Horizontal from './components/Horizontal';
import SocialButtons from './components/SocialButtons';
function App() {
  
  return (
   <>
    <Card className='body-box mx-auto' >
     <Row className='mx-5'>
      <Col md={6} >
       <img className='img-style ' src={Pic} alt='pic'/>
      </Col>
      <Col md={6} className='right-part '>
        <h5 className='main-heading m-3' >Join Edfling as a</h5>
        <Button className='first-button'>User</Button>{' '}
        <Button variant="outline-secondary">Instructor</Button>{' '}
       <Button variant="outline-secondary">TA</Button>{' '}
       
      <h4 className="m-3" style={{fontWeight:600,color:'#215D4F',textAlign:'center'}}>Login</h4>
      <div style={{ display: 'grid', placeItems: 'center' }}>
      <form>
      <FormGroup >
      <Form.Control className="m-2 form" type="text" placeholder="Enter your user name" />
      <Form.Control className="m-2 form" type="email" placeholder="Enter your email address" />
      
      </FormGroup>
      </form>
    </div>
    <Button className='login-button' >Login</Button>
    <Horizontal text="or"/>
    <SocialButtons/>
     </Col>
     
     </Row>
    </Card>
   </>
  );
}

export default App;
