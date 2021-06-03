import React, { useState } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

const Landing = () => {

    
    const [toDoItem,setToDoItem] = useState("");
    const [toDoList, setToDoList] =useState([]);
    
    
    // console.log(toDoList);

    return (
        <div >
            <h1 class="text-center">Your daily ticket's</h1>
            <div>
                <ToDoInput setToDoList={setToDoList} toDoList={toDoList} toDoItem={toDoItem} setToDoItem={setToDoItem}></ToDoInput>
            </div>
            <div class="container w-50 mt-5">
            <ul class="list-group">
                {
                    toDoList && toDoList.map(item=> <ToDoList item={item}></ToDoList>)
                }
                </ul>
            </div>
        </div>
    );
};

export default Landing;