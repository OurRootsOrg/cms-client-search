import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

export default function LifeEventPicker(): JSX.Element {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h6">
        Search with a life event
      </Typography>
      <Typography style={{ marginBottom: 20, color: 'blue' }}>
        <Link href="#" onClick={preventDefault}>
          Birth
        </Link>
        {' | '}
        <Link href="#" onClick={preventDefault}>
          Residence
        </Link>
        {' | '}
        <Link href="#" onClick={preventDefault}>
          Marriage
        </Link>
        {' | '}
        <Link href="#" onClick={preventDefault}>
          Death
        </Link>
        {' | '}
        <Link href="#" onClick={preventDefault}>
          Any
        </Link>
      </Typography>
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
