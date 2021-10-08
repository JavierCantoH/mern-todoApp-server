const todoReducer = (state = [], action) => {
    // check action types and then update the state according to the action performed
    switch (action.type) {
        case "GET_TODOS":
            return action.todos.data;
        case "ADD_TODO":
            return [action.todo.data, ...state];
    
        default:
            return state;
    }
};
  
export default todoReducer;