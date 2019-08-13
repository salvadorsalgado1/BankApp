import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap';
import Profile from './Profile';


function JumboTron(){
    return(
        <div className = "Jumbotron" light>
            <Jumbotron fluid>
            <Container>
                <Profile/>
                        <h1>Welcome Back Salvador!</h1>
                        <br></br>
                        <h4>Tell us what would you like to do?</h4>
                </Container>
            </Jumbotron>
          
        </div>
    );
}
export default JumboTron