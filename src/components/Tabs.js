import React from 'react';



const tabstyle ={
    color:'blue'
    
};
const navBackground={

color:'black'
};

function Tabs(){

 


    return(



<div className = "Tabs">


<div className = "container">

     
    <ul className = "nav nav-tabs justify-content-center" role = "tablist">
                    <li className = "nav-item">
                        <a style = {navBackground} role = "tab" className = "nav-link active" data-toggle = "tab" href = "#Login">Login</a>
                       
                    </li>

                    <li className = "nav-item">
                        <a style = {navBackground} role = "tab" class = "nav-link" data-toggle = "tab" href = "#SignUp">Sign Up</a>
                        
                    </li>
     </ul>


                <div className = "tab-content">
                    <div role = "tabpanel"id = "Login" className = "tab-pane fade in active">
                        <h4>Login</h4>
                        <p>This is the login portion</p>
                    </div>
                    <div role = "tabpanel" id = "SignUp" className = "tab-pane fade">
                        <h4>Sign upp</h4>
                        <p>This is the sign up portion</p>
                    </div>

                </div>

        </div> 






</div>

       

  



    );
}

export default Tabs