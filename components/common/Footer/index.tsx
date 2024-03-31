"use client"
import React from 'react'
import MyOutlinedButton from '../MyOutlinedButton'
import Insta from '@public/icons/footer/Insta'
import Facebook from '@public/icons/footer/Facebook'
import Twitter from '@public/icons/footer/Twitter'
import Pintrest from '@public/icons/footer/Pintrest'

const Footer = () => {
  return (
    <footer className="footer bg-[#F1F1F1] py-10 px-3 md:px-6 flex flex-wrap gap-5 items-center justify-center md:justify-between">
      <div className="footer__input__container">
        <div className="input__container w-full md:w-[588px] flex items-center">
          <input type="email" name="emailnotification" id="emailnotification" placeholder='ENTER EMAIL' className='w-full p-[10px] md:p-2 outline-none border border-black bg-transparent placeholder:text-black text-xs md:text-base' />
          <MyOutlinedButton active={false} handleClick={() => console.log('SUBSCRIBE')} className='!p-[10px] !px-8'>SUBSCRIBE</MyOutlinedButton>
        </div>
      </div>
      <div className="footer__text__icons flex flex-col items-center sm:items-end gap-5">
        <div className="social__icons flex items-center gap-3">
          <Insta />
          <Facebook />
          <Twitter />
          <Pintrest />
        </div>
        <p className="footer__copyright__text text-xs sm:text-sm">
          Copyright © 2023 Brun. All Rights Reserved By Brun
        </p>
      </div>
    </footer>
  )
}

export default Footer