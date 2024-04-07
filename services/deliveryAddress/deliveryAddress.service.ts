import { ICheckoutAddress } from "@modals/checkout/checkout.types";
import * as Yup from "yup";

const deliveryValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required"),
  password: Yup.string()
    .required("Please enter a password")
});

const deliveryInitialValues = {
    country: '',
    firstname: '',
    lastname: '',
    company: '',
    phone: '',
    locality: '',
    state: '',
    pincode: '',
    moreinfo: ''
}


const handleDeliverySubmit = (values : ICheckoutAddress, isBillingAddressDifferent : boolean) => {
  console.log('values', values)
}

export { deliveryValidationSchema, deliveryInitialValues, handleDeliverySubmit }