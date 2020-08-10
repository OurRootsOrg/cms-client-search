import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SearchParams } from '../util/useSearch';

type Props = {
  params?: SearchParams;
};
export default function RelationshipPicker(props: Props): JSX.Element {
  const classes = useStyles();
  const { params } = props;
  const { register } = useFormContext();

  const [spouse, setSpouse] = useState(false);
  const [father, setFather] = useState(false);
  const [mother, setMother] = useState(false);
  const [otherPerson, setOtherPerson] = useState(false);

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
              name="spouseGiven"
              variant="outlined"
              fullWidth
              id="spouseGiven"
              label="Spouse's First Name"
              defaultValue={params?.spouseGiven}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              variant="outlined"
              fullWidth
              id="spouseSurname"
              label="Spouse's Last Name"
              name="spouseSurname"
              defaultValue={params?.spouseSurname}
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
              name="fatherGiven"
              variant="outlined"
              fullWidth
              id="fatherGiven"
              label="Father's First Name"
              defaultValue={params?.fatherGiven}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              variant="outlined"
              fullWidth
              id="fatherSurname"
              label="Father's Last Name"
              name="fatherSurname"
              defaultValue={params?.fatherSurname}
            />
          </Grid>
        </Grid>
      )}

      {mother && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              name="motherGiven"
              variant="outlined"
              fullWidth
              id="motherGiven"
              label="Mother's First Name"
              defaultValue={params?.motherGiven}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              variant="outlined"
              fullWidth
              id="motherSurname"
              label="Mother's Last Name"
              name="motherSurname"
              defaultValue={params?.spouseSurname}
            />
          </Grid>
        </Grid>
      )}

      {otherPerson && (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              name="otherGiven"
              variant="outlined"
              fullWidth
              id="otherGiven"
              label="Other Person's First Name"
              defaultValue={params?.otherGiven}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={register}
              variant="outlined"
              fullWidth
              id="otherSurname"
              label="Other Person's Last Name"
              name="otherSurname"
              defaultValue={params?.otherSurname}
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
