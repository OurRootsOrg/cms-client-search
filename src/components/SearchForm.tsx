import React from 'react';
import NamePicker from './NamePicker';
import LifeEventPicker from './LifeEventPicker';
import RelationshipPicker from './RelationshipPicker';
import CategoryPicker from './CategoryPicker';

export default function SearchForm(): JSX.Element {
  return (
    <div>
      <NamePicker />
      <LifeEventPicker />
      <RelationshipPicker />
      <CategoryPicker />
    </div>
  );
}
