"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@libs/store';
import ProductCard from '../ProductCard';
import NoProductFound from '../NoProductFound';
import { generateLayout } from '@services';

const ProductList = () => {

  const { layout, productListing } = useSelector((state: RootState) => state.productListing)

  return (
    <section className="productlist my-8 max-w-7xl m-auto">
      <div className={`list__container ${generateLayout(layout)}`}>
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