import React from "react";
import {Button, ButtonGroup, Col, Row, Container, Badge, Jumbotron} from 'react-bootstrap';
import JumboTron from "./JumboTron";
const ButtonSizeStyle = {
    height : "10vh",
    width:"20vw",
    display:"flex",
    justifyContent:"center",
    
    alignItems:"center",
    flexWrap:"wrap",
   flex:"1"
}


function Buttons() {
    return(
        <div className = "Buttons">
            <Jumbotron>
                <Container >
                    <Row>
                    
                        <Button style = {ButtonSizeStyle} variant = "primary">Checking</Button>
                        <Button style = {ButtonSizeStyle} variant = "secondary">Savings</Button>
                        
                    
                    </Row>
                    <Row>
                        
                            <Button style = {ButtonSizeStyle} variant = "success">Notifications&nbsp;<Badge variant = "dark">3</Badge></Button>
                            <Button style = {ButtonSizeStyle} variant = "secondary">Bill Pay</Button>
                        
                        
                    </Row>
                    <Row>
                    
                                <Button style = {ButtonSizeStyle} variant = "success">Notifications&nbsp;<Badge variant = "dark">3</Badge></Button>
                                <Button style = {ButtonSizeStyle} variant = "secondary">Bill Pay</Button>
                                
                
                    </Row>
                

            
            

            
                </Container>
            </Jumbotron>
                


        </div>
        
    );

}

export default Buttons