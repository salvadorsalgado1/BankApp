import React from 'react'
import {Badge, Button, Card, CardBody, Container, Form, FormGroup, Image, Input, Navbar, NavbarBrand, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import Profile from '../components/Profile';
import profileImage from '../images/profilepicture.png';
import Balance from './Balance';
import {Router, Link} from 'react-router-dom';
import NavbarPage from './NavbarPage';
 
const cardStyle = {
  
  
        
   }
const textFlex = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
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
    height:"100%"
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
        <div className = "Transfer">
            
           <NavbarPage/>
            
   


            <Container style = {containerSize}>
                <Row>
                    <Col  xs = "12">
                        <Card style = {cardShadow}>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        
                                            <Col>
                                                <p className = "lead" style = {textSize}>Accounts</p>
                                                <ListGroup>
                                                <ListGroupItem>
                                                <p className = "lead"  style = {textSize}>Checking:&nbsp; $&nbsp;{checkingAmt}{/*javascript name goes here */}</p>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <p className = "lead"style = {textSize}>Savings:&nbsp; $&nbsp;{savingsAmt}{/*javascript name goes here */}</p>
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <p className = "lead"style = {textSize}>Credit:&nbsp; $&nbsp;{creditAmt}{/*javascript name goes here */}</p>
                                                </ListGroupItem>
                                               
                                           
                                                <br/>

                                            
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
                                                                        <option className = "lead">Checking</option>
                                                                        <option className = "lead">Savings</option>
                                                                        <option className = "lead">Credit</option>
                                                                    </select> 
                                                           
                                                                    <Form.Control type = "email" placeholder = "Amount" />                                              
                                                                </Col>
                                                            </Row>


                                                                <Row>
                                                                    <Col>
                                                                    <label className = "lead">Transfer To:</label>
                                                                    </Col>
                                                                </Row>
                                                                        
                                                                <Row>
                                                                    <Col>
                                                                          <select id = "inputState" class = "form-control">
                                                                          <option className = "lead">Checking</option>
                                                                        <option className = "lead">Savings</option>
                                                                        <option className = "lead">Credit</option>
                                                                        </select> 
                                                                    </Col> 
                                                                </Row>

                                                        </Container>
                                                    </Form.Group>
                                                 </Form>
                                            </Col>
                                    </Row>
                                    <br />  
                                    <br />  
                                    <Row>                                                        
                                            <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "12" lg = "12" xlg = "12">

                                                <Button  className = "btn-block" size="lg" variant = "primary">Transfer</Button>
                                            </Col>

                                            <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "12" lg = "12" xlg = "12">
                                                <Link to = "balance" component = {Balance}>
                                                <Button className = "btn-block" size="lg" variant = "primary">Cancel</Button>
                                                </Link>
                                                                        
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