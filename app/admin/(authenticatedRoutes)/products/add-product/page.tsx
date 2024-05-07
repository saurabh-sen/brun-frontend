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

const AddProduct = () => {

  const [isValid, setIsValid] = useState(false)
  const [isValidating, setIsValidating] = useState(false)

  return (
    <section id='addproduct'>
      <Formik
        initialValues={addProductInitialValues}
        validationSchema={addProductValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleAddProduct(values);
          setSubmitting(false);
        }}
        validateOnChange={true}
        validateOnBlur={false}
        validate={(values) => {
          setIsValidating(true);
          addProductValidationSchema.isValid(values)
            .then(valid => {
              setIsValid(valid);
              setIsValidating(false);
            });
        }}
      >
        <Form className='flex flex-col text-sm w-full gap-6 max-w-[1048px] mb-12'>
          <AddMetaData />
          <AddBasicDetails />
          <AddProductImages />
          <AddCategory />
          <AddSize />
          <AddPrice />
          <AddCompleteTheLook />
          <AddButtons />
        </Form>
      </Formik>
    </section>
  )
}

export default AddProduct