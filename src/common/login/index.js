import React, { useState } from "react";
import {
    Container,
    Paper,
    Grid,
    CssBaseline,
    TextField,
    Button,
    CardMedia
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
    },
    cardMedia: {
        height: "25vh"
    },
    paper: {
        paddingBottom: theme.spacing(5)
    }
}));

export default function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const [loginBtnText, setLoginBtnText] = useState('login')

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        if (error) {
            setError(false)
        }
        if (name === 'username') {
            setUsername(value)
        }
        else if (name === 'password') {
            setPassword(value)
        }
    }

    const handleSubmit = () => {
        if (username.length === 0 || password.length === 0) {
            setError(true)
        }
        else {
            setError(false)
            setLoading(true)
            setLoginBtnText('loading')
            // TODO
            // login api call
            setTimeout(() => {
                setLoading(false)
                setLoginBtnText('logined')
                props.history.replace('/new')
            }, 2000);
        }
    }
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xs" className={classes.root}>
                <Paper className={classes.paper}>

                    <Grid container direction="column" spacing={2}>
                        <Grid container item justify="center" spacing={0}>
                            <Grid item xs={12}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                />
                            </Grid>
                        </Grid>
                        <Grid container item justify="center" spacing={0}>
                            <Grid item xs={8}>
                                <TextField label="username" name='username' fullWidth value={username} error={username.length === 0 && error} onChange={e => { handleChangeInput(e) }} />
                            </Grid>
                        </Grid>
                        <Grid container item justify="center" spacing={0}>
                            <Grid item xs={8}>
                                <TextField label="password" type='password' name='password' fullWidth value={password} error={password.length === 0 && error} onChange={e => { handleChangeInput(e) }} />
                            </Grid>
                        </Grid>
                        <Grid container item justify="center" spacing={0}>
                            <Grid item xs={8}>
                                <Button variant="contained" fullWidth color="primary" disabled={loading || error} onClick={() => handleSubmit()}>
                                    {loginBtnText}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment>
    );
}
