import React, { useState } from 'react';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function SearchPage(): JSX.Element {
  // const classes = useStyles();
  const [results, setResults] = useState(false);

  return results ? (
    <SearchResults onClose={() => setResults(false)} />
  ) : (
    <SearchForm onSubmit={() => setResults(true)} />
  );
}

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(1),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'left',
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   button: {},
// }));
