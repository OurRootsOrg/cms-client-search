import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export default function LifeEventPicker(): JSX.Element {
  const classes = useStyles();
  const { register, errors } = useFormContext();

  const [birth, setBirth] = useState(true);
  const [residence, setResidence] = useState(false);
  const [marriage, setMarriage] = useState(false);
  const [death, setDeath] = useState(false);
  const [anyEvent, setAnyEvent] = useState(false);

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h6">
        Search with a life event
      </Typography>
      <Typography style={{ marginBottom: 20 }}>
        <Link onClick={() => setBirth(!birth)}>Birth</Link>
        {' | '}
        <Link onClick={() => setResidence(!residence)}>Residence</Link>
        {' | '}
        <Link onClick={() => setMarriage(!marriage)}>Marriage</Link>
        {' | '}
        <Link onClick={() => setDeath(!death)}>Death</Link>
        {' | '}
        <Link onClick={() => setAnyEvent(!anyEvent)}>Any</Link>
      </Typography>

      {birth && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              name="birth"
              variant="outlined"
              fullWidth
              id="birthplace"
              label="Birthplace"
              autoFocus
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register({ maxLength: 4 })}
              name="birthYearStart"
              variant="outlined"
              fullWidth
              id="birthplaceStartYear"
              label="Year Start"
              error={errors.birthYearStart ? true : <p>WRONG</p>}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="birthYearEnd"
              variant="outlined"
              fullWidth
              id="birthplaceEndYear"
              label="Year End"
            />
          </Grid>
        </Grid>
      )}

      {/* ------------------- */}

      {residence && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
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
              inputRef={register}
              name="residenceYearStart"
              variant="outlined"
              fullWidth
              id="residanceStartYear"
              label="Year Start"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="residenceYearEnd"
              variant="outlined"
              fullWidth
              id="residenceEndYear"
              label="Year End"
            />
          </Grid>
        </Grid>
      )}

      {/* ------------------- */}

      {marriage && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
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
              inputRef={register}
              name="marriageYearStart"
              variant="outlined"
              fullWidth
              id="marriageStartYear"
              label="Year Start"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="marriageYearEnd"
              variant="outlined"
              fullWidth
              id="marriageEndYear"
              label="Year End"
            />
          </Grid>
        </Grid>
      )}

      {/* ------------------- */}

      {death && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              name="death"
              variant="outlined"
              fullWidth
              id="death"
              label="Death"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="deathYearStart"
              variant="outlined"
              fullWidth
              id="deathStartYear"
              label="Year Start"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="deathYearEnd"
              variant="outlined"
              fullWidth
              id="deathEndYear"
              label="Year End"
            />
          </Grid>
        </Grid>
      )}

      {/* ------------------- */}

      {anyEvent && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
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
              inputRef={register}
              name="anyEventStartYear"
              variant="outlined"
              fullWidth
              id="anyEventStartYear"
              label="Year Start"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="anyEventEndYear"
              variant="outlined"
              fullWidth
              id="anyEventEndYear"
              label="Year End"
            />
          </Grid>
        </Grid>
      )}
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
  container: {
    marginBottom: theme.spacing(2),
  },
}));
