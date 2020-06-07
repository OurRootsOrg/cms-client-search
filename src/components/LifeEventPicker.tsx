import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function LifeEventPicker(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h6">
        Search with a life event
      </Typography>
      <Typography style={{ marginBottom: 20, color: 'blue' }}>
        Birth | Residence | Marriage | Death | Any
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
