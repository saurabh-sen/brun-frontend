import { RoleEnum } from "@modals/common/common.types";

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

export type { IMyTextInput, IMyCheckBox, ISignupValues, ILoginValues, ISignupValuesDB }