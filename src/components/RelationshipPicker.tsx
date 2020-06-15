import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

export default function RelationshipPicker(): JSX.Element {
  const classes = useStyles();

  const [state, setState] = useState({
    spouse: false,
    father: false,
    mother: false,
    otherPerson: false,
  });

  const spouseOnClick = (): any => {
    setState({
      spouse: true,
      father: state.father,
      mother: state.mother,
      otherPerson: state.otherPerson,
    });
  };

  const fatherOnClick = (): any => {
    setState({
      spouse: state.spouse,
      father: true,
      mother: state.mother,
      otherPerson: state.otherPerson,
    });
  };

  const motherOnClick = (): any => {
    setState({
      spouse: state.spouse,
      father: state.father,
      mother: true,
      otherPerson: state.otherPerson,
    });
  };

  const otherOnClick = (): any => {
    setState({
      spouse: state.spouse,
      father: state.father,
      mother: state.mother,
      otherPerson: true,
    });
  };

  return (
    <div className={classes.paper}>
      <Typography component="h2" variant="h6">
        Search with a Relationship
      </Typography>
      <Typography style={{ marginBottom: 20 }}>
        <Link onClick={spouseOnClick}>Spouse</Link>
        {' | '}
        <Link onClick={fatherOnClick}>Father</Link>
        {' | '}
        <Link onClick={motherOnClick}>Mother</Link>
        {' | '}
        <Link onClick={otherOnClick}>Other Person</Link>
      </Typography>

      <div>
        {state.spouse ? (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="spouseFirstName"
                variant="outlined"
                required
                fullWidth
                id="spouseFirstName"
                label="Spouse's First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="spouseLastName"
                label="Spouse's Last Name"
                name="spouseLastName"
              />
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>

      {/* ------------------- */}
      <div>
        {state.father ? (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="fatherFirstName"
                variant="outlined"
                required
                fullWidth
                id="fatherFirstName"
                label="Father's First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fatherLastName"
                label="Father's Last Name"
                name="fatherLastName"
              />
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>
      {/* ------------------- */}
      <div>
        {state.mother ? (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Mothers's First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Mothers's Last Name"
                name="lastName"
              />
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>
      {/* ------------------- */}
      <div>
        {state.otherPerson ? (
          <Grid container spacing={2} style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="otherFirstName"
                variant="outlined"
                required
                fullWidth
                id="otherFirstName"
                label="Other Person's First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="otherLastName"
                label="Other Person's Last Name"
                name="otherLastName"
              />
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>
      {/* ------------------- */}
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
