"use client"
import SearchIcon from '@public/icons/common/SearchIcon'
import React from 'react'

const ProductSearch = () => {
  const [search, setSearch] = React.useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  return (
    <label htmlFor='search-product' className="search__container p-2 border border-[#E5E7EB] w-full flex">
      <SearchIcon />
      <input type="search" name="search-product" id="search-product" onChange={handleChange} value={search} placeholder='SEARCH BY PRODUCT NAME OR SKU' className='w-full bg-transparent outline-none h-full ml-3' />
    </label>
  )
}

export default ProductSearch