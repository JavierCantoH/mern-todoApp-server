import React from 'react';
// material ui components
import { TextField, Button } from "@material-ui/core";
// material ui styling
import { makeStyles } from "@material-ui/core/styles";
// material ui icons
import { Send } from '@material-ui/icons';

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
    

    return (
        <>
            <form noValidate autoComplete="off" className={classes.formStyle}>
                <TextField
                    id="enter-todo"
                    label="enterToDo"
                    variant="outlined"
                    autoFocus
                    fullWidth
                />
                <Button variant="contained" color="primary" className = {classes.submitButton} type="submit">
                    <Send/>
                </Button>
            </form>
        </>
    );
}

export default AddTodo;