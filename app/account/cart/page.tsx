'use client'
import CartBody from '@components/Cart/CartBody'
import CartNavbar from '@components/Cart/CartNavbar'
import WishList from '@components/Cart/WishList'
import TabsBody from '@components/common/Tabs/TabsBody/TabsBody'
import React from 'react'

const Cart = () => {

    const [activeTab, setActiveTab] = React.useState(1);

    return (
        <main className='cart__route flex flex-col gap-4 max-w-5xl my-3 px-4 mx-auto'>
            <CartNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="account__tabs__body mt-4 md:mt-8">
                <TabsBody show={activeTab === 1}>
                    <CartBody />
                </TabsBody>
                <TabsBody show={activeTab === 2}>
                    <WishList />
                </TabsBody>
            </div>
        </main>
    )
}

export default Cart