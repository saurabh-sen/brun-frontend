'use client'
import { RootState } from '@libs/store'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard'

const ProductRecommendation = () => {

  const { productListing } = useSelector((state: RootState) => state.productListing)

  return (
    <section className='max-w-[980px] mx-auto mt-5 sm:mt-10'>
      <h4 className="text-sm">YOU MAY ALSO LIKE</h4>
      <div className="products__card__container grid grid-cols-2 gap-8 sm:gap-20">
        {
          productListing.map((product, index) => <ProductCard key={index} {...product} />)
        }
      </div>
    </section>
  )
}

export default ProductRecommendation