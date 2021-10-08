import React from 'react';
// material ui components
import { Typography, ButtonGroup, Button } from "@material-ui/core";
// material ui styling
import { makeStyles } from "@material-ui/core/styles";
// material ui icons
import { Create, Delete, CheckCircle } from '@material-ui/icons';

// using makeStyles
const useStyles = makeStyles({
    todoStyle: {
      margin: "20px auto",
      padding: "20px",
      border: "2px solid #bdbdbd",
      borderRadius: "9px",
      display: "flex",
      justifyContent: "space-between",
    },
    moreStyle: {
      color: "#8f8f8f",
    },
    isComplete: {
      color: "green",
    },
    checked: {
      textDecoration: "line-through",
    },
});
  

const Todo = () => {
    // using the material ui styles
    const classes = useStyles();
    

    return (
        <>
            <div className={classes.todoStyle}>
                <div>
                    <Typography variant="subtitle1" className={classes.checked}>
                    Learn React
                    </Typography>
                    <Typography variant="subtitle1">

                    </Typography>
                    <Typography variant="body2" className={classes.moreStyle}>
                        Author: Javier
                    </Typography>
                    <Typography variant="body2" className={classes.moreStyle}>
                        Added: 4 days ago
                    </Typography>
                </div>
                <div>
                    <ButtonGroup
                        size="small"
                        aria-label="outlined primary button group"
                    >
                        <Button>
                            <CheckCircle className={classes.isComplete} />
                            <CheckCircle color="action" />
                        </Button>
                        <Button >
                            <Create color="primary" />
                        </Button>
                        <Button >
                            <Delete color="secondary" />
                        </Button>
                    </ButtonGroup>
          
                </div>
            </div>
        </>
    );
}

export default Todo;