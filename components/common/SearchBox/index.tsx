"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

interface ISearchBox {
  isOpen: boolean;
}

function SearchBox({ isOpen }: ISearchBox) {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      inputRef?.current?.focus();
    }
  }, [isOpen]);

  const handleSearch = () => {
    router.push(`/products?item=${inputRef.current?.value}`);
    console.log('searching...', inputRef.current?.value);
  };

  return (
    <>
      {isOpen && (
        <div className='search__container mt-4 border-t border-black p-3'>
          <div className='flex w-full md:w-[703px] border border-black'>
            <div className="input__icon__container relative w-full">
              <input
                ref={inputRef}
                className='w-full flex justify-center pl-3 pr-8 py-4 outline-none bg-transparent placeholder:text-black'
                type='text'
                placeholder='Search for products...'
              />
              <span className="material-symbols-rounded cursor-pointer absolute right-2 top-1/2 -translate-y-1/2" onClick={handleSearch}>
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
