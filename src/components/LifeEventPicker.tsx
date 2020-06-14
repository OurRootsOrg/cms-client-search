import React, { SyntheticEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

export default function LifeEventPicker(props: any): JSX.Element {
  const classes = useStyles();
  const [state, setState] = useState({
    birth: 1,
    residence: 0,
    marriage: 0,
    death: 0,
    any: 0,
  });
  const preventDefault = (event: SyntheticEvent) => event.preventDefault();
  console.log(props);

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h6">
        Search with a life event
      </Typography>
      <Typography style={{ marginBottom: 20 }}>
        <Link onClick={preventDefault}>Birth</Link>
        {' | '}
        <Link onClick={preventDefault}>Residence</Link>
        {' | '}
        <Link onClick={preventDefault}>Marriage</Link>
        {' | '}
        <Link onClick={preventDefault}>Death</Link>
        {' | '}
        <Link onClick={preventDefault}>Any</Link>
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
