import React, { SyntheticEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

export default function RelationshipPicker(): JSX.Element {
  const classes = useStyles();
  const preventDefault = (event: SyntheticEvent) => event.preventDefault();

  return (
    <div className={classes.paper}>
      <Typography component="h2" variant="h6">
        Search with a Relationship
      </Typography>
      <Typography style={{ marginBottom: 20 }}>
        <Link href="#" onClick={preventDefault}>
          Spouse
        </Link>
        {' | '}
        <Link href="#" onClick={preventDefault}>
          Father
        </Link>
        {' | '}
        <Link href="#" onClick={preventDefault}>
          Mother
        </Link>
        {' | '}
        <Link href="#" onClick={preventDefault}>
          Other Person
        </Link>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="Spouse's First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Spouse's Last Name"
            name="lastName"
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
