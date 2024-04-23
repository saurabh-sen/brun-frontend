"use client";
import ProductDetailedView from '@components/Products/ProductDetailedView'
import ProductRecommendation from '@components/Products/ProductRecommendation'
import ProductReviewAndLook from '@components/Products/ProductReviewAndLook'
import { RootState } from '@libs/store';
import React from 'react'
import { useSelector } from 'react-redux';

const ProductDetails = ({ params }: { params: { slug: string } }) => {

  const isSearchBarOpen = useSelector((state: RootState) => state.homepage.isSearchBarOpen)

  return (
    <main className={`product__details m-7 ${isSearchBarOpen ? 'mt-52' : 'mt-28'}`}>
      <ProductDetailedView productSlug={params.slug} />
      <ProductReviewAndLook />
      <ProductRecommendation />
    </main>
  )
}

export default ProductDetails