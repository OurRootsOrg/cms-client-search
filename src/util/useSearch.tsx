import { Dispatch } from 'react';
import { RequestState, useHttpGet } from './useHttp';

/**
 * Types for search parameters and results. Note that search queries
 * are very complex. For now, instead of documenting all the possible
 * parameters, we just use Record, which means any
 * field can be present. Use caution when setting parameters and retrieving
 * results since the spelling and types will not be checked.
 */
export type SearchParams = Record<string, string>;
export type SearchResult = {
  hits: Array<{
    collection: number;
    collectionName: string;
    id: string;
    person: Record<string, string>;
    score: number;
  }>;
  maxScore: number;
  total: number;
};
export type UseSearchContext = {
  data?: SearchResult;
  setParams: Dispatch<SearchParams>;
  state: RequestState<SearchResult>;
};

/**
 * Custom hook that sends a search request to the CMS backend.
 * Returns the request state, data and a function that will trigger a new search.
 */
export function useSearch(params: SearchParams): UseSearchContext {
  const [state, setUrl] = useHttpGet<SearchResult>(buildUrl(params));

  function buildUrl(params: SearchParams): string {
    const query = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
    return `/search?${query}`;
  }

  function setParams(params: SearchParams): void {
    setUrl(buildUrl(params));
  }

  return {
    state,
    data: state.data,
    setParams,
  };
}
