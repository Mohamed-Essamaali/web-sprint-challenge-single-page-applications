import React from 'react'


const Confirmation = (props)=>{


    return(
            <>
            <h1 style={{position:'absolute',left:'30%',top:'40%', fontSize:'5rem'}}> Congrats Pizza is on its way</h1>
     {props.orders.map(confi=>{
    return (
        <div className='confirmation-container'>
            <h3>Name: {confi.name}</h3>
            <p>Pizza Size: {confi.pizzaSize}</p>
            <p>Sausage: {confi.sausage}</p>
            <p>Topping:<ul>
                        <li>Pepperani: {confi.pepperani}</li>
                        <li>Sausage: {confi.sausage}</li>
                        <li>Canadian Bacon: {confi.bacon}</li>
                        <li>Olives: {confi.olives}</li>
                        
                        </ul></p>  
            <p>Special Instruction:{confi.special}</p>
        </div>
    )
})}
           



            </>


    )
}
export default Confirmation