import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function SearchPage(): JSX.Element {
  const [results, setResults] = useState(false);

  return results ? (
    <SearchResults setResults={setResults} />
  ) : (
    <SearchForm setResults={setResults} />
  );
}
