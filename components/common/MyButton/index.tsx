import { ButtonType } from '@enumsAndTypes/common/common.types';
import React from 'react'

interface IMyButton {
    label: string;
    type: ButtonType.SUBMIT | ButtonType.BUTTON;
}

const MyButton = ({label, type} : IMyButton) => {
    return (
        <button type={type} className='bg-black text-white px-24 py-4 w-max mx-auto mt-11'>{label}</button>
    )
}

export default MyButton