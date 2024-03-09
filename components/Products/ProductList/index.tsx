"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@libs/store';
import ProductCard from '../ProductCard';
import NoProductFound from '../NoProductFound';

const generateLayout = (layout: number) => {
  switch (layout) {
    case 1:
      return 'grid-cols-1 gap-x-8 gap-y-12';
    case 5:
      return 'grid-cols-5 gap-x-8 gap-y-12';
    default:
      return 'grid-cols-2 gap-8 sm:gap-20';
  }
}

const ProductList = () => {

  const { layout, productListing } = useSelector((state: RootState) => state.productListing)

  return (
    <section className="productlist my-8 max-w-7xl m-auto">
      <div className={`list__container grid ${generateLayout(layout)}`}>
        {
          productListing.length > 0 && productListing.map((product, index) => <ProductCard key={index} {...product} />)
        }
      </div>
      {
        productListing.length === 0 && <NoProductFound title='NO RESULTS FOUND, TRY REMOVING A FILTER' className="mt-8" />
      }
    </section>
  )
}

export default ProductList