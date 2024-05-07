import React from 'react'
import ProductTable from '@components/admin/products/ProductTable'
import ProductHeader from '@components/admin/products/ProductHeader'
import ProductSearch from '@components/admin/products/ProductSearch'
import ProductFilters from '@components/admin/products/ProductFilters'

const ProductListings = () => {
  return (
    <section id='product-listings' className='product-listing space-y-6'>
      <ProductHeader />
      <ProductSearch />
      <ProductFilters />
      <ProductTable />
    </section>
  )
}

export default ProductListings