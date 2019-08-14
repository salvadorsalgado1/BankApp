import React from 'react';
import {Image} from 'react-bootstrap';
import HeaderImage from '../images/Landscape.jpg';

const imageSize = {
    height:'100vh',
    width:'auto'

}
function Header()
{
    return(
        <div className = "Header">
              <Image  fluid style = {imageSize} src = {HeaderImage}
              
              
              
              
              />
           
        </div>
    );
}

export default Header