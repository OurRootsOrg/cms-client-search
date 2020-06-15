import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

export default function LifeEventPicker(): JSX.Element {
  const classes = useStyles();

  const [state, setState] = useState({
    birth: true,
    residence: false,
    marriage: false,
    death: false,
    anyEvent: false,
  });

  const addBirthTextField = (): any => {
    setState({
      birth: !state.birth,
      residence: state.residence,
      marriage: state.marriage,
      death: state.death,
      anyEvent: state.anyEvent,
    });
  };

  const addResidenceTextField = (): any => {
    setState({
      birth: state.birth,
      residence: !state.residence,
      marriage: state.marriage,
      death: state.death,
      anyEvent: state.anyEvent,
    });
  };

  const addMarriageTextField = (): any => {
    setState({
      birth: state.birth,
      residence: state.residence,
      marriage: !state.marriage,
      death: state.death,
      anyEvent: state.anyEvent,
    });
  };

  const addDeathTextField = (): any => {
    setState({
      birth: state.birth,
      residence: state.residence,
      marriage: state.marriage,
      death: !state.death,
      anyEvent: state.anyEvent,
    });
  };

  const addAnyEventTextField = (): any => {
    setState({
      birth: state.birth,
      residence: state.residence,
      marriage: state.marriage,
      death: state.death,
      anyEvent: !state.anyEvent,
    });
  };

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h6">
        Search with a life event
      </Typography>
      <Typography style={{ marginBottom: 20 }}>
        <Link onClick={addBirthTextField}>Birth</Link>
        {' | '}
        <Link onClick={addResidenceTextField}>Residence</Link>
        {' | '}
        <Link onClick={addMarriageTextField}>Marriage</Link>
        {' | '}
        <Link onClick={addDeathTextField}>Death</Link>
        {' | '}
        <Link onClick={addAnyEventTextField}>Any</Link>
      </Typography>

      <div>
        {state.birth ? (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="birthplace"
                variant="outlined"
                required
                fullWidth
                id="birthplace"
                label="Birthplace"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="startYear"
                label="Year Start"
                name="startYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="endYear"
                label="Year End"
                name="endYear"
              />
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>

      <div>
        {state.residence ? (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="birthplace"
                variant="outlined"
                required
                fullWidth
                id="birthplace"
                label="Birthplace"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="startYear"
                label="Year Start"
                name="startYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="endYear"
                label="Year End"
                name="endYear"
              />
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
}));
