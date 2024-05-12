"use client"
import React from 'react'
import { IAddButtons } from '@modals/admin'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { ButtonType } from '@modals/common/common.types'

const AddButtons = ({handleCancel}: IAddButtons) => {
  return (
    <section id="addbuttons" className='flex items-center justify-end gap-4'>
      <MyOutlinedButton className='!px-16 !py-2' handleClick={handleCancel}>CANCEL</MyOutlinedButton>
      <MyOutlinedButton className='!px-16 !py-2 bg-black text-white' type={ButtonType.SUBMIT}>ADD</MyOutlinedButton>
    </section>
  )
}

export default AddButtons