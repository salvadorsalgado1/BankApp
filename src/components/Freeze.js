import React from 'react'
import {Badge, Button, Card, CardBody, Container, Image, Input, Navbar, NavbarBrand, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import Profile from '../components/Profile';
import profileImage from '../images/profilepicture.png';

const cardStyle = {
  
  
        
   }
const textFlex = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}
const buttonStyle= {
    
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
const cardShadow = {
   
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
let accountStatus = "Unlocked";
function Freeze()
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
                        <Card style = {cardShadow}>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        
                                            <Col>
                                            <div className = "lead">
                                            <p>
                                                Lost your card? You have the ability to lock your account. 
                                                This bank is insured by the FDIC up to a million dollars. 
                                                Call this number 1-800-876-9083 for any questions regarding your account. 
                                            </p>
                                            <br/>
                                                
                                                    
                                                
                                            <h4>Status:&nbsp; {accountStatus}</h4>
                                            </div>
                                           
                                            
                                            
                                            
                                           
                                           
                                            </Col>
                                        
                                            <Col>
                                            <h4 className = "lead">Accounts</h4>
                                            <ListGroup>
                                                <ListGroupItem>
                                                <h4 className = "lead">Checking:&nbsp; $&nbsp;{checkingAmt}{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Savings:&nbsp; $&nbsp;{savingsAmt}{/*javascript name goes here */}</h4>
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Credit:&nbsp; $&nbsp;{creditAmt}{/*javascript name goes here */}</h4>
                                                </ListGroupItem>
                                            </ListGroup>
                                            </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col >
                        <Card style = {cardShadow} >
                            <Card.Body>
                                <Container >
                                    <Row>

                                       

                                        <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "6" lg = "6" xlg = "6">
                                        <Button  size="lg" style = {buttonStyle} variant = "primary">Freeze Account</Button>                                      
                                        </Col>

  
                                        <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "6" lg = "6" xlg = "6">
                                        <Button  size="lg" style = {buttonStyle} variant = "primary">Unfreeze Account</Button>
                                        </Col>

                                       

                                       
                                         
                                    </Row>
                                    <Row>
                                        <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "12" lg = "12" xlg = "12">
                                        <Button  size="lg" style = {buttonStyle} variant = "primary">Home</Button>
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
export default Freeze