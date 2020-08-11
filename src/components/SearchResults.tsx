import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { lookup, SearchHit, SearchParams, useSearch } from '../util/useSearch';
import LifeEventPicker from './LifeEventPicker';
import NamePicker from './NamePicker';
import RelationshipPicker from './RelationshipPicker';
import SearchResultsCategory from './SearchResultsCategory';
import SearchResultsTable from './SearchResultsTable';

export type SearchResultsProps = {
  params: SearchParams;
  onSubmit?: (params: SearchParams) => void;
  onCancel?: () => void;
};
export default function SearchResults(props: SearchResultsProps): JSX.Element {
  const classes = useStyles();
  const { params, onSubmit, onCancel } = props;
  const formMethods = useForm();
  const { state, data, setParams } = useSearch(params);

  //TODO: Temporary
  //Note: There's also a temporary display of 'person' after the text 'Search Results'
  const [person, setPerson] = useState<SearchHit>();
  useEffect(() => {
    async function lk(id: string): Promise<void> {
      const result = await lookup(id);
      setPerson(result);
    }
    if (data && data.hits[0]) {
      lk(data.hits[0].id);
    }
  }, [data?.hits[0]?.id]);
  //TODO: End Temporary

  function doSubmit(params: SearchParams): void {
    setParams(params);
    if (onSubmit) onSubmit(params);
  }

  console.log('Result Form Values', formMethods.watch());

  return (
    <Container component="main" className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(doSubmit)} noValidate>
              <Typography className={classes.paper}>Refine your search</Typography>
              <NamePicker params={params} />
              <LifeEventPicker params={params} />
              <RelationshipPicker params={params} />
              <SearchResultsCategory params={params} />
              <Box mt={5}>
                <Button variant="contained" color="primary" type="submit">
                  Search
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={onCancel}
                >
                  Start Over
                </Button>
              </Box>
            </form>
          </FormProvider>
        </Grid>
        <Grid item xs={8}>
          <Typography component="h1" variant="h5">
            Search Results {JSON.stringify(person)}
          </Typography>
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
  button: {
    marginLeft: 12,
  },
}));
