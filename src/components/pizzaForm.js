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

    const[errors,setErrors] = useState(defaultState);

   

    const formSchema = yup.object().shape({
    name: yup.string().required('Name is a required field').min(2,'Name must be at least 2 characters'),
    pizzaSize: yup.string().required('Please select your size'),
    pizzaSauce: yup.string().required('Must select Sauce'),
    pepperoni:yup.boolean(),
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

    return (
        <>
<Route exact path='/pizza'>
        <Form onSubmit={submitForm} style={{padding:'1% 5%',fontSize:'1.2rem', }}>
            <FormGroup check style={{width:'35%'}}>
                <legend>Name</legend>
                <input data-cy='name' type='text' name='name' value={formData.name} onChange={handleChange}/>
                {errors.name.length<0?null: <p className="error">{errors.name}</p>}
                
               
            </FormGroup>
          
             <FormGroup check>
                <label check htmlFor='size'>Choice Of Size</label>
                
                    <select id ='size' name='pizzaSize' style={{width:'15%'}} value = {formData.pizzaSize} onChange={handleChange}>
                        <option>Choose  Pizza Size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                    {errors.pizzaSize.length<0?null: <p className="error">{errors.pizzaSize}</p>}
                    
               
               
            </FormGroup>

            <FormGroup  checked={formData.pizzaSauce} name='pizzaSauce'  check  >
                <legend >Choice Of Sauce</legend>
                <FormGroup check>
                
                <Input id ='original' type='radio' name='pizzaSauce'  value='original'  onChange={handleChange} />
               <label htmlFor='original'>Original Red</label> 
           
            </FormGroup>

            <FormGroup >
             
               
                <Input id ='garlic' type='radio' name='pizzaSauce' value = 'garlic' onChange={handleChange}/>
               <label htmlFor='garlic'>Garlic Ranch</label> 
               
            </FormGroup>

            <FormGroup>
                
              
                <Input id='bbq' type='radio' name='pizzaSauce' value = 'bbq'    onChange={handleChange}/>
               <label htmlFor= 'bbq'>BBQ Souce</label> 
                
            </FormGroup>
            <FormGroup >
                
               
                <Input id='spinach' type='radio' name='pizzaSauce' value = 'spinach'   onChange={handleChange} />
              <label htmlFor = 'spinach' >Spinach Alfredo</label>  
               
            </FormGroup>
        
            </FormGroup>


            <FormGroup   >
                <label >Add Topping</label>
                <FormGroup check>
                
                <Input id='pepperoni' type='checkbox' name='pepperoni'   checked={formData.pepperoni} onChange={handleChange}/>
                <label htmlFor = 'pepperoni'>Pepperoni </label>
             
            </FormGroup>

            <FormGroup check>
             
                <Label check>
                <Input type='checkbox'  name='mushroom'  checked={formData.mushroom} onChange={handleChange}/>
                mushroom
                </Label>
            </FormGroup>

            <FormGroup check>
                
                <Label check>
                <Input type='checkbox'  name='bacon'  checked={formData.bacon} onChange={handleChange}/>
                Canadian Bacon
                </Label>
            </FormGroup>
            <FormGroup check>
                
                <Label check>
                <Input type='checkbox'  name='olives' checked={formData.olives} onChange={handleChange}/>
                Olives
                </Label>
            </FormGroup>
          
            </FormGroup>
            <FormGroup check style={{width:'35%'}}>
                <legend>Special Instruction</legend>
                <Input type='textarea' name='special' value={formData.special} onChange={handleChange}/>
                { <p className="error">{errors.special}</p>}
            </FormGroup>
            
       

        {/* <Link to ='/pizza/confirmation'> */}
             <Button disabled={buttonDisabled} > Add To Order</Button>
        {/* </Link> */}
           

        </Form>
        </Route>
     {/* <Route>
         <Confirmation confirmation={confirmation}/>
     </Route> */}

        </>
    )
}

export default PizzaForm