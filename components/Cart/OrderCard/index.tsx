import React from 'react'
import product from "@public/assets/product.jpg"
import Image from 'next/image'
import MyOutlinedButton from '@components/common/MyOutlinedButton'

const OrderCard = () => {
  return (
    <div className='flex items-center gap-3'>
        <Image src={product} alt="product image" width={136} height={190} />
        <div className="CartItem__text flex flex-col gap-5">
            <p className="item__text text-sm max-w-[194px]">TEXTURED OVERSIZE KNIT POLO SHIRT</p>
            <MyOutlinedButton active={false} handleClick={() => alert("view product")} className='w-max'>VIEW PRODUCT</MyOutlinedButton>
        </div>
    </div>
  )
}

export default OrderCard