import React, { useState } from 'react';

const ToDoInput = ({toDoList,toDoItem,setToDoList,setToDoItem}) => {

    // const {setToDoItem} = props.setToDoItem;
    // const {handleToDo} = props.handleToDo;

    const [infoTrack,setInfoTrack] =useState("");

    const handleToDo = () => {
        if(toDoItem){
           const todoInfo = [...toDoList,toDoItem];
           setToDoList(todoInfo);
           console.log(toDoList);
        }
   }

    const handleSubmit = () => {
        
        if(infoTrack){
            setToDoItem(infoTrack);
            // console.log(infoItem);
            handleToDo();
        }
        // handleToDo();
    }

    

    const handleInfo = (e) => {
        
        setInfoTrack(e);
    } 



    return (
        <div class="container">
           <div class="d-flex justify-content-center align-items-center" style={{height:"50vh", backgroundColor:"lightblue"}}>
                <div class="w-25">
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Input what you wanted to do!</label>
                    <input onBlur={(e)=> handleInfo(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your to do"/>
                    </div>
                    <button onClick={handleSubmit} type="button" class="btn btn-warning">Submit</button>
                </div>
           </div>
        </div>
    );
};

export default ToDoInput;