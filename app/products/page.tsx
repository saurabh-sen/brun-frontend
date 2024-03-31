"use client";

import LoadMoreProducts from '@components/Products/LoadMoreProducts'
import ProductCategory from '@components/Products/ProductCategory'
import ProductList from '@components/Products/ProductList'
import { RootState } from '@libs/store';
import React from 'react'
import { useSelector } from 'react-redux';

const Products = () => {
  
  const { isSearchBarOpen } = useSelector((state: RootState) => state.homepage)

  return (
    <main className={`Products text-xs sm:text-sm px-3 sm:px-0 ${isSearchBarOpen ? 'mt-52' : 'mt-28'}`}>
      <ProductCategory />
      <ProductList />
      <LoadMoreProducts />
    </main>
  )
}

export default Products