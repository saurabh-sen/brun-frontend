import { useState } from "react";
import {
  IApiError,
  IApiHeaders,
  IFetchQuery,
  IMakeAutheticatedAPICall,
} from "@modals/login/login.types";
import {
  getAccessTokenFromStorage,
  getRefreshTokenFromStorage,
  refreshAccessToken,
  saveAccessTokenToStorage,
  saveRefreshTokenToStorage,
} from "@services/tokens/tokens.service";

const useMakeAutheticatedAPICall = (): IMakeAutheticatedAPICall => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<IApiError>({
    isError: false,
    message: "",
    status: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const callApi = async (fetchQuery: IFetchQuery, retryCount: number = 0) => {
    setLoading(true);
    try {
      const accessToken = getAccessTokenFromStorage();
      if (!accessToken) {
        throw new Error("Session expired, please login.");
      }

      const headers: IApiHeaders = {
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await fetchQuery(headers);
      if (!response.ok) {
        if (response.status === 401) {
          if (retryCount < 3) {
            await refreshTokensAndRetry(fetchQuery, retryCount);
          } else {
            throw new Error("Maximum retry limit reached.");
          }
        } else {
          throw new Error(response.statusText);
        }
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      const error = err as { message: string; status: number };
      setError({ isError: true, message: error.message, status: 500 });
    } finally {
      setLoading(false);
    }
  };

  const refreshTokensAndRetry = async (
    fetchQuery: IFetchQuery,
    retryCount: number
  ) => {
    const refreshToken = getRefreshTokenFromStorage();
    if (!refreshToken) {
      throw new Error("Session expired, please login.");
    }

    const newTokens = await refreshAccessToken(refreshToken);
    if (newTokens) {
      saveAccessTokenToStorage(newTokens.accessToken);
      saveRefreshTokenToStorage(newTokens.refreshToken);

      callApi(fetchQuery, retryCount + 1);
    } else {
      throw new Error("Failed to refresh tokens.");
    }
  };

  return { callApi, data, error, loading };
};

export default useMakeAutheticatedAPICall;
