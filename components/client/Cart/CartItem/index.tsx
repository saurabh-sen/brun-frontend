import Image from 'next/image'
import React, { MouseEvent } from 'react'
import product from "@public/assets/product.jpg"
import Delete from '@public/icons/common/Delete'
import { ICartProduct } from '@modals/cart/cart.types'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { removeProductFromCart, updateProductQuantity } from '@libs/features/cart/cartSlice'

const CartItem = ({ image, size, color, title, slug, quantity, price, id }: ICartProduct) => {

    const dispatch = useDispatch();

    const handleQuantity = (event: MouseEvent, quantityCount: number) => {
        event.preventDefault()
        if(quantityCount === 0)return;
        dispatch(updateProductQuantity({ id, quantity: quantityCount }))
    }

    const handleRemoveItem = (event: MouseEvent) => {
        event.preventDefault();
        dispatch(removeProductFromCart(id));
    }

    return (
        <Link href={`/products/${slug}`} className='flex items-center gap-6'>
            <Image src={image} alt="product image" width={136} height={190} />
            <div className="text__container flex flex-col md:flex-row gap-4 flex-wrap items-start md:items-center">
                <div className="CartItem__text  max-w-[194px] flex flex-col gap-6 justify-center">
                    <p className="item__text text-sm">{title}</p>
                    <div className="item__size__color text-sm uppercase flex gap-5 ">
                        <p className="">Size {size}</p>
                        <p className="">{color}</p>
                    </div>
                    <p className="item__price ">₹ {price}</p>
                </div>
                <div className="cart__buttons flex gap-5 items-center relative z-10">
                    <div className="quantity__container flex border border-black text-sm w-max py-[2px] h-max">
                        <button className='border-none outline-none px-4' onClick={(e) => handleQuantity(e, quantity + 1)}>+</button>
                        <p>{quantity}</p>
                        <button className='border-none outline-none px-4' onClick={(e) => handleQuantity(e, quantity - 1)}>-</button>
                    </div>
                    <Delete onClick={handleRemoveItem} />
                </div>
            </div>
        </Link>
    )
}

export default CartItem