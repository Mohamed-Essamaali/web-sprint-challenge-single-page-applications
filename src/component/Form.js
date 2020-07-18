import React from 'react'
import {Form,Input,FormGroup} from 'reactstrap';

const PizzaForm = ()=>{

    return (
        <>

        <Form>
            <FormGroup>
            <legend>Choice Of Size</legend>
            <Input>
                <option>0 </option>
                <option>1 </option>
                <option>2 </option>
                <option>3 </option>

                </Input>
            </FormGroup>
            

        </Form>

        </>
    )
}

export default PizzaForm