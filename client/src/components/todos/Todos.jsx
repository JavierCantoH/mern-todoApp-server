// use state hook for redux
import React, { useState } from 'react';
// add todo file
import AddTodo from "./AddTodo";
// list todos file
import ListTodos from "./ListTodos";

const Todos = () => {
    // RAISING THE STATE
    // Tdos.jsx is the parent of add todo and list todo, and todo.jsx is a child of list todos
    // set up default state hook
    const [todo, setTodo] = useState({
        name: "name",
        isComplete: false
    })
    return(
        <div>
            {/* sending as props the state to add todo and list todos */}
            <AddTodo todo = { todo } setTodo = { setTodo }/>
            <ListTodos setTodo = { setTodo }/>
        </div>
    );
}

export default Todos;