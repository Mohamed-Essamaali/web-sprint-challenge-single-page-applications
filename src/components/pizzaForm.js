import React, { useState,useEffect } from 'react'
import {Form,Input,FormGroup,Label,Button} from 'reactstrap';
import {Route,Link} from 'react-router-dom';
import * as yup from 'yup';
import Confirmation from './confirmation';
import axios from 'axios';
import '../App.css';

const PizzaForm = (props)=>{
    const[buttonDisabled,setButtonDisabled] = useState(true);

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

 

    const[formData,setFormData] = useState(defaultState);

    const[errors,setErrors] = useState({
        name:'',
        pizzaSize:'',
        pizzaSauce:'',
        pepperoni:'',
        mushroom:'',
        bacon:'',
        olives:'',
        special:''
    });

   

    const formSchema = yup.object().shape({
    name: yup.string().required('Name is a required field').min(2,'Name must be at least 2 characters'),
    pizzaSize: yup.string().required('Please select your size'),
    pizzaSauce: yup.string().required('Must select Sauce'),
    pepperoni:yup.boolean().oneOf([true],'you need to choose your topping'),
    mushroom:yup.boolean(),
    bacon:yup.boolean(),
    olives:yup.boolean(),
    special: yup.string().optional("Enter your special notes")
});

useEffect(() => {
   
    formSchema.isValid(formData).then(valid => {
            setButtonDisabled(!valid);
    });
  }, [formData]);

 
    

    const validateChange = e =>{yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid =>{
            setErrors({...errors,[e.target.name]:''})
        })
        .catch(err=>{
            setErrors({...err,[e.target.name]:err.errors[0]})
        })
    }
    const handleChange = e=>{
        /* e.persist allows us to use the synthetic event in an async manner (inside of validateChange fn).
    We need to be able to use it after the form validation */
        e.persist();
        let value = e.target.type ==='checkbox' ? e.target.checked : e.target.value
        setFormData({...formData,[e.target.name]:value})
        console.log('state Changed',formData);
        
        validateChange(e);
       
      
    }
    const submitForm = e =>{
        e.preventDefault();
        console.log('form submitted');
        axios
        .post('https://reqres.in/api/users',formData)
        .then(resp=>{
            console.log('data posted' ,resp.data)

            // setConfirmation(resp.data);
            // props.addNewForm(confirmation);
            setFormData(...formData,resp.data)
            props.addNewOrder(formData)
          
            
        })
        .catch()
    }

    //some styling form

    const styles = {display:'flex',alignItems:'center',width:'10%'}

    return (
        <>
<Route exact path='/pizza'>
        <Form onSubmit={submitForm} style={{padding:'1% 5%',fontSize:'1.2rem', }}>
            <FormGroup check style={{width:'35%'}}>
                <h4>Name</h4>
                <input data-cy='name' type='text' name='name' value={formData.name} onChange={handleChange}/>
                {errors.name.length<0?null: <p className="error">{errors.name}</p>}
                
               
            </FormGroup>
          
             <FormGroup  style={{display:'flex',flexDirection:'column',marginBottom:'1.2%'}} check>
                <h4 check htmlFor='size'>Choice Of Size</h4>
                
                    <select id ='size' name='pizzaSize' style={{width:'15%'}} value = {formData.pizzaSize} onChange={handleChange}>
                        <option value='none'>Choose  Pizza Size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                    {formData.pizzaSize.value==='none' ? <p className="error">{errors.pizzaSize}</p> :null}
                    
               
               
            </FormGroup>

            <FormGroup  checked={formData.pizzaSauce} name='pizzaSauce'  check  >
                <h4 >Choice Of Sauce</h4>
                <FormGroup check>
                
                <Input id ='original' type='radio' name='pizzaSauce'  value='original'  onChange={handleChange} />
               <label htmlFor='original'>Original Red</label> 
           
            </FormGroup>

            <FormGroup style={styles} check>
             
               
                <Input id ='garlic' type='radio' name='pizzaSauce' value = 'garlic' onChange={handleChange}/>
               <label htmlFor='garlic'>Garlic Ranch</label> 
               
            </FormGroup>

            <FormGroup style={styles} check>
                
              
                <Input id='bbq' type='radio' name='pizzaSauce' value = 'bbq'    onChange={handleChange}/>
               <label htmlFor= 'bbq'>BBQ Souce</label> 
                
            </FormGroup>
            <FormGroup style={styles} check>
                
               
                <Input id='spinach' type='radio' name='pizzaSauce' value = 'spinach'   onChange={handleChange} />
              <label htmlFor = 'spinach' >Spinach Alfredo</label>  
               
            </FormGroup>
        
            </FormGroup>


            <FormGroup   >
                <h4>Add Topping</h4>
                <FormGroup style={styles} check>
                <input id='pepperoni' type='checkbox' name='pepperoni'   checked={formData.pepperoni} onChange={handleChange}/>
                <label htmlFor = 'pepperoni'>Pepperoni </label>
            </FormGroup>
            {errors.pepperoni.length>0?<p className='error'>{errors.pepperoni}</p>:null}

            <FormGroup style={styles} check>
                <input id='mushroom' type='checkbox'  name='mushroom'  checked={formData.mushroom} onChange={handleChange}/>
               <label htmlFor = 'mushroom'> mushroom</label>
            </FormGroup>

            <FormGroup style={styles} check>
                <input id='bacon' type='checkbox'  name='bacon'  checked={formData.bacon} onChange={handleChange}></input>
                <label htmlFor ='bacon'>Canadian Bacon</label>
            </FormGroup>

            <FormGroup style={styles} check>
                <input id='olives'  type='checkbox'  name='olives' checked={formData.olives} onChange={handleChange}/>
               <label  htmlFor='olives'> Olives</label>  
            </FormGroup>
          
         </FormGroup>
            <FormGroup check >
                <legend>Special Instruction</legend>
                <input type='textarea' name='special' value={formData.special} onChange={handleChange}/>
                { <p className="error">{errors.special}</p>}
            </FormGroup>
            
       

        <Link to ='/pizza/confirmation'>
             <Button disabled={buttonDisabled} > Add To Order</Button>
        </Link>
           

        </Form>
        </Route>
     {/* <Route>
         <Confirmation confirmation={confirmation}/>
     </Route> */}

        </>
    )
}

export default PizzaForm