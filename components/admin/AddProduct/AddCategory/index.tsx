import React from 'react'
import Category from './Category';
import SubCategory from './SubCategory';
import { RootState } from '@libs/store';
import { useSelector } from 'react-redux';
import MyBoxInput from '@components/admin/common/MyBoxInput';

interface IAddCategory {
  handleGetSubCategories: (value: string) => void;
  isSubCategoryLoading: boolean;
}

const AddCategory = ({ handleGetSubCategories, isSubCategoryLoading }: IAddCategory) => {

  const { categories, subCategories } = useSelector((state: RootState) => state.adminAddProductSlice)

  return (
    <section id="addcategory" className='flex flex-col w-full gap-4'>
      <h2 className='mb-6 mt-8'>CATEGORY</h2>
      <Category key="categorycomponent" title='CATEGORY' options={categories} handleClick={handleGetSubCategories} />
      <SubCategory key="subcategorycomponent" title='SUB CATEGORY' options={subCategories} isLoading={isSubCategoryLoading} />
      <ProductColor />
    </section>
  )
}

export default AddCategory

const ProductColor = () => {
  return (
    <div className='flex items-center gap-4 mt-4'>
      <MyBoxInput id='colorname' label='COLOR NAME' name='productColorName' type='text' className='w-1/2' />
      <MyBoxInput id='colorcode' label='COLOR CODE' name='productColorCode' type='text' className='w-1/2' />
    </div>
  )
}