import React, {Component} from 'react';
import Login from './Login';
import Signout from './Signout';
import Transfer from './Transfer';

export class ViewB extends Component{

state = {
    step:1
}




render(){
const { step } = this.state;

        switch(step)
        {

            case 1:
                return(
                        <div>
                            <Transfer/>
                        </div>
                )
            case 2:
                return(
                    <div>
                        <Signout/>
                    </div>
                )
            
            
            default:return(<h1>default</h1>)


        }


     
    }
}

export default ViewB