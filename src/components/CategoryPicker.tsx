import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export default function CategoryPicker(): JSX.Element {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Typography component="h2" variant="h6">
          Search with a Relationship
        </Typography>
        <Typography>
          Hold shift while clicking to select more than one category to include{' '}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="category"
                name="category"
                variant="outlined"
                required
                fullWidth
                id="category"
                label="Category"
                autoFocus
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));
