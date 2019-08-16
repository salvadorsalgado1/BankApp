import React from 'react'
import {Badge, Button, Card, CardBody, Container, Image, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
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
const buttonStyle = {
    
}
const containerStyle = {



}
const ImageSize = {
  height:"10em",
  width:"auto"
}



let checkingAmt = 4;
let savingsAmt = 3;
let creditAmt = 2;
let notificationsAmt = 7;


function Balance()
{
    return(
        <div className = "Balance">
            <Container className = "ContainerMain">
                <Row>
                    <Col xs = "12">
                        <Card >
                            <Card.Body>
                                <Container>
                                    <Row>
                                        
                                            <Col>
                                            <Image  style = {ImageSize} src = {profileImage}></Image>
                                            <br/>
                                            <br/>
                                            
                                            <h4 className = "lead">Welcome Back Salvador! {/*javascript name goes here */}</h4>
                                            
                                           
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
                        <Card >
                            <Card.Body>
                                <Container >
                                    <Row>

                                       

                                        <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "6" lg = "6" xlg = "6">
                                        <Button  size="lg" style = {buttonStyle} variant = "primary">Transfer</Button>                                      
                                        </Col>

                                        

                                       

                                        <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "6" lg = "6" xlg = "6">
                                        <Button  size="lg" style = {buttonStyle} variant = "primary">Account</Button>
                                        </Col>

                                        <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "6" lg = "6" xlg = "6">
                                        <Button  size="lg" style = {buttonStyle} variant = "primary">Freeze</Button>
                                        </Col>

                                        <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "6" lg = "6" xlg = "6">
                                        <Button  size="lg" style = {buttonStyle} variant = "success">Sign Out</Button>
                                        </Col>
                                         <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "12" lg = "12" xlg = "12">                                    
                                        <Button size="lg" style = {buttonStyle} variant = "primary">Notifications&nbsp;<Badge variant = "dark">{notificationsAmt}</Badge></Button>
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