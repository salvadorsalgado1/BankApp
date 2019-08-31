import React, {Component} from 'react';
import Login from './Login';
import Balance from './Balance';
import Transactions from './Transactions';
import Freeze from './Freeze';
import Signout from './Signout';
import Transfer from './Transfer';
import Account from './Account';







export class Main extends Component{

state = {
   step:4
}



  render(){

const {step} = this.state;
      
    /* 
    
    <Login/> case 1
    <Balance/> case 2
    <Transactions/> case 3
    <Freeze/> case 4
    <Transfer/> case 5

    <Account/> case 6
    
   
    <Signout/> case 7
    
   
  
    */
       switch(step){
           case 1:
               return(
                      <div>
                        <Login/>

                      </div>
               )

           case 2:
               return(
                      <div>
                        <Balance/>
                      </div>
               )
               case 3:
                  return(
                         <div>
                           <Transactions/>
                         </div>
                  )
                  case 4:
                      return(
                             <div>
                               <Freeze/>
                             </div>
                      )
                      case 5:
                          return(
                                 <div>
                                   <Transfer/>
                                 </div>
                          )
                          case 6:
                              return(
                                     <div>
                                       <Account/>
                                     </div>
                              )
                              case 7:
                                  return(
                                         <div>
                                           <Signout/>
                                         </div>
                                  )

              default: return(<h1>d</h1>)
       }
       
  }
}

export default Main

