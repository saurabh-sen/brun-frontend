import Image from 'next/image'
import React from 'react'
// import top from '@public/assets/'
import product from '@public/assets/product.jpg'

// const CATEGORY = [ 
//   {
//     image: top,
//     name: 'TOP',
//   },
//   {
//     image : bottom,
//     name: 'BOTTOM',
//   }
// ]

const AddCategory = () => {


  return (
    <section id="addcategory" className='flex flex-col w-full gap-4'>
      <h2 className='mb-6 mt-8'>CATEGORY</h2>
      <MyBoxSelect title='CATEGORY' options={['top', 'bottom']} />
      <MyBoxSelect title='SUB CATEGORY' options={['top', 'bottom']} />
    </section>
  )
}

export default AddCategory

interface IMyBoxSelect {
  title: string;
  options: any[]
}

const MyBoxSelect = ({ title, options }: IMyBoxSelect) => {

  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex flex-col gap-4 border border-gray-200 p-2'>
      <div className="select-header flex justify-between items-center w-full" onClick={() => setOpen(!open)}>
        <p>{value ? value : title}</p>
        <span className={`material-symbols-rounded transition-all duration-200 ${open && 'rotate-180'}`}>
          expand_more
        </span>
      </div>
      <div className={`select-body ${open ? 'flex flex-col' : 'hidden'}`}>
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