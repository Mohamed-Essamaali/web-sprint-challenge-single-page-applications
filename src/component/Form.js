import React, { useState } from 'react'
import {Form,Input,FormGroup,Dropdown,DropdownToggle,DropdownMenu,Label} from 'reactstrap';

const PizzaForm = ()=>{



    const[dropdownOpen, setDropdownOpen] = useState(false);
    const toggle= ()=>{
        setDropdownOpen(prevState=>!prevState);
    }

    const[formData,setFormData] = useState({
       size:'',
       souce:'',
        topping:'',
        special:''
    });

    const handleChange = e=>{
        setFormData({...formdata,[e.target.name]:e.target.value})
    }
    const handleTopping = e=>{
        setFormData({...formdata,[e.target.name]:e.target.checked})
    }

    return (
        <>

        <Form>
            {/* <FormGroup>
            <legend>Choice Of Size</legend>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle>
                    Pizza Size
                </DropdownToggle>
                <DropdownMenu>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </DropdownMenu>
               

                </Dropdown>
            </FormGroup> */}
             <FormGroup>
                <label >
                Choice Of Size
                </label>
                <select >
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </FormGroup>

            <FormGroup check>
                <legend >Choice Of Souce</legend>
                <FormGroup check>
                <Label check>
                <Input type='radio' name='souce' value = 'red' onChange={handleChange}/>
                Original Red
                </Label>
            </FormGroup>

            <FormGroup check>
             
                <Label check>
                <Input type='radio' name='souce' value = 'garlic' onChange={handleChange}/>
                Garlic Ranch
                </Label>
            </FormGroup>

            <FormGroup check>
                
                <Label check>
                <Input type='radio' name='garlic' value = 'bbq' onChange={handleChange}/>
                BBQ Souce
                </Label>
            </FormGroup>
            <FormGroup check>
                
                <Label check>
                <Input type='radio' name='souce' value = 'spinach' onChange={handleChange}/>
                Spinach Alfredo
                </Label>
            </FormGroup>
            
            </FormGroup>


            <FormGroup check>
                <legend >Add Topping</legend>
                <FormGroup check>
                <Label check>
                <Input type='checkbox' name='pepper' value = 'pepper' checked={false} onChange={handleTopping}/>
                Pepperani
                </Label>
            </FormGroup>

            <FormGroup check>
             
                <Label check>
                <Input type='checkbox' name='sousage' value = 'sousage'checked={false} onChange={handleTopping}/>
                Sousage
                </Label>
            </FormGroup>

            <FormGroup check>
                
                <Label check>
                <Input type='checkbox' name='bacon' value = 'caBacon'checked={false} onChange={handleTopping}/>
                Canadian Bacon
                </Label>
            </FormGroup>
            <FormGroup check>
                
                <Label check>
                <Input type='checkbox' name='italian' value = 'itSousage'checked={false} onChange={handleTopping}/>
                Spicy Italian Sousage
                </Label>
            </FormGroup>
            
            </FormGroup>
            <FormGroup check>
                <legend>Special INstruction</legend>
                <Input type='textarea' name='special'value={formdata.special} onChange={handleChange}/>
            </FormGroup>
            <Button>Add To Order</Button>

        </Form>

        </>
    )
}

export default PizzaForm