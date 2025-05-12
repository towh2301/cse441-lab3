import axios, { AxiosInstance } from 'axios';

const useHttpPublicRequest = (baseURL: string): AxiosInstance => {
  const apiInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000
  });

  return apiInstance;
};

export default useHttpPublicRequest;