import React from 'react';
import {HashRouter, Route, Link} from "react-router-dom";
import {Form, FormGroup, FormLabel, InputGroup, FormControl, 
    Container, Row, Col, Card, CardGroup, Button, CardBody, 
    CardTitle, CardImg, Image, Tabs, Tab

} from 'react-bootstrap';


import logo from '../images/logo.png';
import ViewB from './ViewB';


/*
const cardContainer = {

 width:"24rem",
 
 marginBottom:"10px",
 
  paddingTop:"10px"


}
const textColor = {
    color:"gray",
    fontSize:"1rem"
   
}
const backgroundCard = {
    opacity:".9",
    boxShadow:"5px 5px 5px 5px",
   
}
const marginImage = {
    marginBottom:"20px"
}
const spacingTab = {
    marginBottom:"10px"
} */



const cardContainer = {

    width:"24rem",
    
   
    
     paddingTop:"10px",
     justifyContent:"center",
     display:"flex",
     flexDirection:"column",
     alignItems:"center",
     flex:"1"
   
   
   }
   const textColor = {
       color:"gray",
       fontSize:"1rem"
      
   }
   const backgroundCard = {
       opacity:".9",
       boxShadow:"5px 5px 5px 5px",
       justifyContent:"center",
       display:"flex",
       flexDirection:"column",
       alignItems:"center",
       flex:"1"
      
   }
   const marginImage = {
       marginBottom:"20px",
       justifyContent:"center",
       display:"flex",
       flexDirection:"column",
       alignItems:"center",
       flex:"1"
   }
   const spacingTab = {
       marginBottom:"10px",
       
   }



function Login()
{
  
   
    return(


        <div className = "Login">

            


        
      
        
        
        
        
       
       
        <div className = "Login" >

                                                     
<Container className = "container" style = {cardContainer}>
    <Row>
        <Col>
            <Card style = {backgroundCard}>
                <CardGroup>
                    <Card.Body>
                       
                                      
                        <Tabs style = {spacingTab} defaultActiveKey = "First">
                            <Tab eventKey = "First" title = "Sign In">
                            <Card.Img style = {marginImage} variant="top" src = {logo} />
                            <Card.Title style = {textColor} className = "lead">Already a Member?</Card.Title>

                                <Form>

                                    <Form.Group controlId = "formHorizontalEmail">
                                        <Container>
                                            <Row>
                                                <Col>        
                                                    <Form.Control type = "email" placeholder = "Email" />
                                                </Col>                                                       
                                            </Row>
                                        </Container>
                                    </Form.Group>

                                    <Form.Group controlId = "formHorizontalEmail">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Control type = "password" placeholder = "Password"/>
                                                </Col>
                                            </Row>
                                        </Container>                 
                                    </Form.Group>

                                    <Form.Group>
                                        <Container>
                                            <Row>
                                                <Col>
                                                 <Button block variant = "outline-primary">Login</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form.Group>
                                        
                                </Form>
                                                                    
                            </Tab>
                            <Tab eventKey= "Second" title = "Sign Up">
                                <Card.Title style = {textColor} className = "lead">Become a Member!</Card.Title>
                                    <Form>

                                    <Form.Group controlId = "formFname">
                                            <Container>
                                                <Row>
                                                    <Col>                                                             
                                                        <Form.Control type = "email" placeholder = "First Name" />
                                                    </Col>
                                                            
                                                </Row>
                                            </Container>
                                        </Form.Group>

                                        <Form.Group controlId = "formLname">
                                            <Container>
                                                <Row>
                                                    <Col>                                                             
                                                        <Form.Control type = "email" placeholder = "Last Name" />
                                                    </Col>
                                                            
                                                </Row>
                                            </Container>
                                        </Form.Group>
                                        <Form.Group controlId = "formReePassword">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Form.Control type = "City" placeholder = "City"/>
                                                    </Col>
                                                </Row>
                                            </Container>                 
                                        </Form.Group>
                                        <Form.Group controlId = "formReePassword">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Form.Control type = "State" placeholder = "State"/>
                                                    </Col>
                                                </Row>
                                            </Container>                 
                                        </Form.Group>
                                        <Form.Group>

                                        <Form.Group controlId = "formEmail">
                                            <Container>
                                                <Row>
                                                    <Col>                                                             
                                                        <Form.Control type = "email" placeholder = "Enter your Email" />
                                                    </Col>
                                                            
                                                </Row>
                                            </Container>
                                        </Form.Group>

                                        <Form.Group controlId = "formPassword">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Form.Control type = "password" placeholder = "Enter your password"/>
                                                    </Col>
                                                </Row>
                                            </Container>                 
                                        </Form.Group>

                                        <Form.Group controlId = "formReePassword">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Form.Control type = "password" placeholder = "Social Security Number"/>
                                                    </Col>
                                                </Row>
                                            </Container>                 
                                        </Form.Group>

                                      
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Button block variant = "outline-primary">Create Account</Button>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Form.Group>
                                    </Form>
                                </Tab>
                        </Tabs>        
                    </Card.Body>
                </CardGroup>
            </Card>
        </Col>
    </Row>
</Container>

    

        
     </div>

        </div>

         
    );
}

export default Login