"use client"

import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import Link from 'next/link'
import MyTextInput from '@components/common/MyTextInput'
import { loginValidationSchema, handleLoginSubmit } from '@services'
import { loginInitialValues } from '@contants/loginConstant'
import MyButton from '@components/common/MyButton'
import { ButtonType } from '@enumsAndTypes/common/common.types'

const Login = () => {

  const [showError, setShowError] = useState(false);

  return (
    <main className='min-h-screen flex justify-center items-center'>
      <section className="login w-64 sm:w-80 md:w-[649px]" id='login'>
        <legend className='flex justify-center items-center mb-11 '>
          <h5>LOG IN INTO YOUR ACCOUNT</h5>
        </legend>
        {showError && (
          <div className="error text-[#767676] text-sm flex gap-1 items-center mb-6">
            <span className="material-symbols-outlined text-sm">
              info
            </span>
            <p>Incorrect combination of user name and password.</p>
          </div>
        )}
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLoginSubmit(setShowError)}
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