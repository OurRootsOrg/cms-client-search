import { globalHistory, NavigateFn, RouteComponentProps, Router, useNavigate } from '@reach/router';
import React, { useEffect } from 'react';
import useQuery, { toQueryString } from '../util/useQuery';
import { fixSearchParams, SearchParams } from '../util/useSearch';
import SearchForm, { SearchFormProps } from './SearchForm';
import SearchResults, { SearchResultsProps } from './SearchResults';

export default function SearchPage(): JSX.Element {
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'POP') {
        window.location.reload();
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Form path="form" default />
        <Results path="results" />
      </Router>
    </>
  );
}

type FormProps = SearchFormProps & RouteComponentProps;
function Form(props: FormProps): JSX.Element {
  const navigate = useNavigate();

  function doSubmit(params: SearchParams): void {
    navToSearch(navigate, params);
  }

  return <SearchForm {...props} onSubmit={doSubmit} />;
}

type ResultProps = Partial<SearchResultsProps> & RouteComponentProps;
function Results(props: ResultProps): JSX.Element {
  const navigate = useNavigate();
  const params = useQuery();

  function doSubmit(params: SearchParams): void {
    navToSearch(navigate, params);
  }

  function doCancel(): void {
    navigate('/search');
  }

  return (
    <SearchResults
      params={params as SearchParams}
      onSubmit={doSubmit}
      onCancel={doCancel}
      {...props}
    />
  );
}

function navToSearch(navigate: NavigateFn, params: SearchParams): void {
  fixSearchParams(params);
  navigate(`/search/results?query=${encodeURIComponent(toQueryString(params))}`);
}
