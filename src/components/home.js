import React from 'react';
import {Card, CardImg, Button} from 'reactstrap';
import image from "../images/Pizza.jpg";
import {Link} from 'react-router-dom'

const Home = props=>{
   
    return (
        <div className= 'home-container'>
        <Card>
          <CardImg src={image} alt='Pizza Logo'/>
          <Link to = '/pizza'>
              <Button style={{position:'absolute',left:'50%',top:'50%',
              padding:'1%',width:'15%',fontSize:'1.2rem', borderRadius:'6px'}}>Order Pizza Here</Button>
          </Link>
        </Card>
        </div>
    
    )
}
export default Home

