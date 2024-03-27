import React, { useEffect, useRef } from 'react';

function SearchBox({ isOpen }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus(); // Focus on input field when the search box is displayed
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className='search'>
          <div className='w-[93%] h-[1px] bg-white m-auto'></div>
          <div className='flex absolute top-40 left-14 '>
            <input
              ref={inputRef}
              className='w-[503px] h-16 flex justify-center p-3 outline-none'
              type='text'
              placeholder='Search for products...'
            />
            <img
              className='absolute flex left-[85%] cursor-pointer'
              src='/vector1.svg'
              alt='search'
            />
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBox;
