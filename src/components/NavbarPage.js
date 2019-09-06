import React from 'react';
import {Navbar, NavbarBrand, Button, Container, Row, Col} from 'react-bootstrap';
import {Router, Link, Switch, Route} from 'react-router-dom';
import Login from './Login';
import Balance from './Balance';




const textColor = {
color:"white"
}

const textSize = {
fontSize : "1rem"
}
let yearJoin = 2015;











function NavbarPage() {
    return(

 <div className = "navbar">

    
      <NavbarBrand>
        <a classname = "lead" style = {textColor} href = "/">PathWays Banking,<p style = {textSize} className = "lead">Member since {yearJoin}</p></a>
        
    </NavbarBrand>
  <div className = "navbar-nav">
    <Container>
    <Row>
          <Col>
          <Link to = "balance" component = {Balance}>
          <Button  variant = "info">Home</Button>

          </Link>
         
        </Col>
        
        <Col>

        <Switch>
        <Link to = "/" component = {Login}>
        <Button  variant = "dark">Sign Out</Button>
        
        </Link>
        </Switch>
       
      
        </Col>
      

    </Row>
</Container>
     
     
    
    </div>

</div>
      
     
    );
}

export default NavbarPage