import React from 'react'

const Footer = () => {
  return (
          <footer className="self-stretch bg-whitesmoke flex flex-col items-start justify-start pt-[4.625rem] pb-[4.125rem] pr-[6.875rem] pl-[4.813rem] box-border gap-[0.688rem] max-w-full text-left text-[1rem] text-black font-urbanist mq750:pr-[1.688rem] mq750:box-border mq1050:pl-[2.375rem] mq1050:pr-[3.438rem] mq1050:box-border flex">
        <div className="w-[120rem] h-[14.438rem] relative bg-whitesmoke hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem_0rem] max-w-full">
        <div className="w-[30.938rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
          <div className="w-[5.75rem] relative tracking-[0.1em] inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)] z-[1]">
            FACEBOOK
          </div>
          <div className="w-[6.375rem] relative tracking-[0.1em] inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)] z-[1]">
            INSTAGRAM
          </div>
          <div className="w-[5.813rem] relative tracking-[0.1em] inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)] z-[1]">
            PINTEREST
          </div>
          <div className="w-[4.813rem] relative tracking-[0.1em] inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)] z-[1]">
            TWITTER
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[36.75rem] box-border flex flex-row items-center justify-between py-[0rem] pr-[2rem] pl-[1.625rem] gap-[1.25rem] max-w-full z-[1] border-[1px] border-solid border-black mq450:flex-wrap">
            <div className="relative tracking-[0.1em]">ENTER EMAIL</div>
            <div className="self-stretch w-[36.75rem] relative box-border hidden max-w-full border-[1px] border-solid border-black" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[2.625rem] flex flex-row items-center justify-start gap-[0rem_2.188rem]">
              <div className="h-[2.625rem] w-[0.063rem] relative box-border z-[2] border-r-[1px] border-solid border-black" />
              <div className="relative text-[1rem] tracking-[0.1em] font-urbanist text-black text-left">
                SUBSCRIBE
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="relative text-[0.875rem] tracking-[0.1em] font-medium text-center inline-block max-w-full z-[1]">
    Copyright © 2023 Brun. All Rights Reserved By Brun
  </div>
    </footer>
  )
}

export default Footer