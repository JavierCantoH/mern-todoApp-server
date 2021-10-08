const todoReducer = (state = [], action) => {
    // check action types and then update the state according to the action performed
    switch (action.type) {
        case "GET_TODOS":
            return action.todos.data;
        case "ADD_TODO":
            return [action.todo.data, ...state];
        case "UPDATE_TODO":
            return state.map((todo) => 
                // checking if the updated todo from actions matches with the todo updated
                // maping array of todos
                // if it doesnt match just return the old todo and check the next one in the array til de id matches
                todo._id === action.todo.data._id ? action.todo.data : todo
            )
        default:
            return state;
    }
};
  
export default todoReducer;