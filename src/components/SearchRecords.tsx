import React from 'react';
import Message from './message';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  searchStyle: {
    fontStyle: 'oblique',
    color: 'red',
    fontSize: '30px',
  },
});

export default function SearchRecords(): JSX.Element {
  const classes = useStyles();

  return (
    <Typography className={classes.searchStyle} variant="h2" color="secondary">
      <Message message="This is a simple message" />
    </Typography>
  );
}
