import React from 'react'

const Footer = () => {
  return (
    <footer className="self-stretch bg-whitesmoke flex flex-col items-start justify-start pt-[4.625rem] pb-[4.125rem] pr-[6.875rem] pl-[4.813rem] box-border gap-[0.688rem] max-w-full text-left text-[1rem] text-black font-urbanist mq750:pr-[1.688rem] mq750:box-border mq1050:pl-[2.375rem] mq1050:pr-[3.438rem] mq1050:box-border flex">
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
      <div className="w-[120rem] h-[14.438rem] relative bg-whitesmoke hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem_0rem] max-w-full">

        <div className="w-[30.938rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
          <div className="w-[5.75rem] relative tracking-[0.1em] inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)] z-[1]">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3036_661)">
                <path d="M29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15Z" stroke="black" />
                <path d="M19.1354 9.9834C18.6318 9.9834 18.2227 10.3925 18.2227 10.8961C18.2227 11.3997 18.6318 11.8088 19.1354 11.8088C19.6389 11.8088 20.0481 11.3997 20.0481 10.8961C20.0481 10.3925 19.6389 9.9834 19.1354 9.9834Z" fill="black" />
                <path d="M15.0628 11.1543C12.9415 11.1543 11.2168 12.879 11.2168 15.0003C11.2168 17.1216 12.9415 18.8463 15.0628 18.8463C17.1841 18.8463 18.9088 17.1216 18.9088 15.0003C18.9088 12.879 17.1841 11.1543 15.0628 11.1543ZM15.0628 17.4615C13.7032 17.4615 12.6016 16.3536 12.6016 15.0003C12.6016 13.647 13.7095 12.5391 15.0628 12.5391C16.4161 12.5391 17.524 13.647 17.524 15.0003C17.524 16.3536 16.4161 17.4615 15.0628 17.4615Z" fill="black" />
                <path d="M18.1164 22.8054H11.8848C9.2977 22.8054 7.19531 20.703 7.19531 18.1159V11.8843C7.19531 9.29722 9.2977 7.19482 11.8848 7.19482H18.1164C20.7035 7.19482 22.8059 9.29722 22.8059 11.8843V18.1159C22.8059 20.703 20.7035 22.8054 18.1164 22.8054ZM11.8848 8.66146C10.1097 8.66146 8.66195 10.1092 8.66195 11.8843V18.1159C8.66195 19.891 10.1097 21.3388 11.8848 21.3388H18.1164C19.8915 21.3388 21.3392 19.891 21.3392 18.1159V11.8843C21.3392 10.1092 19.8915 8.66146 18.1164 8.66146H11.8848Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_3036_661">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <div className="w-[6.375rem] relative tracking-[0.1em] inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)] z-[1]">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3036_667)">
                <path d="M29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15Z" stroke="black" />
                <path d="M16.6616 24.5552V16.196H19.4501L19.9789 12.7403H16.6616V10.4931C16.6616 9.54889 17.1274 8.62359 18.613 8.62359H20.1237V5.67772C20.1237 5.67772 18.7514 5.44482 17.4485 5.44482C14.7166 5.44482 12.929 7.1003 12.929 10.0965V12.734H9.88867V16.1897H12.929V24.5489H16.6679L16.6616 24.5552Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_3036_667">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-[5.813rem] relative tracking-[0.1em] inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)] z-[1]">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3036_670)">
                <path d="M29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15Z" stroke="black" />
                <path d="M16.2723 13.9488L21.2451 8.16406H20.068L15.7499 13.1871L12.3004 8.16406H8.32227L13.5405 15.7553L8.32227 21.817H9.49935L14.0629 16.517L17.7075 21.817H21.6857L16.2723 13.9425V13.9488ZM14.6546 15.8246L14.1259 15.0692L9.92109 9.0516H11.7339L15.1267 13.9047L15.6555 14.6601L20.068 20.9735H18.2551L14.6546 15.8246Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_3036_670">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-[4.813rem] relative tracking-[0.1em] inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)] z-[1]">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3036_673)">
                <path d="M29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15Z" stroke="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9747 17.8013C13.9621 17.8453 13.9495 17.8894 13.9369 17.9272C13.3452 20.2499 13.276 20.7723 12.6654 21.8487C12.3759 22.3648 12.0485 22.8495 11.6835 23.3153C11.6394 23.3657 11.6016 23.4349 11.5198 23.4223C11.4317 23.4035 11.4254 23.3216 11.4128 23.2524C11.3121 22.5474 11.2617 21.8361 11.2869 21.1248C11.3184 20.1932 11.4317 19.8785 12.6277 14.8365C12.6465 14.761 12.6277 14.698 12.6025 14.6288C12.3129 13.8546 12.2563 13.0677 12.5081 12.2746C13.0494 10.5562 15.0007 10.424 15.3406 11.8403C15.5483 12.7152 14.9944 13.8672 14.5664 15.5604C14.2139 16.9578 15.8631 17.9523 17.2668 16.9326C18.5634 15.9884 19.067 13.735 18.9726 12.1298C18.7838 8.93849 15.284 8.25238 13.062 9.2784C10.519 10.4555 9.93986 13.6091 11.0855 15.0505C11.2303 15.2331 11.3436 15.3464 11.2932 15.5289C11.2177 15.8185 11.1547 16.108 11.0729 16.3976C11.0162 16.6116 10.8337 16.6871 10.6197 16.599C10.1979 16.4291 9.84544 16.1584 9.55589 15.8059C8.58023 14.5973 8.30327 12.2054 9.59366 10.1848C11.0225 7.94395 13.6788 7.03753 16.1086 7.31449C19.0104 7.64181 20.8421 9.6246 21.182 11.8718C21.3394 12.8978 21.2261 15.4219 19.7909 17.2033C18.1354 19.2553 15.4602 19.3875 14.2202 18.1286C14.1258 18.0342 14.0502 17.9209 13.9558 17.8013H13.9747Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_3036_673">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
        </div>
        <div className="relative text-[0.875rem] tracking-[0.1em] font-medium text-center inline-block max-w-full z-[1]">
          Copyright © 2023 Brun. All Rights Reserved By Brun
        </div>

      </div>

    </footer>

  )
}

export default Footer