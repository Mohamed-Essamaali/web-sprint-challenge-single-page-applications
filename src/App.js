import React, { useState } from "react";
import { Button,Navbar} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,Route} from 'react-router-dom';
import PizzaForm from './components/pizzaForm'
import Confirmation from './components/confirmation';
import Home from './components/home'
import image from './images/wayPizza.jpg'




const App = () => {
  const defaultState = {
    name:'',
    pizzaSize:'',
    pizzaSauce:'',
    pepperoni:false,
    mushroom:false,
    bacon:false,
    olives:false,
    special:''
 }
const[order,setOrder] = useState(defaultState);


console.log('order in App js',order)
  return (
    <div className='home-container'>
    <Navbar color='info'>
      <h1>Lambda Eats</h1>
      <Link to = {'/'}>
        <Button color= 'info'> Home</Button>
      </Link>
    </Navbar>
     
    <Route exact path='/'>
      <Home />
    </Route>


      <Route exact path='/pizza'>
        <PizzaForm order = {order} setOrder={setOrder}/>
      </Route>

        
      
        
       <Route  path='/pizza/confirmation'>
          <Confirmation
            name={order.name} 
          //  image={image}
           />  

        </Route>
     
      
       
      
    
   

       
       
           

     
     
    </div>
  );
};
export default App;
