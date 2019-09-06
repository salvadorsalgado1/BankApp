import React from 'react'
import {Badge, Button, Card, CardBody, Container, Image, Navbar, NavbarBrand, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import Profile from '../components/Profile';
import profileImage from '../images/profilepicture.png';
import Transactions from './Transactions';
import Freeze from './Freeze';
import Account from './Account';
import Transfer from './Transfer';
import NavbarPage from './NavbarPage';
import {Router, Route, BrowserRouter, Link, HashRouter} from "react-router-dom";


const textFlex = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}
const buttonStyle = {
    display:"brick"
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
   
    boxShadow:"5px 5px 5px 5px",
   height:"100%"
}
const textSize = {
    fontSize : "1rem"
}

let checkingAmt = 400;
let savingsAmt = 3423.23;
let creditAmt = 223.33;
let notificationsAmt = 11;
let yearJoin = 2015;

function Balance()
{
    return(
        <div className = "Balance">

   
   

<NavbarPage/>
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
                                            
                                            <h3 className = "lead">Welcome Back, Salvador! {/*javascript name goes here */}</h3>
                                           
                                           
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


                                    <Row>

                                    <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "6" lg = "6" xlg = "6">
                                            <Link to = "transfer" component = {Transfer}>
                                            <Button  className = "btn-block" size="lg" style = {buttonStyle} variant = "primary">Transfer</Button>                                      
                                            </Link>
                                      
                                        </Col>

  
                                        <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "6" lg = "6" xlg = "6">
                                            <Link to = "account" component = {Account}>
                                            <Button  className = "btn-block" size="lg" style = {buttonStyle} variant = "primary">Account</Button>
                                            </Link>
                                        
                                        </Col>

                                        <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "6" lg = "6" xlg = "6">
                                            <Link to = "freeze" component = {Freeze}>
                                            <Button  className = "btn-block" size="lg" style = {buttonStyle} variant = "info">Freeze</Button>
                                            </Link>
                                       
                                        </Col>

                                        <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "6" lg = "6" xlg = "6">

                                        <Link to = "transactions" component = {Transactions}>
                                        <Button  className = "btn-block" size="lg" style = {buttonStyle} variant = "primary">Transactions</Button>
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
export default Balance