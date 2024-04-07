'use client'
import React, { useState } from 'react'

import CheckoutOrder from '@components/Checkout/CheckoutOrder'
import CheckoutForm from '@components/Checkout/CheckoutForm'
import ThanksForYourOrder from '@components/Checkout/ThanksForYourOrder'
import { useSelector } from 'react-redux'
import { RootState } from '@libs/store'

// TODO: ADD CHECKOUT APIS AND INTEGRATE RAZORPAY
const Checkout = () => {

    const [showThankyou, setShowThankyou] = useState<boolean>(false);
    const isSearchBarOpen = useSelector((state: RootState) => state.homepage.isSearchBarOpen)

    console.log('showThankyou', showThankyou)

    return (
        <section id='checkout' className={`checkoutpage flex flex-col-reverse md:flex-row gap-4 md:gap-16 my-3 px-4 mx-auto justify-center min-h-screen ${isSearchBarOpen ? 'mt-52' : 'mt-28'}`}>
            {
                showThankyou
                    ? <ThanksForYourOrder />
                    : <CheckoutForm />
            }
            <CheckoutOrder showThankyou={showThankyou} />
        </section>
    )
}

export default Checkout