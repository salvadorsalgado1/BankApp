import React from 'react';
import {Form, FormGroup, FormLabel, InputGroup, FormControl, Container, Row, Col, Card, CardGroup, Button, CardBody, CardTitle, CardImg } from 'react-bootstrap';
import { generateKeyPair } from 'crypto';

const cardContainer = {
height:"50vh",
width:"30vw",
paddingTop:"20vh"

}
const textColor = {
    color:"gray"
   
}
const backgroundCard = {
    opacity:".9",
    boxShadow:"5px 5px 5px 5px"

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
                                                    <Card.Title>
                                                        Card
                                                    </Card.Title>

                            <Form>
                                <Form.Group controlId = "formHorizontalEmail">

                                                <Contain>
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

                                                        <Row>
                                                      
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

                                                        <Row>
                                                      
                                                    </Row>

                                            </Container>
                                            </Form.Group>
                                      
                                        

                            </Form>
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