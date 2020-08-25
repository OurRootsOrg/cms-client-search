import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default function SearchDetails(): JSX.Element {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      <h2>Name</h2>

      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography></Typography>
            <Typography>
              Quis fugiat est sit fugiat do cupidatat. Officia et anim qui eu in ea culpa minim
              fugiat velit. Consequat laboris eu ipsum amet cupidatat est reprehenderit laborum non
              adipisicing consequat duis aliquip.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} className={classes.image}></Grid>
      </Grid>
      <p>
        Officia occaecat dolor incididunt elit qui id ut ut minim minim culpa excepteur. Laboris
        aute enim Lorem voluptate. Ex veniam eu sunt veniam ad nulla Lorem aliquip ea. Culpa et
        ullamco velit do voluptate veniam dolor amet minim. Commodo commodo minim fugiat sunt sint.
        Velit voluptate dolor consequat velit fugiat nisi voluptate sint in sunt incididunt ullamco.
        Irure pariatur sit cupidatat nostrud ex veniam anim ex esse elit sunt officia aliqua.
        Exercitation ex culpa pariatur proident ipsum sint amet proident et sunt cillum do.
      </p>
      <p>
        Sit Lorem do mollit elit. Consequat ea eu enim et adipisicing. In adipisicing officia
        pariatur exercitation tempor dolor labore deserunt est ea sit deserunt. Magna dolor in in
        cupidatat sint ea exercitation nostrud duis ullamco.
      </p>
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'fixed',
      // width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    grid: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    image: {
      backgroundImage:
        'url(https://images.unsplash.com/photo-1467688695332-6b486449d78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  })
);
