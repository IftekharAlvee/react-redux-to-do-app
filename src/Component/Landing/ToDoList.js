import React, { useState } from 'react';
import Form from './Form';
import ToItem from './ToItem';

const ToDoList = () => {
    const [todos,setTodos] = useState([]);

    const addTodo = (todo) => {
        const newTodo = [...todos, todo ]
        setTodos(newTodo);
        console.log(newTodo);
    };

    // let newSystem = [];
    const handleDelete = (id) =>{
        // const index = todos.map(item => {
        //     return item.id;
        // }).indexOf(id);
        // const newSystem = todos.splice(index, 1);
        // console.log(newSystem);
        const removedArr = [...todos].filter(todo => todo.id !== id);
        console.log(removedArr);
        setTodos(removedArr);
    }

    return (
        <div >
            
            <div style={{backgroundColor:"#2f5d62"}}>
                <div class="text-center pt-5 text-white">
                    <h1>To-do App</h1>
                </div>
                <div class="d-flex justify-content-center align-items-center " style={{height:"30vh"}}>
                    <div>
                        <Form addTodo={addTodo}></Form>
                    </div>
                </div> 
            </div>

            <div style={{backgroundColor:"#5e8b7e", minHeight:"100vh"}} >
                <div class="container">
                    
                    <div class="">
                        {
                            todos?.map(item=> <ToItem item={item} handleDelete={handleDelete}></ToItem>)   
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ToDoList;