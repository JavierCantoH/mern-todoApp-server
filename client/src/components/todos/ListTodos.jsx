import React from 'react';
// material ui components
import { Typography } from "@material-ui/core";
// material ui styling
import { makeStyles } from "@material-ui/core/styles";
// import single todo
import Todo from "./Todo";

// using makeStyles
const useStyles = makeStyles((theme) => ({
    todosStyle: {
        margin: "20px auto",
        padding: "20px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000",
      },
}));

const ListTodos = () => {
    // using the material ui styles
    const classes = useStyles();

    return (
        <>
            <div className={classes.todosStyle}>
                <Typography variant="h5">
                    theTodos;
                </Typography>
                <Todo/>
                <Todo/>
        </div>
    </>
    );
}

export default ListTodos;