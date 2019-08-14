import React from 'react'
import {Jumbotron, Container, ListGroup, ListGroupItem} from 'react-bootstrap';
import Profile from './Profile';



let checkingAmt = 3;





function JumboTron(){
    return(
        <div className = "Jumbotron" light>
            <Jumbotron>
            <Container>
                <Profile/>
                        <h1>Welcome Back Salvador!</h1>
                        <br></br>
                        <h4>Tell us what would you like to do?</h4>

             </Container>


            <ListGroup>
                <ListGroupItem>
                   Checking: &nbsp; ${checkingAmt}
                </ListGroupItem>
                <ListGroupItem>
                    Savings: &nbsp;$
                </ListGroupItem>
                <ListGroupItem>
                    Credit Card: &nbsp;$
                </ListGroupItem>
            </ListGroup>


            </Jumbotron>
          
        </div>
    );
}
export default JumboTron