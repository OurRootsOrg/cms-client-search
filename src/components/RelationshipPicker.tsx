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

  const [spouse, setSpouse] = useState(false);
  const [father, setFather] = useState(false);
  const [mother, setMother] = useState(false);
  const [otherPerson, setOtherPerson] = useState(false);

  function spouseOnClick(): void {
    setSpouse(!spouse);
  }

  function fatherOnClick(): void {
    setFather(!father);
  }

  function motherOnClick(): void {
    setMother(!mother);
  }

  function otherPersonOnClick(): void {
    setOtherPerson(!otherPerson);
  }

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
        <Link onClick={otherPersonOnClick}>Other Person</Link>
      </Typography>

      {spouse && (
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
          <Grid></Grid>
        </Grid>
      )}

      {/* ------------------- */}

      {father && (
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
      )}

      {/* ------------------- */}

      {mother && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="Mother's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Mother's Last Name"
              name="lastName"
            />
          </Grid>
        </Grid>
      )}

      {/* ------------------- */}

      {otherPerson && (
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
      )}

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
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));
