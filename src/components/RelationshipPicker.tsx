import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

export default function RelationshipPicker(): JSX.Element {
  const classes = useStyles();

  let [spouse, setSpouse] = useState(0);
  let [father, setFather] = useState(0);
  let [mother, setMother] = useState(0);
  let [otherPerson, setOtherPerson] = useState(0);

  function spouseTextField1(): any {
    if (spouse > 0) {
      return (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="spouseFirstName1"
              variant="outlined"
              fullWidth
              id="spouseFirstName1"
              label="Spouse's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="spouseLastName1"
              label="Spouse's Last Name"
              name="spouseLastName1"
            />
          </Grid>
          <Grid></Grid>
        </Grid>
      );
    }
  }

  function spouseTextField2(): any {
    if (spouse > 1) {
      return (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="spouseFirstName2"
              variant="outlined"
              fullWidth
              id="spouseFirstName2"
              label="Spouse's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="spouseLastName2"
              label="Spouse's Last Name"
              name="spouseLastName2"
            />
          </Grid>
          <Grid></Grid>
        </Grid>
      );
    }
  }

  function fatherTextField1(): any {
    if (father > 0) {
      return (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="fatherFirstName1"
              variant="outlined"
              fullWidth
              id="fatherFirstName1"
              label="Father's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="fatherLastName1"
              label="Father's Last Name"
              name="fatherLastName1"
            />
          </Grid>
        </Grid>
      );
    }
  }

  function fatherTextField2(): any {
    if (father > 1) {
      return (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="fatherFirstName2"
              variant="outlined"
              fullWidth
              id="fatherFirstName2"
              label="Father's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="fatherLastName2"
              label="Father's Last Name"
              name="fatherLastName2"
            />
          </Grid>
        </Grid>
      );
    }
  }

  function motherTextField1(): any {
    if (mother > 0) {
      return (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="motherFirstName1"
              variant="outlined"
              fullWidth
              id="motherFirstName1"
              label="Mother's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="motherLastName1"
              label="Mother's Last Name"
              name="motherLastName1"
            />
          </Grid>
        </Grid>
      );
    }
  }

  function motherTextField2(): any {
    if (mother > 1) {
      return (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="motherFirstName2"
              variant="outlined"
              fullWidth
              id="motherFirstName2"
              label="Mother's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="motherLastName2"
              label="Mother's Last Name"
              name="motherLastName2"
            />
          </Grid>
        </Grid>
      );
    }
  }

  function otherPersonTextField1(): any {
    if (otherPerson > 0) {
      return (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="otherFirstName1"
              variant="outlined"
              fullWidth
              id="otherFirstName1"
              label="Other Person's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="otherLastName1"
              label="Other Person's Last Name"
              name="otherLastName1"
            />
          </Grid>
        </Grid>
      );
    }
  }

  function otherPersonTextField2(): any {
    if (otherPerson > 1) {
      return (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="otherFirstName2"
              variant="outlined"
              fullWidth
              id="otherFirstName2"
              label="Other Person's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="otherLastName2"
              label="Other Person's Last Name"
              name="otherLastName2"
            />
          </Grid>
        </Grid>
      );
    }
  }

  return (
    <div className={classes.paper}>
      <Typography component="h2" variant="h6">
        Search with a Relationship
      </Typography>
      <Typography style={{ marginBottom: 20 }}>
        <Link onClick={() => setSpouse(spouse + 1)}>Spouse</Link>
        {' | '}
        <Link onClick={() => setFather(father + 1)}>Father</Link>
        {' | '}
        <Link onClick={() => setMother(mother + 1)}>Mother</Link>
        {' | '}
        <Link onClick={() => setOtherPerson(otherPerson + 1)}>Other Person</Link>
      </Typography>

      {spouseTextField1()}
      {spouseTextField2()}
      {fatherTextField1()}
      {fatherTextField2()}
      {motherTextField1()}
      {motherTextField2()}
      {otherPersonTextField1()}
      {otherPersonTextField2()}
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
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));
