import React, { useEffect } from "react";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import Cards from "./Card";

import { actionCreators } from "./store";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2)
  },
  cardMedia: {
    height: "30vh"
  },
  firstElement: {
    marginTop: theme.spacing(2)
  },
  form: {
    paddingRight: theme.spacing(2)
  }
}));

function NewClient(props) {
  const classes = useStyles();

  const { error, client } = props;

  const { GetClients, handleClientUpdate, handleClientSubmit } = props;

  useEffect(() => {
    GetClients();
  }, [GetClients]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        <Paper className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CardMedia
                className={classes.cardMedia}
              // image="https://source.unsplash.com/random"
              />
              {/* {client.platform === "linux" && (
                <CardMedia className={classes.cardMedia} image="./linux.png" />
              )}
              {client.platform === "mac" && (
                <CardMedia
                  className={classes.cardMedia}
                  image="./mac_black.png"
                />
              )}
              {client.platform === "windows" && (
                <CardMedia
                  className={classes.cardMedia}
                  image="./windows_grey.png"
                />
              )} */}
            </Grid>
            <Grid item xs={8}>
              <Grid container justify="center" spacing={3}>
                <Grid item xs={12} className={classes.firstElement}>
                  <TextField
                    error={client.device.length === 0 && error}
                    label="Device Name"
                    fullWidth
                    name="device"
                    value={client.device}
                    onChange={e => handleClientUpdate("device", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="platform-select">Platform</InputLabel>
                    <Select
                      error={client.platform.length === 0 && error}
                      value={client.platform}
                      autoWidth
                      onChange={e =>
                        handleClientUpdate("platform", e.target.value)
                      }
                      inputProps={{
                        name: "platform",
                        id: "platform-select"
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="linux">Linux</MenuItem>
                      <MenuItem value="mac">Mac</MenuItem>
                      <MenuItem value="windows">Windows</MenuItem>
                      <MenuItem value="ios">iOS</MenuItem>
                      <MenuItem value="android">Android</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="mode-select">Mode</InputLabel>
                    <Select
                      value={client.mode}
                      error={client.mode.length === 0 && error}
                      onChange={e => handleClientUpdate("mode", e.target.value)}
                      autoWidth
                      inputProps={{
                        name: "mode",
                        id: "mode-select"
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="lan">LAN</MenuItem>
                      <MenuItem value="wan">WAN</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={client.range.length === 0 && error}
                    label="Extra IP Range"
                    placeholder='192.168.0.0/24, 172.0.0.0/24'
                    fullWidth
                    name="range"
                    value={client.range}
                    onChange={e => handleClientUpdate("range", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleClientSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Cards />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    clients: state.newReducer.clients,
    client: state.newReducer.client,
    error: state.newReducer.error
  };
};

const mapDispatchToProps = dispatch => ({
  GetClients: () => {
    dispatch(actionCreators.GetClients());
  },
  handleClientUpdate: (field, value) => {
    dispatch(actionCreators.handleClientUpdate(field, value));
  },
  handleInputUpdate: (name, value) => {
    dispatch(actionCreators.handleInputUpdate(name, value));
  },
  handleClientSubmit: () => {
    dispatch(actionCreators.handleClientSubmit());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewClient);
