import React, { useState } from "react";
import {Card, CardImg, Button,Navbar} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,Route} from 'react-router-dom';
import PizzaForm from './components/pizzaForm'
import Confirmation from './components/confirmation';
import image from "./images/Pizza.jpg";





const App = () => {
const[orders,setOrders] = useState([
  {

  }
]);
const addNewOrder = e =>{
      let newOrder = {
    [e.target.name]:e.target.value
  }
    setOrders([...orders,newOrder])
    console.log('array of data in add function of app', orders)
}

  return (
    <>
    <Navbar color='info'>
      <h1>Lambda Eats</h1>
      <Link to = {'/'}>
      <Button color= 'info'> Home</Button>
      </Link>
    </Navbar>
     
      <Route exact path='/'>
        <Card>
          <CardImg src={image} alt='Pizza Logo'/>
          <Link to = '/pizza'>
              <Button style={{position:'absolute',left:'50%',top:'50%',
              padding:'1%',width:'15%',fontSize:'1.2rem', borderRadius:'6px'}}>Order Pizza Here</Button>
          </Link>
        </Card>
      </Route>

      <Route path='/pizza'>
        <PizzaForm addNewOrder={addNewOrder}/>
        </Route>
        <Route path ='/pizza/confirmation'>
          
          <Confirmation orders={orders}/>
         
 
           </Route>

     
     
    </>
  );
};
export default App;
