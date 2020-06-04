import React from 'react';
import Container from '@material-ui/core/Container';
import NamePicker from './NamePicker';
import LifeEventPicker from './LifeEventPicker';
import RelationshipPicker from './RelationshipPicker';
import CategoryPicker from './CategoryPicker';
import { Typography } from '@material-ui/core';

export default function SearchForm(): JSX.Element {
  return (
    <Container component="main" maxWidth="md">
      <form action="">
        <Typography component="h1" variant="h5">
          Search our society's records
        </Typography>
        <NamePicker />
        <LifeEventPicker />
        <RelationshipPicker />
        <CategoryPicker />
      </form>
    </Container>
  );
}
