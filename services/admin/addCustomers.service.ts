import * as yup from 'yup';
import { IAddCustomerValues } from '@modals/admin';

export const addCustomerValidationSchema = yup.object({
    firstname: yup.string().required('First Name is required'),
    lastname: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required')
})

export const handleAddCustomer = async (values: IAddCustomerValues) => {
    console.log(values);
}