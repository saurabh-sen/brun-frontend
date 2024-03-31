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

export type { ISignupApiResponse };