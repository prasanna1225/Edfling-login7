import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import GoogleIcon from '../images/google.png'; // Replace with the path to your Google icon image
import FacebookIcon from '../images/facebook.png'; // Replace with the path to your Facebook icon image
import AppleIcon from '../images/apple-logo.png'; // Replace with the path to your Apple icon image

const SocialButtons = () => {
   


  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto" className='m-2'>
          <Button  className="d-flex align-items-center social-btn "  variant="outline-success">
            <img  src={GoogleIcon} alt="Google" className="mr-2 social-img m-1" />
            Continue with Google
          </Button>
        </Col>
        <Col xs="auto" className='m-2'>
          <Button  className="d-flex align-items-center social-btn"  variant="outline-success">
            <img src={FacebookIcon} alt="Facebook" className="mr-2 social-img m-1 " />
              Continue with Facebook
          </Button>
        </Col>
        <Col xs="auto" className='m-2'>
          <Button  className="d-flex align-items-center social-btn "  variant="outline-success">
            <img src={AppleIcon} alt="Apple" className="mr-2 social-img m-1" />
             Continue with Apple
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialButtons;
