import React from 'react';
import {Buttons, Image} from 'react-bootstrap';
import profileImage from '../images/profilepicture.png';

const ImageSize = {
  
}
function Profile(){
    return(
        <div className = "Profile">
            <Image style = {ImageSize} src = {profileImage}></Image>
        </div>
    );
}

export default Profile