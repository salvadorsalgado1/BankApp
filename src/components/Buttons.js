import React from "react";
import {Button, ButtonGroup, Col, Row, Container, Badge} from 'react-bootstrap';
const ButtonSizeStyle = {
    height : "10vh",
    width:"20vw",
    
    justifyContent:"center"
}

function Buttons() {
    return(
        <div className = "Buttons">
            <Container >
             <Row>
             <ButtonGroup fluid aria-label= "First group" md>
                 <Button style = {ButtonSizeStyle} variant = "primary">Checking</Button>
                 <Button style = {ButtonSizeStyle} variant = "secondary">Savings</Button>
                 <Button style = {ButtonSizeStyle} variant = "dark">Credit</Button>
             </ButtonGroup>
             </Row>
         <Row>
         <ButtonGroup fluid aria-label = "Second group" md>
            
            <Button style = {ButtonSizeStyle} variant = "success">Notifications<Badge variant = "dark">3</Badge></Button>
            <Button style = {ButtonSizeStyle} variant = "secondary">Bill Pay</Button>
                <Button style = {ButtonSizeStyle} variant = "secondary">Sign Out</Button>
            </ButtonGroup>
         </Row>

          

           
         

         
         </Container>


        </div>
        
    );

}

export default Buttons