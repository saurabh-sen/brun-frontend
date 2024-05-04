import MyOutlinedButton from '@components/common/MyOutlinedButton'
import React from 'react'
import EditAndDelete from './EditAndDelete';
import ColorsSelectionFilter from './ColorsSelectionFilter';

const ProductFilters = () => {

  return (
    <div className="adminproduct__filters flex justify-between">
      <div className="filters__container flex items-center gap-3">
        <MyOutlinedButton active>ALL PRODUCTS</MyOutlinedButton>
        <MyOutlinedButton>BOTTOMS</MyOutlinedButton>
        <MyOutlinedButton>TOPS</MyOutlinedButton>
        <MyOutlinedButton>CREW NECK</MyOutlinedButton>
        <MyOutlinedButton>POLO</MyOutlinedButton>
        <MyOutlinedButton>FULL SLEEVE POLO</MyOutlinedButton>
        <MyOutlinedButton>SWEAT</MyOutlinedButton>
        <MyOutlinedButton>SHIRT</MyOutlinedButton>
        <ColorsSelectionFilter />
      </div>
      <EditAndDelete />
    </div>
  )
}

export default ProductFilters