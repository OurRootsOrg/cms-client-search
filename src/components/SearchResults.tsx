import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LifeEventPicker from './LifeEventPicker';
import RelationshipPicker from './RelationshipPicker';
import NamePicker from './NamePicker';
// import SearchResultsTable from './SearchResultsTable';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchResultsLocation from './SearchResultsLocations';
import SearchResultsCategory from './SearchResultsCategory';
import FixedTable from './FixedTable';

export default function SearchResults(props: { setResults: any }): JSX.Element {
  const { setResults } = props;
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <form noValidate>
            <Typography className={classes.paper}>Refine your search</Typography>
            <NamePicker />
            <LifeEventPicker />
            <RelationshipPicker />
            <SearchResultsLocation />
            <SearchResultsCategory />
            <Box mt={5}>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                value="Submit"
                onSubmit={() => setResults(false)}
              >
                Search
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item xs={8}>
          <Typography component="h1" variant="h5">
            Search Results
          </Typography>
          {/* <SearchResultsTable /> */}
          <FixedTable />
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
}));
