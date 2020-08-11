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
export default function LifeEventPicker(props: Props): JSX.Element {
  const classes = useStyles();
  const { params } = props;
  const { register } = useFormContext();

  const [birth, setBirth] = useState(false);
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
              name="birthPlace"
              variant="outlined"
              fullWidth
              id="birthPlace"
              label="Birthplace"
              defaultValue={params?.birthPlace}
              autoFocus
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register({ maxLength: 4 })}
              name="birthDate"
              variant="outlined"
              fullWidth
              id="birthDate"
              label="Year Start"
              defaultValue={params?.birthDate}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="birthDateEnd"
              variant="outlined"
              fullWidth
              id="birthDateEnd"
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
              name="residencePlace"
              variant="outlined"
              fullWidth
              id="residencePlace"
              label="Residence"
              defaultValue={params?.residencePlace}
              autoFocus
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="residenceDate"
              variant="outlined"
              fullWidth
              id="residanceDate"
              label="Year Start"
              defaultValue={params?.residenceDate}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="residenceDateEnd"
              variant="outlined"
              fullWidth
              id="residenceDateEnd"
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
              name="marriagePlace"
              variant="outlined"
              fullWidth
              id="marriagePlace"
              label="Marriage"
              defaultValue={params?.marriagePlace}
              autoFocus
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="marriageDate"
              variant="outlined"
              fullWidth
              id="marriageDate"
              label="Year Start"
              defaultValue={params?.marriageDate}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="marriageDateEnd"
              variant="outlined"
              fullWidth
              id="marriageDateEnd"
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
              name="deathPlace"
              variant="outlined"
              fullWidth
              id="deathPlace"
              defaultValue={params?.deathPlace}
              label="Death"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="deathDate"
              variant="outlined"
              fullWidth
              id="deathDate"
              label="Year Start"
              defaultValue={params?.birthDate}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="deathDateEnd"
              variant="outlined"
              fullWidth
              id="deathDateEnd"
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
              name="anyPlace"
              variant="outlined"
              fullWidth
              id="anyPlace"
              label="Any"
              defaultValue={params?.anyPlace}
              autoFocus
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="anyDate"
              variant="outlined"
              fullWidth
              id="anyDate"
              label="Year Start"
              defaultValue={params?.anyDate}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              inputRef={register}
              name="anyDateEnd"
              variant="outlined"
              fullWidth
              id="anyDateEnd"
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
