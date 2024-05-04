import LoadMoreProducts from '@components/client/Products/LoadMoreProducts'
import ProductCategory from '@components/client/Products/ProductCategory'
import ProductList from '@components/client/Products/ProductList'
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