import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import NamePicker from './NamePicker';
import LifeEventPicker from './LifeEventPicker';
import RelationshipPicker from './RelationshipPicker';
import CategoryPicker from './CategoryPicker';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function SearchForm(props: { setResults: any }): JSX.Element {
  const { setResults } = props;
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5">
          Search our society&apos;s records
        </Typography>
        <NamePicker />
        <LifeEventPicker />
        <RelationshipPicker />
        <CategoryPicker />
        <Box mt={5}>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            value="Submit"
            // onSubmit={() => setResults(true)}
            onClick={() => setResults(true)}
          >
            Search
          </Button>
        </Box>
      </form>
    </Container>
  );
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
