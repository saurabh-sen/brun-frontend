import MyOutlinedButton from '@components/common/MyOutlinedButton'
import React from 'react'

const AddButtons = () => {

  const handleCancel = () => {
    console.log('cancel')
  }

  const handleAdd = () => {
    console.log('add')
  }

  return (
    <section id="addbuttons" className='flex items-center justify-end gap-4'>
      <MyOutlinedButton className='!px-16 !py-2' handleClick={handleCancel}>CANCEL</MyOutlinedButton>
      <MyOutlinedButton className='!px-16 !py-2 bg-black text-white' handleClick={handleAdd}>ADD</MyOutlinedButton>
    </section>
  )
}

export default AddButtons