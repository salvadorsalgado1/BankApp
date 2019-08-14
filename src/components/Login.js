import React from 'react';
import {Form, FormGroup, FormLabel, InputGroup, FormControl, 
    Container, Row, Col, Card, CardGroup, Button, CardBody, 
    CardTitle, CardImg, Image, Tabs, Tab

} from 'react-bootstrap';




import { generateKeyPair } from 'crypto';
import logo from '../images/logo.png';

const cardContainer = {

width:"35vw",
paddingTop:"2vh"


}
const textColor = {
    color:"gray"
   
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
}

function Login()
{
    return(
        <div className = "Login">

                                                     
<Container className = "container"  style = {cardContainer}>
    <Row>
        <Col>
            <Card style = {backgroundCard}>
                <CardGroup>
                    <Card.Body>
                        <Card.Img style = {marginImage} variant="top" src = {logo} />
                                      
                        <Tabs style = {spacingTab} defaultActiveKey = "First">
                            <Tab eventKey = "First" title = "Sign In">

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
                                        <Form.Group controlId = "formHorizontalEmail">
                                            <Container>
                                                <Row>
                                                    <Col>                                                             
                                                        <Form.Control type = "email" placeholder = "Enter your Email" />
                                                    </Col>
                                                            
                                                </Row>
                                            </Container>
                                        </Form.Group>

                                        <Form.Group controlId = "formHorizontalEmail">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Form.Control type = "password" placeholder = "Enter your password"/>
                                                    </Col>
                                                </Row>
                                            </Container>                 
                                        </Form.Group>

                                        <Form.Group>
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
    );
}

export default Login