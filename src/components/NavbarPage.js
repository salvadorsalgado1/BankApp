import React from 'react';
import {Navbar, NavbarBrand} from 'react-bootstrap';

function NavbarPage() {
    return(
<div className = "NavbarPage">
        <Navbar bg = "light" variant = "light">
          <NavbarBrand >
            Welcome to the page!
          </NavbarBrand>
        </Navbar>
</div>
      
     
    );
}

export default NavbarPage