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
const buttonStyle = {
 
}
const containerStyle = {




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
   
   


            <Container className = "ContainerMain" style = {containerStyle}>
                <Row>
                    <Col xs = "12">
                        <Card style = {cardShadow}>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        
                                            <Col>
                                            <Image  style = {ImageSize} src = {profileImage}></Image>
                                            <br/>
                                            <br/>
                                            
                                            <h3 className = "lead">Welcome Back, Salvador! {/*javascript name goes here */}</h3>
                                           
                                           
                                            </Col>
                                        
                                            <Col >
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

                                    <Row>

                                       <Container>
                                          
                                             
 
                                              
                                                <ListGroup className = "scrollClass">
{/*use of ids */}
                                                <ListGroupItem>
                                                <h4 className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                <h4 className = "lead">Type:&nbsp;Gas Transaction:&nbsp;Transfer from Checking to Savings{/*javascript name goes here */}</h4>                                                  
                                                </ListGroupItem>

                                                </ListGroup>

                                                  
                                            

                                        
                                          
                                       </Container>

            
                                         <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "12" lg = "12" xlg = "12">  
                                         <Link to = "balance" component = {Balance}>
                                         <Button size="lg" style = {buttonStyle} variant = "primary">Home</Button>
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
export default Transactions
