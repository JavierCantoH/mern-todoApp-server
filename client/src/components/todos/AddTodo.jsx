// use state hook for redux
import React, { useState } from 'react';
// material ui components
import { TextField, Button } from "@material-ui/core";
// material ui styling
import { makeStyles } from "@material-ui/core/styles";
// material ui icons
import { Send } from '@material-ui/icons';
// dispatch: redux hook
import { useDispatch } from 'react-redux';
// import action creators
import { addTodo } from '../../store/actions/todoActions';

// using makeStyles
const useStyles = makeStyles({
    formStyle: {
      margin: "0px auto",
      padding: "30px",
      borderRadius: "9px",
      boxShadow: "0px 0px 12px -3px #000000",
      display: "flex",
      justifyContent: "space-between",
    },
    submitButton: {
        marginLeft: "20px",
    }
});

const AddTodo = () => {
    // using the material ui styles
    const classes = useStyles();
    // using dispatch redux hook
    const dispatch = useDispatch();
    // set up default state hook
    const [todo, setTodo] = useState({
        name: "name",
        isComplete: false
    })

    const handleSubmit = (e) => {
        // prevent the page for refreshing when submiting form
        e.preventDefault();
        // dispatch add todo action creator 
        dispatch(addTodo(todo));
        // when the function is done, reseting todo to default state
        setTodo({ 
            name: '', 
            isComplete: false
        });
    }
    

    return (
        <>
            <form noValidate autoComplete="off" className={classes.formStyle} onSubmit = { handleSubmit }>
                <TextField
                    id="enter-todo"
                    label="enterToDo"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    // default value from state
                    value = {todo.name}
                    // on change event to update our value (e) for "event"
                    // ... spread operator to spread the properties of our todo
                    onChange = {(e) => setTodo({...todo, name: e.target.value, date: new Date()})}
                />
                <Button variant="contained" color="primary" className = {classes.submitButton} type="submit">
                    <Send/>
                </Button>
            </form>
        </>
    );
}

export default AddTodo;