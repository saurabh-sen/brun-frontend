'use client'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { addProductInitialValues } from '@contants'
import AddSize from '@components/admin/AddProduct/AddSize'
import AddPrice from '@components/admin/AddProduct/AddPrice'
import AddButtons from '@components/admin/AddProduct/AddButtons'
import AddCategory from '@components/admin/AddProduct/AddCategory'
import AddMetaData from '@components/admin/AddProduct/AddMetaData'
import { addProductValidationSchema, handleAddProduct } from '@services'
import AddBasicDetails from '@components/admin/AddProduct/AddBasicDetails'
import AddProductImages from '@components/admin/AddProduct/AddProductImages'
import AddCompleteTheLook from '@components/admin/AddProduct/AddCompleteTheLook'
import { useCategory } from './usecategory.hook'
import FullScreenLoader from '@components/common/FullScreenLoader'

const AddProduct = () => {

  const { handleGetSubCategories, isSubCategoryLoading, isLoading, restOfTheFields } = useCategory();

  const handleCancel = () => {
    console.log('cancel')
  }

  if(isLoading) return <FullScreenLoader />

  return (
    <section id='addproduct'>
      <Formik
        initialValues={addProductInitialValues}
        validationSchema={addProductValidationSchema}
        onSubmit={(values) => handleAddProduct(values, restOfTheFields)}
      >
        <Form className='flex flex-col text-sm w-full gap-6 max-w-[1048px] mb-12'>
          <AddMetaData />
          <AddBasicDetails />
          <AddProductImages />
          <AddCategory handleGetSubCategories={handleGetSubCategories} isSubCategoryLoading={isSubCategoryLoading} />
          <AddSize />
          <AddPrice />
          <AddCompleteTheLook />
          <AddButtons handleCancel={handleCancel} />
        </Form>
      </Formik>
    </section>
  )
}

export default AddProduct