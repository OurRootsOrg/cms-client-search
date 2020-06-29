import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LifeEventPicker from './LifeEventPicker';
import RelationshipPicker from './RelationshipPicker';
import NamePicker from './NamePicker';
import SearchResultsTable from './SearchResultsTable';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function SearchResults(): JSX.Element {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography className={classes.paper}>Refine your search</Typography>
          <NamePicker />
          <LifeEventPicker />
          <RelationshipPicker />
        </Grid>
        <Grid item xs={8}>
          <Typography component="h1" variant="h5">
            Search Results
          </Typography>
          <SearchResultsTable />
        </Grid>
      </Grid>
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
}));
