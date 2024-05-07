import React from 'react'
import AdminSizeMultiSelect from './AdminSizeMultiSelect';
import { EProductSizeEnum } from '@modals/productListing/productListing.types';

const AddSize = () => {

  const [sizeSelected, setSizeSelected] = React.useState<EProductSizeEnum[]>([]);

  const handleSizeSelection = (size: EProductSizeEnum) => {
    if (sizeSelected.includes(size)) {
      const filtered = sizeSelected.filter(item => item !== size);
      setSizeSelected(filtered);
    } else {
      setSizeSelected([...sizeSelected, size]);
    }
  }

  return (
    <section id='addsize'>
      <h2 className="mb-6 mt-8">CHOOSE SIZES AVAILABLE FOR THIS PRODUCT</h2>
      <AdminSizeMultiSelect sizeSelected={sizeSelected} handleSizeSelection={handleSizeSelection} />
      {
        sizeSelected.length > 0 && (
          <GetSizeDetails sizeSelected={sizeSelected} />
        )
      }
    </section>
  )
}

export default AddSize;


const GetSizeDetails = ({ sizeSelected }: { sizeSelected: EProductSizeEnum[] }) => {
  return (
    <div className="getsizedetails border border-gray-200 p-4 mt-4">
      <GetSizeDetailshHeader />
      <GetSizeDetailsBody sizeSelected={sizeSelected} />
    </div>
  )
};


const GetSizeDetailshHeader = () => {
  return (
    <div className="grid grid-cols-5 gap-2 text-gray-500">
      <p className="text-sm font-medium">SIZE</p>
      <p className="text-sm font-medium">QUANTITY</p>
      <p className="text-sm font-medium">WEIGHT(G)</p>
      <p className="text-sm font-medium">DIMENSIONS(CM)</p>
      <p className="text-sm font-medium">SKU</p>
    </div>
  )
}

const GetSizeDetailsBody = ({ sizeSelected }: { sizeSelected: EProductSizeEnum[] }) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {
        sizeSelected.map((size, index) => (
          <GetSizeDetailsRow key={index} size={size} />
        ))
      }
    </div>
  )
}

const GetSizeDetailsRow = ({ size }: { size: string }) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <div className="flex items-center">
        <p className='border border-gray-200 p-2 w-full'>{size}</p>
      </div>
      <div className="flex items-center">
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='00' />
      </div>
      <div className="flex items-center">
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='00' />
      </div>
      <div className="flex items-center gap-2">
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='L' />
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='W' />
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='H' />
      </div>
      <div className="flex items-center">
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='00' />
      </div>
    </div>
  )
}