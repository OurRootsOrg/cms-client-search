import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSearch } from '../util/useSearch';
import DataFetching from './DataFetching';
import LifeEventPicker from './LifeEventPicker';
import NamePicker from './NamePicker';
import RelationshipPicker from './RelationshipPicker';
import SearchResultsCategory from './SearchResultsCategory';
import SearchResultsTable from './SearchResultsTable';

export default function SearchResults(props: { setResults: any }): JSX.Element {
  const { setResults } = props;
  const classes = useStyles();
  const formMethods = useForm();

  const { state, data } = useSearch({
    'search?given': 'Fred',
  });

  function doSubmit(data: unknown): void {
    console.log('Submitted', data);
    setResults(true);
  }

  console.log('Result Form Values', formMethods.watch());
  console.log('Fred: ', state);

  return (
    <Container component="main" className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(doSubmit)} noValidate>
              <Typography className={classes.paper}>Refine your search</Typography>
              <NamePicker />
              <LifeEventPicker />
              <RelationshipPicker />
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
          </FormProvider>
        </Grid>
        <Grid item xs={8}>
          <Typography component="h1" variant="h5">
            Search Results
          </Typography>
          <Typography component="div">Error: {JSON.stringify(state.error)}</Typography>
          <Typography component="div">Data: {JSON.stringify(data)}</Typography>
          <DataFetching />
          <SearchResultsTable />
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
