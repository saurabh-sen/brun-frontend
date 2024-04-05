import { ILoginValues } from "@modals/login/login.types";
import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Please enter a password"),
});

export const loginApi = (payload: ILoginValues) => async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    return response;
  } catch (error) {
    return {
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      json: async () => ({
        message: "An unexpected error occurred.",
      }),
    } as Response;
  }
};
