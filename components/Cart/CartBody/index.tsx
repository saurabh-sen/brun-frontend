import React from 'react'
import CartItem from '../CartItem'
import MyOutlinedButton from '@components/common/MyOutlinedButton'

const CartBody = () => {
  return (
    <section id='cartbody' className='flex flex-col md:flex-row items-center md:items-start justify-between gap-10'>
      <div className="cart__container flex flex-col gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cart__checkout border border-[#767676] p-5 md:p-10 max-w-[430px] h-max flex flex-col gap-6">
        <p>TAX INCLUDED. SHIPPING AND DISCOUNTS CALCULATED AT CHECKOUT</p>
        <div className="checkout__price flex justify-between items-center">
          <p className="">Total</p>
          <p className="">₹ 11,960.00</p>
        </div>
        <MyOutlinedButton active handleClick={() => console.log('checkout')} className='!w-max !py-2 !px-8 md:!py-4 md:!px-16 m-auto'>CHECKOUT</MyOutlinedButton>
      </div>
    </section>
  )
}

export default CartBody