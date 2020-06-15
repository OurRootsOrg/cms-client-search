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
                id="birthplaceStartYear"
                label="Year Start"
                name="birthplaceStartYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="birthplaceEndYear"
                label="Year End"
                name="birthplaceEndYear"
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
                name="residence"
                variant="outlined"
                required
                fullWidth
                id="residence"
                label="Residence"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="residanceStartYear"
                label="Year Start"
                name="residanceStartYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="residenceEndYear"
                label="Year End"
                name="residenceEndYear"
              />
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>

      <div>
        {state.marriage ? (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="marriage"
                variant="outlined"
                required
                fullWidth
                id="marriage"
                label="Marriage"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="marriageStartYear"
                label="Year Start"
                name="marriageStartYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="marriageEndYear"
                label="Year End"
                name="marriageEndYear"
              />
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>

      <div>
        {state.death ? (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="death"
                variant="outlined"
                required
                fullWidth
                id="death"
                label="Death"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="deathStartYear"
                label="Year Start"
                name="deathStartYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="deathEndYear"
                label="Year End"
                name="deathEndYear"
              />
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>

      <div>
        {state.anyEvent ? (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="anyEvent"
                variant="outlined"
                required
                fullWidth
                id="anyEvent"
                label="Any"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="anyEventStartYear"
                label="Year Start"
                name="anyEventStartYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="anyEventEndYear"
                label="Year End"
                name="anyEventEndYear"
              />
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>

      {/*
      ------------------------------------ */}
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
