import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
        textDecoration: 'none'
    },
}));


export default function Header() {
    const classes = useStyles();

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated')
        setIsAuthenticated(isAuthenticated)
    }, [isAuthenticated])

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Vector
          </Typography>
                    {isAuthenticated ?
                        <Link to='/logout' className={classes.link}>
                            <Button color="primary" variant="outlined" className={classes.link}>
                                Logout
          </Button>
                        </Link> :

                        <Link to='/login' className={classes.link}>
                            <Button color="primary" variant="outlined" className={classes.link}>
                                Login
          </Button>
                        </Link>
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}