import React from 'react'
// import product from "@public/assets/product.jpg"
import Image from 'next/image'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { IOrderHistory } from '@modals/account/account.types'
import { useRouter } from 'next/navigation'

const OrderCard = ({ image, title, slug }: IOrderHistory) => {

  const router = useRouter();

  const handleViewProduct = () => {
    router.push(`/products/${slug}`)
  }

  return (
    <div className='flex items-center gap-3'>
        <Image src={image} alt="product image" width={136} height={190} />
        <div className="CartItem__text flex flex-col gap-5">
            <p className="item__text text-sm max-w-[194px]">{title}</p>
            <MyOutlinedButton active={false} handleClick={handleViewProduct} className='w-max'>VIEW PRODUCT</MyOutlinedButton>
        </div>
    </div>
  )
}

export default OrderCard