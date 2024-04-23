'use client'
import CartBody from '@components/Cart/CartBody'
import CartNavbar from '@components/Cart/CartNavbar'
import WishList from '@components/Cart/WishList'
import TabsBody from '@components/common/Tabs/TabsBody/TabsBody'
import { setCartPageActiveTab } from '@libs/features/cart/cartSlice'
import { RootState } from '@libs/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

    const activeTab = useSelector((state: RootState) => state.cart.cartPageActiveTab)
    const isSearchBarOpen = useSelector((state: RootState) => state.homepage.isSearchBarOpen);
    const dispatch = useDispatch();

    const setActiveTab = (tab: 1 | 2) => {
        dispatch(setCartPageActiveTab(tab))
    }

    return (
        <main className={`cart__route flex flex-col gap-4 max-w-5xl my-3 px-4 mx-auto min-h-screen ${isSearchBarOpen ? 'mt-52' : 'mt-32'}`}>
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