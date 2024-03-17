import { ISignupValues } from "@enumsAndTypes/login/login.types";

const signupInitialValues: ISignupValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptedTerms: false,
};

export { signupInitialValues }