import React from 'react'
import Image from 'next/image';
import product from '@public/assets/product.jpg'
import MyOutlinedButton from '@components/common/MyOutlinedButton';

const AddCompleteTheLook = () => {
  return (
    <div id="addcompletethelook">
      <h2 className="mb-6 mt-8">COMPLETE THE LOOK RECOMMENDATIONs</h2>
      <div className="dropdown__container flex items-center gap-4">
      <MyBoxSelect title='COMPLETE THE LOOK' options={['top', 'bottom']} />
      <MyOutlinedButton className='!py-[6px] !px-4 !text-xl'>+</MyOutlinedButton>
      </div>
    </div>
  )
}

export default AddCompleteTheLook

interface IMyBoxSelect {
  title: string;
  options: any[]
}

const MyBoxSelect = ({ title, options }: IMyBoxSelect) => {

  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex-1 flex flex-col gap-4 border border-gray-200 p-2'>
      <div className="select-header flex justify-between items-center w-full cursor-pointer" onClick={() => setOpen(!open)}>
        <p>{value ? value : title}</p>
        <span className={`material-symbols-rounded transition-all duration-200 ${open && 'rotate-180'}`}>
          expand_more
        </span>
      </div>
      <div className={`select-body flex-col gap-2 ${open ? 'flex' : 'hidden'}`}>
        {options.map((option, index) => (
          <div key={index} className='select-option flex items-center gap-3' onClick={() => {
            setValue(option);
            setOpen(false);
          }}>
            <Image src={product} alt='product' width={30} height={30} />
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  )
}