import React from "react";
import {Card, CardImg, Button,Navbar} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,Route} from 'react-router-dom';
import PizzaForm from './component/Form'
import Home from './component/Home'


const App = () => {


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
        <CardImg src={require('./Assets/Pizza.jpg')} />
        <Link to = {'/pizza'}>

        <Button style={{position:'absolute',left:'50%',top:'50%',
        padding:'1%',width:'15%',fontSize:'1.2rem', borderRadius:'6px'}}>Order Pizza</Button>
      
      </Link>
      </Card>
        </Route>

      <Route path='/pizza'>
        <PizzaForm/>
        </Route>

     
     
    </>
  );
};
export default App;
