import { ISignupValues } from "components/enumsAndTypes/login/login.types";

const signupInitialValues: ISignupValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptedTerms: false,
};

export { signupInitialValues }