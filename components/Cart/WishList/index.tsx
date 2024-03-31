import Image from 'next/image';
import React from 'react'

import product from '@public/assets/product.jpg'
import Delete from '@public/icons/common/Delete';

const WishList = () => {
  return (
    <section className="wishlist flex flex-col gap-4 items-start">
      <WishListCard />
      <WishListCard />
      <WishListCard />
      <WishListCard />
      <WishListCard />
    </section>
  )
}

const WishListCard = () => {
  return (
    <div className="CartItem__text flex gap-6 justify-center items-center">
      <Image src={product} alt="product image" width={136} height={190} />
      <div className="text__container max-w-[194px] flex flex-col gap-4">
        <p className="item__text text-sm">TEXTURED OVERSIZE KNIT POLO SHIRT</p>
        <p className="item__price ">₹ 2990.00</p>
      </div>
      <Delete/>
    </div>
  )
};

export default WishList