import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';

const baseUrl = process.env.REACT_APP_CMS_URL;

const axiosClient = axios.create();
// retry non-POST requests on network or 5XX errors
axiosRetry(axiosClient, { retryDelay: axiosRetry.exponentialDelay });

export function getConfig(url: string): AxiosRequestConfig {
  return {
    method: 'get',
    url: url.match(/^https?:\/\//) ? url : baseUrl + url,
  };
}

export async function request(config: AxiosRequestConfig): Promise<AxiosResponse> {
  return await axios.request(config);
}

export async function get(url: string): Promise<AxiosResponse> {
  return await request(getConfig(url));
}
