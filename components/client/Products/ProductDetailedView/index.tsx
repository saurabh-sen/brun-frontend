"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'

import product from '@public/assets/product.jpg'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { useMakeUnauthenticatedAPICall } from '@services'
import { useDispatch, useSelector } from 'react-redux'
import { setProductDetails } from '@libs/features/productDetailedView/ProductDetailedViewSlice'
import { RootState } from '@libs/store'
import { addProductToCart, removeProductFromCart, setDefaultProductCustomization, setProductQuantity, setProductSize } from '@libs/features/cart/cartSlice'
import { productDetailApiFetch } from '@services/client/productDetailedView/productDetailedView.service'
import ColorBox from './ColorBox'
import { IDefaultProductState } from '@modals/cart/cart.types'
import { ButtonType } from '@modals/common/common.types'

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
    const productCustomization = useSelector((state: RootState) => state.cart.productCustomization);
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
    // const isSearchBarOpen = useSelector((state: RootState) => state.homepage.isSearchBarOpen)

    const { color, id, quantity, size } = productCustomization;

    const { callApi, loading, error } = useMakeUnauthenticatedAPICall();

    useEffect(() => {
        const fetchData = async () => {
            const result = await callApi(productDetailApiFetch('dark-shenron-t-shirt1'));

            if (!result?.data) return;
            // setting default product state
            const defaultProductState: IDefaultProductState = {
                id: result.data.id,
                quantity: 1,
                size: result.data.sizes && Array.isArray(result.data.sizes) ? result.data.sizes[0]?.size : "",
                color: result.data.colours && Array.isArray(result.data.colours) ? result.data.colours[0]?.color : "",
                price: +result.data.price,
                title: result.data.name,
                slug: result.data.slug,
                image: result.data.image[0].image_url,
            }
            dispatch(setDefaultProductCustomization(defaultProductState))
            dispatch(setProductDetails(result.data));
        }
        fetchData();
    }, [])

    if (loading) return <p>Loading...</p>;

    if (error.isError) return <p>{error.message}...</p>;

    const handleSizeChange = (size: string) => {
        dispatch(setProductSize(size))
    }

    const handleQuantityChange = (quantityCount: number) => {
        if (quantityCount < 1) return;
        if (quantityCount > 10) return;
        dispatch(setProductQuantity(quantityCount))
    }

    const handleAddToCart = () => {
        dispatch(addProductToCart(productCustomization))
    }

    const handleRemoveFromCart = () => {
        dispatch(removeProductFromCart(id))
    }

    const handleAddToWishlist = () => {
        // TODO: call api to add to wishlist and show toast
        console.log('Add to Wishlist')
    }

    const handleBuyNow = () => {
        console.log('Buy Now')
    }

    const isProductInCart = (): boolean => {
        return cartProducts.some((item) => item.id === productDetails.id);
    }

    return (
        <section className='ProductDetailedView flex flex-col md:flex-row gap-7 relative' id='ProductDetailedView'>
            <div className="product__images w-full flex overflow-scroll overscroll-auto md:overflow-hidden md:overscroll-none md:w-4/6 md:grid md:grid-cols-2 gap-7">
                <Image src={product} alt='product' width={500} height={700} />
                <Image src={product} alt='product' width={500} height={700} />
                <Image src={product} alt='product' width={500} height={700} />
                <Image src={product} alt='product' width={500} height={700} />
            </div>
            <div className="product__content w-max md:sticky md:left-0 flex flex-col h-max md:top-28 ">
                <p className="product__name text-lg sm:text-3xl whitespace-normal">{productDetails.name}</p>
                <p className="product__price mt-2">₹ {productDetails.price}</p>
                <div className="product__colors mt-6">
                    <h5 className="colors__heading mb-2 ">CHOOSE COLOR</h5>
                    <div className="colors__container flex flex-wrap gap-2 justify-start items-center">
                        {
                            productDetails.colours.map((colorObj, index) => <ColorBox key={index} color={colorObj} active={colorObj.color === color} />)
                        }
                    </div>
                </div>
                <div className="product__size mt-6">
                    <h5 className="size__heading mb-2">CHOOSE SIZE</h5>
                    <div className="size__container flex flex-wrap gap-2 justify-start items-center">
                        {
                            productDetails.sizes.map((sizeObj, index) => <MyOutlinedButton key={index} handleClick={() => handleSizeChange(sizeObj.size)} active={sizeObj.size === size} className={sizeObj.is_available ? 'block' : 'hidden'} type={ButtonType.BUTTON} >{sizeObj.size}</MyOutlinedButton>)
                        }
                    </div>
                </div>
                <div className="product__quantity mt-6">
                    <h5 className="quantity__heading mb-2">QUANTITY</h5>
                    <div className="quantity__container flex gap-4 border border-black text-sm w-max px-2 py-1">
                        <button className='border-none outline-none' onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                        <p>{quantity}</p>
                        <button className='border-none outline-none' onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                    </div>
                </div>
                <div className="product__action mt-6">
                    <div className="action__button flex gap-2 text-sm mb-2">
                        {
                            isProductInCart() 
                            ? <button className='border-none outline-none bg-black text-white py-2 w-60 text-center' onClick={handleRemoveFromCart}>REMOVE</button>
                            : <button className='border-none outline-none bg-black text-white py-2 w-60 text-center' onClick={handleAddToCart}>ADD</button>
                        }
                        <button className='border-none outline-none px-5 py-2 bg-[#F1F1F1] grid place-items-center' onClick={handleAddToWishlist}>
                            <span className="material-symbols-rounded">
                                favorite
                            </span>
                        </button>
                    </div>
                    <button className='text-sm py-2 border border-black w-60 text-center' onClick={handleBuyNow}>BUY NOW</button>
                </div>
            </div>
        </section>
    )
}


export default ProductDetailedView