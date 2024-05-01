import LoadMoreProducts from '@components/Products/LoadMoreProducts'
import ProductCategory from '@components/Products/ProductCategory'
import ProductList from '@components/Products/ProductList'
import React from 'react'

const Products = () => {

  return (
    <main className='Products text-xs sm:text-sm px-3 sm:px-0 mt-28'>
      <ProductCategory />
      <ProductList />
      <LoadMoreProducts />
    </main>
  )
}

export default Products