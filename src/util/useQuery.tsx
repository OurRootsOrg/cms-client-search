import { useLocation } from '@reach/router';
import qs, { ParsedQs } from 'qs';

export default function useQuery(): ParsedQs {
  const location = useLocation();
  const queryParams = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return queryParams.query ? qs.parse(queryParams.query as string) : {};
}

export function toQueryString(obj: unknown): string {
  return qs.stringify(obj);
}
