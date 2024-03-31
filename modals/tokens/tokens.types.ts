export type AccessToken = string;
export type RefreshToken = string;

interface IRefreshTokenResponse {
  statusCode: number;
  data: {
    accessToken: string;
    refreshToken: string;
  };
  message: string;
  success: boolean;
}

interface ISignupApiResponse {
  statusCode: number;
  data: {
    created_at: string;
    email: string;
    first_name: string;
    id: string;
    is_active: boolean;
    last_name: string;
    password: string;
    role: string;
    updated_at: string;
  };
  message: string;
  success: boolean;
}

interface IRefreshAccessTokenResponse {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

export type { IRefreshAccessTokenResponse, IRefreshTokenResponse, ISignupApiResponse };
