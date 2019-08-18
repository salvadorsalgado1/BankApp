import React from 'react'
import {Badge, Button, Card, CardBody, Container, Image, Navbar, NavbarBrand, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import Profile from '../components/Profile';
import profileImage from '../images/profilepicture.png';


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
  height:"10em",
  width:"auto"
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

let checkingAmt = 400;
let savingsAmt = 3423.23;
let creditAmt = 223.33;
let notificationsAmt = 11;
let yearJoin = 2015;

function Account()
{
    return(
        <div className = "Balance">
<div className = "navbar">
 <NavbarBrand>
        <a classname = "lead" style = {textColor} href = "/">PathWays Banking,  <p style = {textSize} className = "lead">Member since {yearJoin}</p></a>
        
    </NavbarBrand>
<div className = "navbar-nav">

     <Button variant = "dark">Sign Out</Button>
     
    
    </div>

</div>
   
   


            <Container className = "ContainerMain">
                <Row>
                    <Col xs = "12">
                        <Card style = {ContainerMain} >
                            <Card.Body >
                                <Container >
                                    <Row>
                                        
                                            <Col>
                                            <Image  style = {ImageSize} src = {profileImage}></Image>
                                            
                                            <br/>
                                            <br/>
                                            <Button variant = "primary">Change Picture</Button>
                                            
                                           
                                           
                                           
                                            </Col>
                                          
                                        
                                            <Col>
                                            <h4 className = "lead">Account Information</h4>
                                            <ListGroup>
                                                <ListGroupItem>
                                                         <p className = "lead">First Name:&nbsp;Salvador</p>                                        
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                         <p className = "lead">Last Name:&nbsp;Salgado</p>                                        
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                         <p className = "lead">City:&nbsp;Springfield</p>                                        
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                         <p className = "lead">State:&nbsp;Ohio</p>                                        
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                         <p className = "lead">Email:&nbsp;sal123@gmail.com</p>                                        
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                         <p className = "lead">Social Security:&nbsp;*****2398</p>                                        
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