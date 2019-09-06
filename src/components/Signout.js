import React from 'react';
import {HashRouter, Route, Link} from "react-router-dom";
import {Form, FormGroup, FormLabel, InputGroup, FormControl, 
    Container, Row, Col, Card, CardGroup, Button, CardBody, 
    CardTitle, CardImg, Image, Tabs, Tab

} from 'react-bootstrap';


import logo from '../images/logo.png';
/*
const cardContainer = {

 width:"24rem",
 
 marginBottom:"10px",
 
  paddingTop:"10px"


}
const textColor = {
    color:"gray",
    fontSize:"1rem"
   
}
const backgroundCard = {
    opacity:".9",
    boxShadow:"5px 5px 5px 5px",
   
}
const marginImage = {
    marginBottom:"20px"
}
const spacingTab = {
    marginBottom:"10px"
} */



const cardContainer = {

    width:"24rem",
    
   
    
     paddingTop:"10px",
     justifyContent:"center",
     display:"flex",
     flexDirection:"column",
     alignItems:"center",
     flex:"1"
   
   
   }
   const textColor = {
       color:"gray",
       fontSize:"1.3rem"
      
   }
   const backgroundCard = {
       opacity:".9",
       boxShadow:"5px 5px 5px 5px",
       justifyContent:"center",
       display:"flex",
       flexDirection:"column",
       alignItems:"center",
       flex:"1"
      
   }
   const marginImage = {
       marginBottom:"20px",
       justifyContent:"center",
       display:"flex",
       flexDirection:"column",
       alignItems:"center",
       flex:"1"
   }
 



function Signout()
{
  
   
    return(
      
       
        <div className = "Login" >

                                                     
<Container className = "container" style = {cardContainer}>
    <Row>
        <Col>
            <Card style = {backgroundCard}>
                <CardGroup>
                    <Card.Body>
                       
                                      
                       
                           
                            <Card.Img style = {marginImage} variant="top" src = {logo} />
                            <Card.Title style = {textColor}>Signing out...</Card.Title>
                            <div className = "spinner-border text-info" role = "status" >
                                <span class= "sr-only">Loading....</span>
                            </div>
                            <Button variant = "primary">Next</Button>

                           
                                                                    
                             
                              
                    </Card.Body>
                </CardGroup>
            </Card>
        </Col>
    </Row>
</Container>

    

        
     

        </div>
    );
}

export default Signout