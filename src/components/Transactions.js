import React from 'react'
import {Badge, Button, Card, CardBody, Container, Image, Navbar, NavbarBrand, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import Profile from '../components/Profile';
import profileImage from '../images/profilepicture.png';
import {Scrollbar} from "react";
import {Router, Link} from 'react-router-dom';
import Balance from './Balance';
import NavbarPage from './NavbarPage';

const cardStyle = {
  
  
        
}
const textFlex = {
 display:"flex",
 flexDirection:"column",
 justifyContent:"center",
 alignItems:"center"
}

const listGroupStyle = {
    border:"2px rgb(211,211,211) solid",
   
}

const ImageSize = {
height:"10rem",
width:"auto"
}

const textColor = {
 color:"white"
}
const cardShadow = {

 boxShadow:"5px 5px 5px 5px",
 
}
const textSize = {
 fontSize : "1rem"
}
const scrollClass = {
height:"150px",
overflowy:"scroll"
}



let checkingAmt = 400;
let savingsAmt = 3423.23;
let creditAmt = 223.33;
let notificationsAmt = 11;
let yearJoin = 2015;


function Transactions()
{
    return(
        <div className = "Transactions">
           



       <NavbarPage/>

            <Container className = "ContainerMain" >
                <Row>
                    <Col xs = "12">
                        <Card style = {cardShadow}>
                            <Card.Body>
                                <Container>
                                 
                                    <Row>

                                       <Container>
                                          <p className = "lead">Transaction History</p>
                                             
 
                                              
                                                <ListGroup className = "scrollClass" style = {listGroupStyle}>
{/*use of ids */}
                                                <ListGroupItem>
                                                <h5 style = {textSize} className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h5>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h5 style = {textSize}className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h5>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h5 style = {textSize}className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h5>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h5 style = {textSize}className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h5>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h5 style = {textSize}className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h5>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h5 style = {textSize}className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h5>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h5 style = {textSize}className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h5>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h5 style = {textSize}className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h5>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h5 style = {textSize}className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h5>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h5  style = {textSize}className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h5>                                                  
                                                </ListGroupItem>

                                                </ListGroup>

                                                  
                                            

                                        
                                          
                                       </Container>

            
                                      
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
export default Transactions
