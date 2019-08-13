import React from 'react';
import {Image} from 'react-bootstrap';
import HeaderImage from '../images/WallStreet.jpg';

const imageSize = {
    height:'30vh',
    width:'100vw'

}
function Header()
{
    return(
        <div className = "Header">
              <Image  fluid style = {imageSize} src = {HeaderImage}/>

        </div>
    );
}

export default Header