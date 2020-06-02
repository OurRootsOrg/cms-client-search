import React from 'react';
import NamePicker from './NamePicker';
import LifeEventPicker from './LifeEventPicker';

export default function SearchForm(): JSX.Element {
  return (
    <div>
      <NamePicker />
      <LifeEventPicker />
    </div>
  );
}
