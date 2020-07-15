import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export default function RelationshipPicker(): JSX.Element {
  const classes = useStyles();
  const { register } = useFormContext();

  let [spouse, setSpouse] = useState(false);
  let [father, setFather] = useState(false);
  let [mother, setMother] = useState(false);
  let [otherPerson, setOtherPerson] = useState(false);

  return (
    <div className={classes.paper}>
      <Typography component="h2" variant="h6">
        Search with a Relationship
      </Typography>
      <Typography style={{ marginBottom: 20 }}>
        <Link onClick={() => setSpouse(!spouse)}>Spouse</Link>
        {' | '}
        <Link onClick={() => setFather(!father)}>Father</Link>
        {' | '}
        <Link onClick={() => setMother(!mother)}>Mother</Link>
        {' | '}
        <Link onClick={() => setOtherPerson(!otherPerson)}>Other Person</Link>
      </Typography>

      {spouse && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              name="spouseFirstName"
              variant="outlined"
              fullWidth
              id="spouseFirstName"
              label="Spouse's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              variant="outlined"
              fullWidth
              id="spouseLastName"
              label="Spouse's Last Name"
              name="spouseLastName"
            />
          </Grid>
          <Grid></Grid>
        </Grid>
      )}

      {father && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              name="fatherFirstName"
              variant="outlined"
              fullWidth
              id="fatherFirstName"
              label="Father's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              variant="outlined"
              fullWidth
              id="fatherLastName"
              label="Father's Last Name"
              name="fatherLastName"
            />
          </Grid>
        </Grid>
      )}

      {mother && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              name="motherFirstName"
              variant="outlined"
              fullWidth
              id="motherFirstName"
              label="Mother's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              variant="outlined"
              fullWidth
              id="motherLastName"
              label="Mother's Last Name"
              name="motherLastName"
            />
          </Grid>
        </Grid>
      )}

      {otherPerson && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              name="otherFirstName"
              variant="outlined"
              fullWidth
              id="otherFirstName"
              label="Other Person's First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              variant="outlined"
              fullWidth
              id="otherLastName"
              label="Other Person's Last Name"
              name="otherLastName"
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
}));
