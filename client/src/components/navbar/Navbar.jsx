import React from 'react';
// material ui components
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
// material ui styling
import { makeStyles } from "@material-ui/core/styles";
// react router dom
import { Link, useHistory } from "react-router-dom";
// redux hooks
import { useSelector } from 'react-redux';

// using makeStyles
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    authButton: {
      right: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linkStyle: {
      textDecoration: "none",
      color: "#fafafa",
    },
}));

const Navbar = () => {
    // using the material ui styles
    const classes = useStyles();
    // use history from react router dom
    const history = useHistory();
    // select the state from the redux store
    const state = useSelector((state) => state);
    console.log(state);
    
    // signout fucntion
    const handleSignOut = () => {
        history.push("/signin");
    };

    return (
        <>
          <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        <Link className={classes.linkStyle} to="/">
                        toDoApp;
                        </Link>
                    </Typography>
                    <>
                        <Typography variant="subtitle2" className={classes.title}>
                            Logged in as ...?
                        </Typography>
                        <Button
                            edge="end"
                            color="inherit"
                            className={classes.authButton}
                            onClick={() => handleSignOut()}
                        >
                            <Link className={classes.linkStyle} to="/">
                                SignOut
                            </Link>
                        </Button>
                    </>
                    <>
                        <Button
                            edge="end"
                            color="inherit"
                            className={classes.authButton}
                        >
                            <Link className={classes.linkStyle} to="/signin">
                                SignIn
                            </Link>
                        </Button>
                        <Button
                            edge="end"
                            color="inherit"
                            className={classes.authButton}
                        >
                            <Link className={classes.linkStyle} to="/signup">
                                SignUp
                            </Link>
                        </Button>
                    </>
                </Toolbar>
            </AppBar>
          </div>
        </>
    );
}

export default Navbar;