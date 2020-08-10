import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { SearchParams } from '../util/useSearch';

type Props = {
  params?: SearchParams;
};
export default function SearchResultsCategory(props: Props): JSX.Element {
  const classes = useStyles();
  const { params } = props;
  return (
    <div className={classes.paper}>
      <Typography component="h2" variant="h6">
        Categories (TODO) - {params?.category}
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
