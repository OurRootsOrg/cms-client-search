import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import NamePicker from './NamePicker';
import LifeEventPicker from './LifeEventPicker';
import RelationshipPicker from './RelationshipPicker';
import CategoryPicker from './CategoryPicker';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchResults from './SearchResults';

export default function SearchForm(): JSX.Element {
  const classes = useStyles();
  const [search, setSearch] = useState(true);

  if (search) {
    return (
      <Container component="main" maxWidth="md">
        <form className={classes.form} noValidate>
          <Typography component="h1" variant="h5">
            Search our society's records
          </Typography>
          <NamePicker />
          <LifeEventPicker />
          <RelationshipPicker />
          <CategoryPicker />
          <div style={{ marginTop: 50 }}>
            <label onClick={() => setSearch(!search)}>
              <Button variant="outlined" color="primary" type="submit" value="Submit">
                Submit
              </Button>
            </label>
          </div>
        </form>
      </Container>
    );
  }

  return <SearchResults />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  button: {},
}));
