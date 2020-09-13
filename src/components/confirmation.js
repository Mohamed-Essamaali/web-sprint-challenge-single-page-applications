
import styled from 'styled-components';
import React from 'react'



const Confirmation = (order)=>{
    
    const Styles = styled.div`
    position:absolute;
    font-size: 15%;
    padding:10% 15%;
    margin: 5% 20%;
    color:#555;
   
    
    `

    let {name,pizzaSize,pizzaSause,pepperoni,mushroom,bacon,olives,special} = order

    console.log('order in confirmation',order)
    
   
  
    return(
        <div  className='confirmation-container' >

        <Styles>
            <h1 > Congrats Pizza is on its way</h1>
            <h3 >
                
                <span>Hi</span>
                <span style={{fontSize:'2rem',color:'#a2f517'}}> {`${name}`}</span> 
                {` We will get you pizza soon`} 
              
             </h3>
        </Styles>
        
        
        {/* <img src={'./images/wayPizza.jpg'} alt='Confirmation logo '/> */}

        </div>


    )
}
export default Confirmation