import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { RootState } from '@libs/store'

import CartItem from '../CartItem'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { useMakeAuthenticatedAPICall } from '@services'
import { getUserIdToStorage } from '@services/tokens/tokens.service'
import { cartApi } from '@services/client/account/cart.service'
import { ICartApiResponse } from '@modals/cart/cart.types'
import { updateCartFromDB } from '@libs/features/cart/cartSlice'
import { ButtonType } from '@modals/common/common.types'

const CartBody = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart.cartProducts)
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount)
  const { callApi, data, error, loading } = useMakeAuthenticatedAPICall<ICartApiResponse>();


  useEffect(() => {
    const userId = getUserIdToStorage();
    // if userId is null or error is there then redirect to login
    if (!userId) {
      router.replace('/login');
    } else if (!cartProducts.length) callApi(cartApi());
  }, [])

  useEffect(() => {
    if (data) {
      const { fetchProducts, totalAmount } = data.data;
      dispatch(updateCartFromDB({ fetchProducts, totalAmount }));
    }
  }, [data])

  if (loading) return <div>Loading...</div>
  if (error.isError) {
    router.replace('/login');
    return <div>Error occured: {error.message}</div>;
  }
  if (!data && !cartProducts.length) return null;

  return (
    <section id='cartbody' className='flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:relative min-h-screen'>
      {
        cartProducts.length > 0
          ? <>
            <div className="cart__container flex flex-col gap-4" >
              {
                cartProducts.map((item, idx) => <CartItem key={idx} {...item} />)
              }
            </div>
            <div className="cart__checkout border border-[#767676] p-5 md:p-10 max-w-[430px] h-max flex flex-col gap-6 text-sm md:sticky md:top-14">
              <p>TAX INCLUDED. SHIPPING AND DISCOUNTS CALCULATED AT CHECKOUT</p>
              <div className="checkout__price flex justify-between items-center ">
                <p className="">Total</p>
                <p className="">₹ {totalAmount}</p>
              </div>
              <MyOutlinedButton active handleClick={() => console.log('checkout')} className='!w-max !py-2 !px-8 md:!py-4 md:!px-16 m-auto' type={ButtonType.BUTTON} >CHECKOUT</MyOutlinedButton>
            </div>
          </>
          : <p className="empty__cart">NO ITEMS FOUND IN CART.</p>
      }
    </section>
  )
}

export default CartBody