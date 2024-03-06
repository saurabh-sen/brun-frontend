"use client"

import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import Link from 'next/link'
import MyTextInput from '@components/common/MyTextInput'
import { loginValidationSchema } from '@services'
import { loginInitialValues } from '@contants/loginConstant'
import MyButton from '@components/common/MyButton'
import { ButtonType } from '@enumsAndTypes/common/common.types'
import { useLoginMeMutation } from '@services/login/loginUtils'
import { useRouter } from 'next/navigation'
import { ILoginValues } from '@enumsAndTypes/login/login.types'
import MyError from '@components/common/MyError'

const Login = () => {

  const router = useRouter();
  const [showError, setShowError] = useState(false);

  const [loginMe, { isError }] = useLoginMeMutation();

  const handleLoginSubmit = async (values : ILoginValues) => {
    const payload = {
      email: values.email,
      password: values.password
    }
    try {
      const response = await loginMe(payload).unwrap();
      if ('error' in response) {
        console.error("An error occurred", response.error);
        setShowError(true);
      } else {
        router.push('/')
      }6
    } catch (error) {
      console.error("An error occurred", error);
    }
    if (isError) {
      setShowError(true);
    }
  }

  return (
    <main className='min-h-screen flex justify-center items-center'>
      <section className="login w-64 sm:w-80 md:w-[649px]" id='login'>
        <legend className='flex justify-center items-center mb-11 '>
          <h5>LOG IN INTO YOUR ACCOUNT</h5>
        </legend>
        {showError && <MyError errorMessage='Incorrect combination of user name and password.' />}
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLoginSubmit}
        >
          <Form className='flex flex-col text-sm w-full'>
            <MyTextInput
              id='email'
              label="Email Address"
              name="email"
              type="email"
              onFocus={() => setShowError(false)}
            />
            <MyTextInput
              id='password'
              label="Password"
              name="password"
              type="password"
              className='mt-8'
              onFocus={() => setShowError(false)}
            />
            <Link href="/request-password-reset" className='underline decoration-1 mt-3'>FORGET YOUR PASSWORD?</Link>

            <MyButton label='LOG IN' type={ButtonType.SUBMIT} />

            <Link href="/signup" className='underline decoration-1 text-center mt-3'>CREATE AN ACCOUNT</Link>
          </Form>
        </Formik>
      </section>
    </main>
  )
}

export default Login