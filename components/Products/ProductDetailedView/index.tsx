"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'

import product from '@public/assets/product.jpg'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { useGetProductDetailsQuery } from '@services'
import { useDispatch, useSelector } from 'react-redux'
import { setProductDetails } from '@libs/features/productDetailedView/ProductDetailedViewSlice'
import { RootState } from '@libs/store'
import { setProductCustomization } from '@libs/features/cart/cartSlice'

const COLORS = [
    {
        name: 'Black',
        hex: '#000000'
    },
    {
        name: 'White',
        hex: '#ffffff'
    },
    {
        name: 'Red',
        hex: '#ff0000'
    },
    {
        name: 'Blue',
        hex: '#0000ff'
    }
]

const SIZES = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL'
]

interface IProductDetailedView {
    productSlug: string
}

const ProductDetailedView = ({ productSlug }: IProductDetailedView) => {

    const dispatch = useDispatch();
    const { productDetails } = useSelector((state: RootState) => state.productDetailedView);

    const { data, isLoading, isError } = useGetProductDetailsQuery('dark-shenron-t-shirt1');
    const [selectedColor, setSelectedColor] = React.useState<string>('');
    const [selectedSize, setSelectedSize] = React.useState<string>('');


    useEffect(() => {
        if (data) {
            dispatch(setProductDetails(data.data));
            setSelectedColor(data.data.colours[0].color);
            setSelectedSize(data.data.sizes[0].size);
        }
    }, [data, dispatch])

    if (isLoading) return <p>Loading...</p>;

    if (isError) return <p>Error...</p>;

    const handleSetProduct = () => {
        const product = {
            id: productDetails.id,
            quantity: 1,
            size: selectedSize,
            color: selectedColor
        }
        dispatch(setProductCustomization(product))
    }

    return (
        <section className='ProductDetailedView flex flex-col md:flex-row gap-7 relative' id='ProductDetailedView'>
            <div className="product__images w-full flex overflow-scroll overscroll-auto md:overflow-hidden md:overscroll-none md:w-4/6 md:grid md:grid-cols-2 gap-7">
                <Image src={product} alt='product' width={500} height={700} />
                <Image src={product} alt='product' width={500} height={700} />
                <Image src={product} alt='product' width={500} height={700} />
                <Image src={product} alt='product' width={500} height={700} />
            </div>
            <div className="product__content w-max md:sticky md:top-0 md:left-0 flex flex-col h-max">
                <p className="product__name text-lg sm:text-3xl whitespace-normal">{productDetails.name}</p>
                <p className="product__price mt-2">₹ {productDetails.price}</p>
                <div className="product__colors mt-6">
                    <h5 className="colors__heading mb-2 ">CHOOSE COLOR</h5>
                    <div className="colors__container flex flex-wrap gap-2 justify-start items-center">
                        {
                            productDetails.colours.map((color, index) => <ColorCheckBox key={index} color={color} handleChange={handleSetProduct} active={color.color === selectedColor} />)
                        }
                    </div>
                </div>
                <div className="product__size mt-6">
                    <h5 className="size__heading mb-2">CHOOSE SIZE</h5>
                    <div className="size__container flex flex-wrap gap-2 justify-start items-center">
                        {
                            productDetails.sizes.map((size, index) => <MyOutlinedButton key={index} handleClick={handleSetProduct} active={size.size === selectedSize} className={size.is_available ? 'block' : 'hidden'} >{size.size}</MyOutlinedButton>)
                        }
                    </div>
                </div>
                <div className="product__quantity mt-6">
                    <h5 className="quantity__heading mb-2">QUANTITY</h5>
                    <div className="quantity__container flex gap-4 border border-black text-sm w-max px-2 py-1">
                        <button className='border-none outline-none'>+</button>
                        <p>1</p>
                        <button className='border-none outline-none'>-</button>
                    </div>
                </div>
                <div className="product__action mt-6">
                    <div className="action__button flex gap-2 text-sm mb-2">
                        <button className='border-none outline-none bg-black text-white px-24 py-2'>ADD</button>
                        <button className='border-none outline-none px-5 py-2 bg-[#F1F1F1] grid place-items-center'>
                            <span className="material-symbols-rounded">
                                favorite
                            </span>
                        </button>
                    </div>
                    <button className='text-sm px-20 py-2 border border-black w-max'>BUY NOW</button>
                </div>
            </div>
        </section>
    )
}

interface IColorCheckBox {
    color: {
        color: string;
        is_available: boolean;
    };
    handleChange: () => void;
    active: boolean;
}

const ColorCheckBox = ({ color, handleChange, active }: IColorCheckBox) => {
    return (
        <label htmlFor={color.color} className='px-4 py-1 checked:border checked:border-black' style={{
            backgroundColor: color.color,
            display: color.is_available ? 'block' : 'none'
        }} >
            <input type="checkbox" name='color' id={color.color} className='invisible' onChange={handleChange} checked={active} />
        </label>
    )
}

export default ProductDetailedView