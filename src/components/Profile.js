import React from 'react';
import {Buttons, Image} from 'react-bootstrap';
import profileImage from '../images/profilepicture.png';

const ImageSize = {
   
   
        boxShadow:"5px 5px 5px",
        width:"35vw",
        height:"auto"
   
}
function Profile(){
    return(
        <div className = "Profile" style = {ImageSize}>
            <Image src = {profileImage}></Image>
        </div>
    );
}

export default Profile