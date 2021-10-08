import React from 'react';
// add todo file
import AddTodo from "./AddTodo";
// list todos file
import ListTodos from "./ListTodos";

const Todos = () => {
    return(
        <div>
            <AddTodo/>
            <ListTodos/>
        </div>
    );
}

export default Todos;