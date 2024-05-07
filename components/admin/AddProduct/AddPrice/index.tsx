import React from 'react'

const AddPrice = () => {

  const [price, setPrice] = React.useState('')
  const [discount, setDiscount] = React.useState('')

  const handlePiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(e.target.value)
  }

  return (
    <section id='addprice'>
      <h2 className="mb12">PRICING</h2>
      <div className="input__price flex items-center gap-4">
        <AddPriceInput icon='₹' onChange={handlePiceChange} value={price} placeholder='ADD BASE PRICE (SELLING PRICE)' />
        <AddPriceInput icon='%' onChange={handleDiscountChange} value={discount} placeholder='ADD DISCOUNT' />
      </div>
    </section>
  )
}

export default AddPrice

interface IAddPriceInput {
  icon: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddPriceInput = ({icon, placeholder, value, onChange}: IAddPriceInput) => {
  return (
    <label htmlFor="addpriceinput" className='border border-[#B6B6B6] py-2 w-1/2 flex items-center'>
      <span className="my-1 px-4 border-r border-[#B6B6B6] text-center text-xl text-[#9E9E9E]">{icon}</span>
      <input
        type="text"
        value={value}
        className="px-2 flex-1 outline-none"
        onChange={onChange}
        id="addpriceinput"
        placeholder={placeholder}
      />
    </label>
  )
}