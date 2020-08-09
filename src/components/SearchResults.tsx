import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSearch } from '../util/useSearch';
import DetailsModal from './DetailsModal';
import LifeEventPicker from './LifeEventPicker';
import NamePicker from './NamePicker';
import RelationshipPicker from './RelationshipPicker';
import SearchResultsCategory from './SearchResultsCategory';
import SearchResultsTable from './SearchResultsTable';

type Props = {
  params: Record<string, string>;
  setResults: (hasResults: boolean) => void;
};
export default function SearchResults(props: Props): JSX.Element {
  const { params, setResults } = props;
  const classes = useStyles();
  const formMethods = useForm();

  const { state, data, setParams } = useSearch(params);

  function doSubmit(data: unknown): void {
    console.log('Submitted', data);
    setParams({ given: 'Barney' });
    setResults(true);
  }

  console.log('Result Form Values', formMethods.watch());
  console.log('Search Result', data);

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
          <DetailsModal />
          {/* TODO: temporary */}
          <Typography component="div">Error: {JSON.stringify(state.error)}</Typography>
          <Typography component="div">Data: {JSON.stringify(data)}</Typography>
          {/* end temporary */}
          {state.isLoading && <CircularProgress />}
          {state.isError && <Typography component="div">Error: {state.error?.message}</Typography>}
          {data && <SearchResultsTable data={data} />}
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
