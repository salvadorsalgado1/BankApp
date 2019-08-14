import React from 'react';
import {Form, FormGroup, FormLabel, InputGroup, FormControl, Container, Row, Col} from 'react-bootstrap';

function Login()
{
    return(
        <div className = "Login">


<Container >
    <Row>
        <Col>
        <Form>
                <Form.Group controlId = "fromBasicEmail">

                <Form.Label>Email Address</Form.Label>
                <Form.Control type = "email" placeholder = "enter your email"/>
                <Form.Text className = "text-muted">Email is secure</Form.Text>

                </Form.Group>
              

            </Form>

        </Col>
    </Row>
</Container>

        
     

        </div>
    );
}

export default Login