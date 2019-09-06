import React from 'react'
import {Badge, Button, Card, CardBody, Container, Image, Navbar, NavbarBrand, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import Profile from '../components/Profile';
import {Router, Link} from 'react-router-dom';
import profileImage from '../images/profilepicture.png';
import Balance from './Balance';
import NavbarPage from './NavbarPage';

const textFlex = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}
const buttonStyle = {
    
}
const containerStyle = {



}
const ImageSize = {
width:"15rem"
}

const textColor = {
    color:"white"
}
const ContainerMain = {
   
    boxShadow:"5px 5px 5px 5px"
}
const textSize = {
    fontSize : "1rem"
}
const textSizeAccount = {
    fontSize:"1.4rem",
    
}
const containerSize = {
    height:"100%"
    
}


let checkingAmt = 400;
let savingsAmt = 3423.23;
let creditAmt = 223.33;
let notificationsAmt = 11;
let yearJoin = 2015;

function Account()
{
    return(
        <div className = "Account">


   
   <NavbarPage/>

            <Container style={containerSize}>
                <Row>
                    <Col xs = "12">
                        <Card style = {ContainerMain}>
                            <Card.Body >
                                <Container >
                                    <Row>
                                        
                                            <Col>
                                            <Image  style = {ImageSize} src = {profileImage}></Image>
                                            
                                            <br/>
                                            <br/>

                                            <Button variant = "primary" size  = "lg">Change Picture</Button>
                                            <br/>
                                            <br/>
                                           
                                            </Col>
                                          
                                        
                                            <Col>
                                            <h4 style = {textSizeAccount} className = "lead">Account Information</h4>
                                            <ListGroup className = "text-left">
                                                <ListGroupItem>
                                                         <p style = {textSizeAccount} className = "lead"><strong>First Name:</strong>&nbsp;Salvador</p>                                        
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                         <p style = {textSizeAccount}className = "lead"><strong>Last Name:</strong>&nbsp;Salgado</p>                                        
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                         <p style = {textSizeAccount}className = "lead"><strong>City:</strong>&nbsp;Springfield</p>                                        
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                         <p style = {textSizeAccount}className = "lead"><strong>State:</strong>&nbsp;Ohio</p>                                        
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                         <p style = {textSizeAccount}className = "lead"><strong>Email:</strong>&nbsp;sal123@gmail.com</p>                                        
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                         <p style = {textSizeAccount}className = "lead"><strong>Social Security:</strong>&nbsp;*****2398</p>                                        
                                                </ListGroupItem>

                                               
                                            </ListGroup>

                                            
                                            </Col>

                                            
                                    </Row>

                                   
                        
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>

                   
                </Row>
            </Container>
          

        </div>
    );
}
export default Account