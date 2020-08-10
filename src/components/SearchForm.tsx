import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SearchParams } from '../util/useSearch';
import CategoryPicker from './CategoryPicker';
import LifeEventPicker from './LifeEventPicker';
import NamePicker from './NamePicker';
import RelationshipPicker from './RelationshipPicker';

type Props = {
  onSubmit: (params: SearchParams) => void;
};
export default function SearchForm(props: Props): JSX.Element {
  const { onSubmit } = props;
  const classes = useStyles();
  const formMethods = useForm();
  const { reset } = useForm({ mode: 'onChange' });

  function doSubmit(data: SearchParams): void {
    onSubmit(data);
  }

  console.log('Search Form Values', formMethods.watch());

  return (
    <Container component="main" maxWidth="md">
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(doSubmit)} className={classes.form} noValidate>
          <Typography component="h1" variant="h5">
            Search our society&apos;s records
          </Typography>
          <NamePicker />
          <LifeEventPicker />
          <RelationshipPicker />
          <CategoryPicker />
          <Box mt={5}>
            <Button variant="contained" color="primary" type="submit" value="Submit">
              Search
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              type="reset"
              onClick={reset}
            >
              Start Over
            </Button>
          </Box>
        </form>
      </FormProvider>
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  button: {
    marginLeft: 12,
  },
}));
