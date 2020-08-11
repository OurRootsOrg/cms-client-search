import { AxiosError, AxiosRequestConfig } from 'axios';
import { Dispatch, SetStateAction, useEffect, useReducer, useState } from 'react';
import { getConfig, request } from './http';

export type RequestState<T> = {
  isLoading: boolean;
  isError: boolean;
  data?: T;
  error?: AxiosError;
};
type Action<T> = {
  type: 'INIT' | 'SUCCESS' | 'FAILURE';
  payload?: T;
  error?: AxiosError;
};
export type RequestResult<T> = [RequestState<T>, Dispatch<SetStateAction<AxiosRequestConfig>>];
export type GetResult<T> = [RequestState<T>, Dispatch<string>];

export function useHttpGet<T>(url: string): GetResult<T> {
  const [state, setConfig] = useHttpRequest<T>(getConfig(url));

  function setUrl(url: string): void {
    setConfig(getConfig(url));
  }

  return [state, setUrl];
}

export function useHttpRequest<T>(config: AxiosRequestConfig): RequestResult<T> {
  const [currentConfig, setConfig] = useState(config);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: undefined,
  });

  useEffect(() => {
    let didCancel = false;

    async function fetch(): Promise<void> {
      dispatch({ type: 'INIT' });
      try {
        const result = await request(currentConfig);

        if (!didCancel) {
          dispatch({ type: 'SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FAILURE', error });
        }
      }
    }

    fetch();

    return () => {
      didCancel = true;
    };
  }, [currentConfig]);

  return [state as RequestState<T>, setConfig];
}

function dataFetchReducer<T>(state: RequestState<T>, action: Action<T>): RequestState<T> {
  switch (action.type) {
    case 'INIT':
      return {
        isLoading: true,
        isError: false,
        data: state.data,
      };
    case 'SUCCESS':
      return {
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FAILURE':
      return {
        isLoading: false,
        isError: true,
        error: action.error,
      };
    default:
      throw new Error();
  }
}
