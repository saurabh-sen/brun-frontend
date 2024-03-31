import { RoleEnum } from "@modals/common/common.types";
import { IRefreshTokenResponse } from "@modals/tokens/tokens.types";

interface IMyTextInput {
  label: string;
  id: string;
  name: string;
  type: string;
  className?: string;
  onFocus?: () => void;
}

interface IMyCheckBox {
  children: React.ReactNode;
  name: string;
  className?: string;
}

interface ISignupValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
}

interface ISignupValuesDB {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role?: RoleEnum.ADMIN | RoleEnum.USER;
}

interface ILoginValues {
  email: string;
  password: string;
}

interface IFetchQuery {
  (headers: IApiHeaders): Promise<Response>;
}

interface IApiHeaders {
  Authorization: string;
}

interface IApiError {
  isError: boolean;
  message: string;
  status: number;
}

interface IMakeAutheticatedAPICall {
  callApi: (fetchQuery: IFetchQuery, retryCount?: number) => Promise<void>;
  data: any;
  error: IApiError;
  loading: boolean;
}

interface IMakeUnautheticatedAPICall {
  callApi: (fetchQuery: IFetchQueryUnauthenticated) => Promise<any>;
  error: IApiError;
  loading: boolean;
}

interface IFetchQueryUnauthenticated {
  (): Promise<Response>;
}

export type { IMyTextInput, IMyCheckBox, ISignupValues, ILoginValues, ISignupValuesDB, IFetchQuery, IApiError, IApiHeaders, IMakeAutheticatedAPICall, IFetchQueryUnauthenticated, IMakeUnautheticatedAPICall }