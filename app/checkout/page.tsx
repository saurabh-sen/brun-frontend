'use client'
import React, { useState } from 'react'

import CheckoutOrder from '@components/Checkout/CheckoutOrder'
import CheckoutForm from '@components/Checkout/CheckoutForm'
import ThanksForYourOrder from '@components/Checkout/ThanksForYourOrder'

const Checkout = () => {

    const [showThankyou, setShowThankyou] = useState<boolean>(true);

    console.log('showThankyou', showThankyou)

    return (
        <section id='checkout' className='flex flex-col-reverse md:flex-row gap-4 max-w-5xl my-3 px-4 mx-auto justify-between'>
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