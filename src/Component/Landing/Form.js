import React, { useState } from 'react';

const Form = (props) => {

    const [input,setInput] = useState("");
    const addTodo = props.addTodo;
    
    // console.log(toDoList);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            id: Math.floor(Math.random()*10000),
            text: input
        }
        addTodo(item);

        setInput("")
    }

    return (
        <div >
            <div class = "d-flex" >
                <input onChange={(e)=>handleChange(e)} class="form-control" type="text" placeholder="Input your to do" value={input} name="text" />
                <button onClick={(e)=>handleSubmit(e)}  class="my-2 ms-5 btn btn-warning">Submit</button>
            </div>
        </div>
    );
};

export default Form;