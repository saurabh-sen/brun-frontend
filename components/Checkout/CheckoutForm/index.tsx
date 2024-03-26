"use client"
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import MyTextInput from '@components/common/MyTextInput'
import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { deliveryInitialValues, deliveryValidationSchema, handleDeliverySubmit } from '@services'
import MyTextArea from '@components/common/MyTextArea'

const CheckoutForm = () => {

    const [billingAddress, setBillingAddress] = useState<boolean>(false)

    return (
        <Formik
            initialValues={deliveryInitialValues}
            validationSchema={deliveryValidationSchema}
            onSubmit={handleDeliverySubmit}
        >
            <Form className='flex flex-col text-sm w-full gap-6 md:gap-12 max-w-[649px]'>
                <p className="input__heading">DELIVERY</p>
                <MyTextInput id='country' label='COUNTRY/REGION*' name='country' type='text' />
                <MyTextInput id='firstname' label='FIRST NAME*' name='firstname' type='text' />
                <MyTextInput id='lastname' label='LAST NAME*' name='lastname' type='text' />
                <MyTextInput id='company' label='COMPANY (OPTIONAL)' name='company' type='text' />
                <MyTextInput id='phone' label='PHONE NUMBER*' name='phone' type='tel' />
                <MyTextArea id='address' label='ADDRESS*' name='address' />
                <MyTextInput id='locality' label='LOCALITY*' name='locality' type='text' />
                <MyTextInput id='state' label='STATE*' name='state' type='text' />
                <MyTextInput id='pincode' label='PINCODE*' name='pincode' type='text' />
                <MyTextInput id='moreinfo' label='MORE INFO (OPTIONAL)' name='moreinfo' type='text' />
                <div className="checkout__button__container flex gap-5 items-center">
                    <MyOutlinedButton active={billingAddress === false} handleClick={() => setBillingAddress(false)}>BILLING ADDRESS SAME AS DELIVERY ADDRESS</MyOutlinedButton>
                    <MyOutlinedButton active={billingAddress === true} handleClick={() => setBillingAddress(true)}>USE A DIFFERENT BILLING ADDRESS</MyOutlinedButton>
                </div>
                {
                    billingAddress && (
                        <BillingAddressForm />
                    )
                }
                <button className='border border-black text-black px-24 py-4 w-max'>PAY NOW</button>
            </Form>
        </Formik>
    )
}

const BillingAddressForm = () => {
    return (
        <>
            <MyTextInput id='country' label='COUNTRY/REGION*' name='country' type='text' />
            <MyTextInput id='firstname' label='FIRST NAME*' name='firstname' type='text' />
            <MyTextInput id='lastname' label='LAST NAME*' name='lastname' type='text' />
            <MyTextInput id='company' label='COMPANY (OPTIONAL)' name='company' type='text' />
            <MyTextInput id='phone' label='PHONE NUMBER*' name='phone' type='tel' />
            <MyTextArea id='address' label='ADDRESS*' name='address' />
            <MyTextInput id='locality' label='LOCALITY*' name='locality' type='text' />
            <MyTextInput id='state' label='STATE*' name='state' type='text' />
            <MyTextInput id='pincode' label='PINCODE*' name='pincode' type='text' />
            <MyTextInput id='moreinfo' label='MORE INFO (OPTIONAL)' name='moreinfo' type='text' />
        </>
    )
}

export default CheckoutForm