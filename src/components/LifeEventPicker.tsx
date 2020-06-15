import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

export default function LifeEventPicker(props: any): JSX.Element {
  const classes = useStyles();

  const [state, setState] = useState({
    birth: false,
    residence: true,
    marriage: true,
    death: true,
    anyEvent: true,
  });

  const addBirthTextField = () => {
    setState({ birth: !state.birth });
  };

  const addResidenceTextField = () => {
    setState({ residence: !state.residence });
  };

  const addMarriageTextField = () => {
    setState({ marriage: !state.marriage });
  };

  const addDeathTextField = () => {
    setState({ death: !state.death });
  };

  const addAnyEventTextField = () => {
    setState({ anyEvent: !state.anyEvent });
  };

  console.log(props);

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
      <h1>{state.birth ? 'open' : 'closed'}</h1>
      <h1>{state.residence ? 'open' : 'closed'}</h1>
      <h1>{state.marriage ? 'open' : 'closed'}</h1>
      <h1>{state.death ? 'open' : 'closed'}</h1>
      <h1>{state.addEvent ? 'open' : 'closed'}</h1>

      <Grid container spacing={2}>
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
