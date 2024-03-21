'use client'
import React from 'react'

import CheckoutOrder from '@components/Checkout/CheckoutOrder'
import CheckoutForm from '@components/Checkout/CheckoutForm'

const Checkout = () => {
    return (
        <section id='checkout' className='flex flex-col-reverse md:flex-row gap-4 max-w-5xl my-3 px-4 mx-auto justify-center'>
            <CheckoutForm />
            <CheckoutOrder />
        </section>
    )
}

export default Checkout