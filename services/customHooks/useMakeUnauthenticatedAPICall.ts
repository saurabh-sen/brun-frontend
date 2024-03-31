import { useState } from "react";
import {
  IApiError,
  IFetchQueryUnauthenticated,
  IMakeUnautheticatedAPICall,
} from "@modals/login/login.types";

const useMakeAutheticatedAPICall = (): IMakeUnautheticatedAPICall => {
  const [error, setError] = useState<IApiError>({
    isError: false,
    message: "",
    status: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const callApi = async (fetchQuery: IFetchQueryUnauthenticated) => {
    return new Promise<any>(async (resolve, reject) => {
      // reset the states before making a new request
      setError({ isError: false, message: "", status: 0 });
      setLoading(true);
      try {
        const response = await fetchQuery();
        if (!response.ok) {
          setError({
            isError: true,
            message: response.statusText,
            status: response.status,
          });
          setLoading(false);
          reject();
        }

        const result = await response.json();
        setLoading(false);
        resolve(result);
      } catch (err) {
        const error = err as { message: string; status: number };
        setError({ isError: true, message: error.message, status: 500 });
        setLoading(false);
        reject();
      }
    });
  };

  return { callApi, error, loading };
};

export default useMakeAutheticatedAPICall;
