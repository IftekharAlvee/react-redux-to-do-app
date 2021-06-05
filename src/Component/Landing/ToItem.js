import React from 'react';

const ToItem = (props) => {
    const {text,id} = props.item;
    // const {handleDelete} = props.handleDelete;
    return (
        
        <div class=" d-flex justify-content-center py-5">
             <div class="w-50">
                <li class="list-group-item  list-group-item-danger">{text}</li>
             </div>
            <div><button class="btn btn-danger mx-5" onClick={()=>props.handleDelete(id,text)}>delete</button></div>
        </div>
    );
};

export default ToItem;