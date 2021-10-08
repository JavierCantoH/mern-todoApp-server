const todoReducer = (state = [], action) => {
    // check action types and then update the state according to the action performed
    switch (action.type) {
        case "ADD_TODO":
            return [action.data.todo, ...state];
    
        default:
            return state;
    }
};
  
export default todoReducer;