"use client"
import React from 'react'
import { Form, Formik } from 'formik';
import MyBoxInput from '@components/admin/common/MyBoxInput';
import AddButtons from '@components/admin/AddProduct/AddButtons';
import { addCustomerInitialValues } from '@contants/admin/customers.constant';
import { addCustomerValidationSchema, handleAddCustomer } from '@services';

const NewCustomers = () => {

    const [isValid, setIsValid] = React.useState(false);
    const [isValidating, setIsValidating] = React.useState(false);

    const handleCancel = () => {
        console.log('cancel')
    }

    return (
        <section id='addproduct'>
            <Formik
                initialValues={addCustomerInitialValues}
                validationSchema={addCustomerValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    handleAddCustomer(values);
                    setSubmitting(false);
                }}
                validateOnChange={true}
                validateOnBlur={false}
                validate={(values) => {
                    setIsValidating(true);
                    addCustomerValidationSchema.isValid(values)
                        .then(valid => {
                            setIsValid(valid);
                            setIsValidating(false);
                        });
                }}
            >
                <Form className='flex flex-col text-sm w-full gap-6 max-w-[1048px] mb-12'>
                    <h1 className="mb-6 mt-8">ADD NEW PRODUCT</h1>
                    <MyBoxInput id="firstname" label="FIRST NAME" name="firstname" type="text" className="mb-6" />
                    <MyBoxInput id="lastname" label="LAST NAME" name="lastname" type="text" className="mb-6" />
                    <MyBoxInput id="email" label="EMAIL" name="email" type="email" className="mb-6" />
                    <MyBoxInput id="password" label="PASSWORD" name="password" type="password" className="mb-6" />
                    <AddButtons handleCancel={handleCancel} />
                </Form>
            </Formik>
        </section>
    )
}


export default NewCustomers