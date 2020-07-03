import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export default function SearchResultsCategory(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Typography component="h2" variant="h6">
        Categories
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
}));
