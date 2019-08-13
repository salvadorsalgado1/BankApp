import React from 'react';
import {
    Button, 
    ButtonGroup, 
    Container, 
    Row, 
    Col,
    Navbar,
    NavbarBrand,
    Jumbotron
    
}
 from 'react-bootstrap';


const KeyPadSize = {
 size:"1rem"
}
const ButtonSizeStyle = {
    height : "20vh",
    width:"20vw",
    justifyContent:"center"
}
const center = {
justifyContent:"center"
}


function Main()
{
    return(
        <div className = "Main">

            <Container>
             
                    <ButtonGroup>
                    <Button style = {ButtonSizeStyle} variant = "primary">Checking</Button>
                    <Button style = {ButtonSizeStyle} variant = "secondary">Savings</Button>
                    <Button style = {ButtonSizeStyle} variant = "dark">Credit</Button>
                </ButtonGroup>

                <ButtonGroup>
                    <Button style = {ButtonSizeStyle} variant = "success">Deposit Checks</Button>
                    <Button style = {ButtonSizeStyle} variant = "secondary">Bill Pay</Button>
                    <Button style = {ButtonSizeStyle} variant = "secondary">Sign Out</Button>
                </ButtonGroup>
             
            
            </Container>

        </div>
    );
}
   
export default Main



