import React, { useEffect, useRef } from 'react';

interface ISearchBox {
  isOpen: boolean;
}

function SearchBox({ isOpen }: ISearchBox) {
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef?.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className='search__container mt-20 md:mt-36 border-t border-black px-3'>
          <div className='flex w-full md:w-[503px] py-3'>
            <div className="input__icon__container relative w-full">
              <input
                ref={inputRef}
                className='w-full flex justify-center p-3 outline-none'
                type='text'
                placeholder='Search for products...'
              />
              <span className="material-symbols-rounded cursor-pointer absolute right-2 top-1/2 -translate-y-1/2">
                search
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBox;
