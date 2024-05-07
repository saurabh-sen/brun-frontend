import React, { ChangeEvent } from 'react'
import Image from 'next/image'
import upload from '@public/assets/uploadimage.png'

const AddProductImages = () => {

  const [imageDataDefault, setImageDataDefault] = React.useState<string | null>(null)
  const [imageDataOne, setImageDataOne] = React.useState<string | null>(null)
  const [imageDataTwo, setImageDataTwo] = React.useState<string | null>(null)
  const [imageDataThree, setImageDataThree] = React.useState<string | null>(null)
  const [imageDataFour, setImageDataFour] = React.useState<string | null>(null)

  return (
    <section id="addproductimages">
      <h2 className='mb-6 mt-8'>IMAGES</h2>
      <div className="addproductimages__container border border-gray-200">
        <p className="text-gray-500 p-2">Images will appear in the store front of your website.</p>
        <div className="images__container grid gap-3 grid-cols-4 grid-rows-2 p-5" style={{ gridTemplateRows: 'repeat(2, 230px)', gridTemplateColumns: 'repeat(4, 1fr)' }} >
          <InputImage key={1} heading='Click to upload or drag and drop' subHeading='(JPG 0r PNG  maximum 500x689)' className="col-span-2 row-span-2" imageData={imageDataDefault} setImageData={setImageDataDefault} index={0} />
          <InputImage key={2} imageData={imageDataOne} setImageData={setImageDataOne} index={1} />
          <InputImage key={3} imageData={imageDataTwo} setImageData={setImageDataTwo} index={2} />
          <InputImage key={4} imageData={imageDataThree} setImageData={setImageDataThree} index={3} />
          <InputImage key={5} imageData={imageDataFour} setImageData={setImageDataFour} index={4} />
        </div>
      </div>
    </section>
  )
}

export default AddProductImages


interface IInputImage {
  className?: string;
  heading?: string;
  subHeading?: string;
  imageData: string | null;
  index: number;
  setImageData: (value: string | null) => void;
}

const InputImage = ({ className, heading, subHeading, imageData, setImageData, index }: IInputImage) => {

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return console.log('No files');
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result as string);
    }
    reader.readAsDataURL(file);
  }

  const handleRemoveImage = () => {
    setImageData(null);
  }

  return (
    <div className={`image__input__container ${className}`}>
      {
        imageData
          ? (
            <div className="image__preview__container w-full h-full relative cursor-pointer ">
              <Image src={imageData} alt='image' fill className='rounded-md object-cover' />
              <span className="material-symbols-rounded absolute z-10 right-2 top-2" onClick={handleRemoveImage}>
                close
              </span>
            </div>
          )
          : (<label htmlFor={`imageinput${index}`} className="inputimage__container relative border border-gray-200 border-dashed rounded-md flex justify-center items-center flex-col w-full h-full cursor-pointer ">
            <Image src={upload} alt='upload' width={70} height={70} />
            {
              heading && subHeading && (
                <div className="inputimage__label__container mt-7">
                  <p className="text-[#111927]">{heading}</p>
                  <p className="text-[#6C737F]">{subHeading}</p>
                </div>
              )
            }
            <input id={`imageinput${index}`} type="file" className="inputimage invisible absolute -z-50" onChange={handleFileChange} />
          </label>)
      }
    </div>
  )
}