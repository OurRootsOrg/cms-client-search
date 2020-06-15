import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

export default function LifeEventPicker(): JSX.Element {
  const classes = useStyles();

  const [birth, setBirth] = useState(true);
  const [residence, setResidence] = useState(false);
  const [marriage, setMarriage] = useState(false);
  const [death, setDeath] = useState(false);
  const [anyEvent, setAnyEvent] = useState(false);

  function toggleBirthTextField(): void {
    setBirth(!birth);
  }

  function toggleResidenceTextField(): void {
    setResidence(!residence);
  }

  function toggleMarriageTextField(): void {
    setMarriage(!marriage);
  }

  function toggleDeathTextField(): void {
    setDeath(!death);
  }

  function toggleAnyEventTextField(): void {
    setAnyEvent(!anyEvent);
  }

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h6">
        Search with a life event
      </Typography>
      <Typography style={{ marginBottom: 20 }}>
        <Link onClick={toggleBirthTextField}>Birth</Link>
        {' | '}
        <Link onClick={toggleResidenceTextField}>Residence</Link>
        {' | '}
        <Link onClick={toggleMarriageTextField}>Marriage</Link>
        {' | '}
        <Link onClick={toggleDeathTextField}>Death</Link>
        {' | '}
        <Link onClick={toggleAnyEventTextField}>Any</Link>
      </Typography>

      <div>
        {birth && (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="birthplace"
                variant="outlined"
                fullWidth
                id="birthplace"
                label="Birthplace"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="birthplaceStartYear"
                label="Year Start"
                name="birthplaceStartYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="birthplaceEndYear"
                label="Year End"
                name="birthplaceEndYear"
              />
            </Grid>
          </Grid>
        )}
      </div>
      {/* ------------------- */}
      <div>
        {residence && (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="residence"
                variant="outlined"
                fullWidth
                id="residence"
                label="Residence"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="residanceStartYear"
                label="Year Start"
                name="residanceStartYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="residenceEndYear"
                label="Year End"
                name="residenceEndYear"
              />
            </Grid>
          </Grid>
        )}
      </div>
      {/* ------------------- */}
      <div>
        {marriage && (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="marriage"
                variant="outlined"
                fullWidth
                id="marriage"
                label="Marriage"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="marriageStartYear"
                label="Year Start"
                name="marriageStartYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="marriageEndYear"
                label="Year End"
                name="marriageEndYear"
              />
            </Grid>
          </Grid>
        )}
      </div>
      {/* ------------------- */}
      <div>
        {death && (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="death"
                variant="outlined"
                fullWidth
                id="death"
                label="Death"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="deathStartYear"
                label="Year Start"
                name="deathStartYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="deathEndYear"
                label="Year End"
                name="deathEndYear"
              />
            </Grid>
          </Grid>
        )}
      </div>
      {/* ------------------- */}
      <div>
        {anyEvent && (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="anyEvent"
                variant="outlined"
                fullWidth
                id="anyEvent"
                label="Any"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="anyEventStartYear"
                label="Year Start"
                name="anyEventStartYear"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="anyEventEndYear"
                label="Year End"
                name="anyEventEndYear"
              />
            </Grid>
          </Grid>
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
