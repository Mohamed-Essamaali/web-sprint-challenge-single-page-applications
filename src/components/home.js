import React from 'react';
import {Card, CardImg, Button,Navbar} from 'reactstrap';

const Home = props=>{
    let homePageImg = {'./Assets/Pizza.jpg'}
    return (
        <div className= 'home-container'>
         <Card>
             <CardImg src= {homePageImg}/>
         </Card>
            <button onClick = {props.order}>Order pizza</button>
        </div>
    
    )
}
export default Home