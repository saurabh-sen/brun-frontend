"use client"
import MyButton from '@components/common/MyButton'
import MyTextInput from '@components/common/MyTextInput'
import { ButtonType } from '@enumsAndTypes/common/common.types'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'

import * as Yup from 'yup'

const initialValues = {
    email: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
});

const RequestPasswordReset = () => {

    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubmit = (values: { email: string }) => {
        if (values.email) setShowSuccess(true)
        console.log(values)
    }

    return (
        <main className='min-h-screen flex justify-center items-center'>
            <section className="request-password-reset w-64 sm:w-80 md:w-[649px]" id='RequestPasswordReset'>
                <legend className='flex flex-col justify-center items-center mb-11 '>
                    <h5>REQUEST PASSWORD RESET</h5>
                    {
                        showSuccess && (
                            <p className='text-[#767676] text-sm my-2'>RECOVERY EMAIL WILL BE SENT TO YOUR REGISTERED EMAIL ADDRESS.</p>
                        )
                    }
                </legend>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className='flex flex-col text-sm w-full'>
                        <MyTextInput
                            id='email'
                            label="Email Address"
                            name="email"
                            type="email"
                            onFocus={() => setShowSuccess(false)}
                        />

                        <MyButton label='CONTINUE' type={ButtonType.SUBMIT} />
                    </Form>
                </Formik>
            </section>
        </main>
    )
}

export default RequestPasswordReset