import React, { useState } from 'react';
import { SearchParams } from '../util/useSearch';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function SearchPage(): JSX.Element {
  const [params, setParams] = useState<SearchParams>();

  return params ? <SearchResults params={params} /> : <SearchForm onSubmit={(p) => setParams(p)} />;
}
