"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ButtonType } from '@modals/common/common.types'
import MyOutlinedButton from '@components/common/MyOutlinedButton'

const ProductHeader = () => {

  const router = useRouter();

  const handleNewProduct = () => {
    router.push('/admin/products/add-product');
  }

  return (
    <div className='flex justify-between items-center'>
      <h1>PRODUCT LIST</h1>
      <MyOutlinedButton handleClick={handleNewProduct} type={ButtonType.BUTTON} className='bg-black text-white text-sm'>ADD NEW PRODUCT</MyOutlinedButton>
    </div>
  )
}

export default ProductHeader