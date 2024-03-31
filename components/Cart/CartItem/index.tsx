import Image from 'next/image'
import React from 'react'
import product from "@public/assets/product.jpg"
import Delete from '@public/icons/common/Delete'

const CartItem = () => {
    return (
        <div className='flex items-center gap-6 '>
            <Image src={product} alt="product image" width={136} height={190} />
            <div className="text__container flex flex-col md:flex-row gap-4 flex-wrap items-start md:items-center">
                <div className="CartItem__text  max-w-[194px] flex flex-col gap-6 justify-center">
                    <p className="item__text text-sm">TEXTURED OVERSIZE KNIT POLO SHIRT</p>
                    <div className="item__size__color text-sm uppercase flex gap-5 ">
                        <p className="">Size M</p>
                        <p className="">White</p>
                    </div>
                    <p className="item__price ">₹ 2990.00</p>
                </div>
                <div className="cart__buttons flex gap-5 items-center">
                    <div className="quantity__container flex gap-4 border border-black text-sm w-max px-2 py-[2px] h-max">
                        <button className='border-none outline-none'>+</button>
                        <p>1</p>
                        <button className='border-none outline-none'>-</button>
                    </div>
                    <Delete/>
                </div>
            </div>
        </div>
    )
}

export default CartItem