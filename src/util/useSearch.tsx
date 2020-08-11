import { Dispatch } from 'react';
import { RequestState, useHttpGet } from './useHttp';

/**
 * Types for search parameters and results.
 */
export type SearchParams = {
  given?: string;
  givenFuzziness?: number;
  surname?: string;
  surnameFuzziness?: number;
  fatherGiven?: string;
  fatherSurname?: string;
  motherGiven?: string;
  motherSurname?: string;
  spouseGiven?: string;
  spouseSurname?: string;
  otherGiven?: string;
  otherSurname?: string;
  birthDate?: string;
  birthDateFuzziness?: number;
  birthPlace?: string;
  marriageDate?: string;
  marriageDateFuzziness?: number;
  marriagePlace?: string;
  residenceDate?: string;
  residenceDateFuzziness?: number;
  residencePlace?: string;
  deathDate?: string;
  deathDateFuzziness?: number;
  deathPlace?: string;
  anyDate?: string;
  anyDateFuzziness?: number;
  anyPlace?: string;
  keywords?: string;
  birthCenturyFacet?: boolean;
  birthCentury?: string;
  birthDecadeFacet?: boolean;
  birthDecade?: string;
  birthPlace1Facet?: boolean;
  birthPlace1?: string;
  birthPlace2Facet?: boolean;
  birthPlace2?: string;
  birthPlace3Facet?: boolean;
  birthPlace3?: string;
  marriageCenturyFacet?: boolean;
  marriageCentury?: string;
  marriageDecadeFacet?: boolean;
  marriageDecade?: string;
  marriagePlace1Facet?: boolean;
  marriagePlace1?: string;
  marriagePlace2Facet?: boolean;
  marriagePlace2?: string;
  marriagePlace3Facet?: boolean;
  marriagePlace3?: string;
  residenceCenturyFacet?: boolean;
  residenceCentury?: string;
  residenceDecadeFacet?: boolean;
  residenceDecade?: string;
  residencePlace1Facet?: boolean;
  residencePlace1?: string;
  residencePlace2Facet?: boolean;
  residencePlace2?: string;
  residencePlace3Facet?: boolean;
  residencePlace3?: string;
  deathCenturyFacet?: boolean;
  deathCentury?: string;
  deathDecadeFacet?: boolean;
  deathDecade?: string;
  deathPlace1Facet?: boolean;
  deathPlace1?: string;
  deathPlace2Facet?: boolean;
  deathPlace2?: string;
  deathPlace3Facet?: boolean;
  deathPlace3?: string;
  categoryFacet?: boolean;
  category?: string;
  collectionFacet?: boolean;
  collection?: string;
};

export type SearchResult = {
  hits: SearchHit[];
  maxScore: number;
  total: number;
};

export type SearchHit = {
  collection: number;
  collectionName: string;
  id: string;
  person: Record<string, string>;
  score: number;
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
    const query = Object.entries(fixSearchParams(params))
      .map(([key, value]) => `${key}=${value && encodeURIComponent(value)}`)
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

export function fixSearchParams(
  formValues: Record<string, string | boolean | number | undefined>
): SearchParams {
  const params: SearchParams = {};
  Object.entries(formValues).forEach(([key, value]) => {
    const p = params as Record<string, string | boolean | number>;
    if (key === 'givenExact') {
      if (value) params.givenFuzziness = 1;
    } else if (key === 'surnameExact') {
      if (value) params.surnameFuzziness = 1;
    } else if (typeof value === 'string') {
      if (value === 'true') p[key] = true;
      if (value) p[key] = value;
    } else if (typeof value === 'boolean') {
      if (value) p[key] = value;
    } else if (typeof value === 'number') {
      if (value) p[key] = value;
    }
  });
  return params;
}
