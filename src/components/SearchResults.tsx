import React from 'react';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function SearchResults(): JSX.Element {
  const classes = useStyles();
  return (
    // <Container className={classes.paper}>
    //   <Typography>Hello World, Search Results</Typography>
    // </Container>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>xs=4</Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>xs=8</Paper>
      </Grid>
    </Grid>
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
