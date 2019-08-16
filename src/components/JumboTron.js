import React from 'react'
import {Jumbotron, Container, ListGroup, ListGroupItem} from 'react-bootstrap';
import Profile from './Profile';



let checkingAmt = 3;
const containerflex = {
    display:"flex",
    justifyContent:"center",
    
    alignItems:"center",
    flexWrap:"wrap",
   flex:"1"
}

const JumboTronContainer = {
  backgroundColor:"black"
}



function JumboTron(){
    return(
        <div className = "Jumbotron" light>
            
            <div className = "d-flex justify-content-center">
            <Jumbotron>
                <Container >
                <Profile/>
                        <h1>Welcome Back Salvador!</h1>
                        <br></br>
                        <h4>Tell us what would you like to do?</h4>

          


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
            </Container>
            </Jumbotron>
                </div>
            

            
          
        </div>
    );
}
export default JumboTron