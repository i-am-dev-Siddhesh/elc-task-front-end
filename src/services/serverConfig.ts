import axios, {
  AxiosError,
  AxiosResponse,
  AxiosResponseTransformer,
} from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API_URL as string,
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
  // withCredentials: true,
});

const requestFailureCallback = (url: string, error: AxiosError): any => {
  if (error.response) {
    console.log(
      `Request Failed for ${url}: The request was made and the server responded with erroneous status code`,
      error.response.data
    );
  } else if (error.request) {
    console.log(
      `Request Failed for ${url}: The request was made but no response was received`
    );
  } else {
    console.log(
      `Error due to bad request configuration for ${url}`,
      error.message
    );
  }
  throw error;
};

const get = (
  url: string,
  params?: Record<string, any>,
  transformer?: AxiosResponseTransformer
): Promise<any> => {
  return instance
    .get(url, {
      params,
      transformResponse: transformer,
    })
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => requestFailureCallback(url, error));
};

export { get };
