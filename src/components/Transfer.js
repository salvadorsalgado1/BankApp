import React from 'react'
import {Badge, Button, Card, CardBody, Container, Form, FormGroup, Image, Input, Navbar, NavbarBrand, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
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
const navTextSize = {
    fontSize: "1rem",
    color:"white"
}
const textSize = {
    fontSize : "1rem"
}
const containerSize = {
    height:"2vw"
}

let checkingAmt = 400;
let savingsAmt = 3423.23;
let creditAmt = 223.33;
let notificationsAmt = 11;
let yearJoin = 2015;
let accountStatus = "Unlocked";
function Transfer()
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
            
   


            <Container style = {containerSize}>
                <Row>
                    <Col  xs = "12">
                        <Card style = {cardShadow}>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        
                                         
                                        
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
                                                <div className = "lead">
                                           
                                                <br/>

                                                </div>
                                                </ListGroup>
                                            </Col>

                                            <Col>
                                           
                                            <Form>


                                                
                                                    <Form.Group controlId = "formAccountList">
                                                        <Container>
                                                            <p className = "lead">Transfer between accounts.</p>
                                                            <Row>                                                   
                                                                <Col>                                                    
                                                                    <select id = "inputState" class = "form-control">
                                                                        <option>Checking</option>
                                                                        <option>Savings</option>
                                                                        <option>Credit</option>
                                                                    </select> 
                                                           
                                                                    <Form.Control type = "email" placeholder = "Amount" />                                              
                                                                </Col>
                                                            </Row>


                                                                <Row>
                                                                    <Col>
                                                                    <label>Transfer To:</label>
                                                                    </Col>
                                                                </Row>
                                                                        
                                                                <Row>
                                                                    <Col>
                                                                          <select id = "inputState" class = "form-control">
                                                                            <option>Checking</option>
                                                                            <option>Savings</option>
                                                                            <option>Credit</option>
                                                                        </select> 

                                                                    

                                                                    </Col> 
                                                                </Row>

                               
                                                                        
                                                             
                                                            
                                                        </Container>
                                                    </Form.Group>



                                                </Form>
                                            </Col>
                                    </Row>

                                    <Row>
                                                                    
                                                                    <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "12" lg = "12" xlg = "12">
                                                                        <Button  size="lg" style = {buttonStyle} variant = "primary">Transfer</Button>
                                                                    </Col>
                                                                    <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "12" lg = "12" xlg = "12">
                                                                        <Button  size="lg" style = {buttonStyle} variant = "primary">Cancel</Button>
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
export default Transfer