import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap';

function JumboTron(){
    return(
        <div className = "Jumbotron">
            <Jumbotron>
            <Container>
                        <h1>Welcome Back Salvador!</h1>
                        <br></br>
                        <h4>Tell us what would you like to do?</h4>
                </Container>
            </Jumbotron>
          
        </div>
    );
}
export default JumboTron