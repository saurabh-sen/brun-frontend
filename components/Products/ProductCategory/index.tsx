'use client'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { PRODUCTCATEGORIES, ProductCategoryEnum, ProductListingLayoutEnum } from '@modals/productListing/productListing.types'
import { setLayout, setProductCategory } from '@libs/features/productListing/productListingSlice'
import { RootState } from '@libs/store'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MoreFilters from '../MoreFilters'
import { ButtonType } from '@modals/common/common.types'

const ProductCategory = () => {

    const dispatch = useDispatch();
    const { layout, categorySelected } = useSelector((state: RootState) => state.productListing);
    // const [showFilters, setShowFilters] = useState(false);

    const changeCategory = (category: ProductCategoryEnum) => {
        dispatch(setProductCategory(category))
    }

    const handleSetLayout = (layout: ProductListingLayoutEnum) => {
        dispatch(setLayout(layout))
    }

    // const handleShowFilters = () => {
    //     setShowFilters(!showFilters);
    // }

    return (
        <nav className='products__category max-w-7xl flex flex-col gap-3 m-auto select-none'>
            <div className="quick__filters flex justify-between flex-col-reverse gap-7 sm:flex-row">
                <div className="Products__categories flex items-center gap-2 flex-wrap">
                    {
                        PRODUCTCATEGORIES.map((category, index) => (
                            <MyOutlinedButton key={index} handleClick={() => changeCategory(category)} active={category === categorySelected} type={ButtonType.BUTTON}>{category}</MyOutlinedButton>
                        ))
                    }
                </div>
                <div className="products__filters flex items-center flex-wrap gap-2 justify-between">
                    <p className="selected__category sm:hidden">ALL PRODUCTS</p>
                    <div className='flex items-center flex-wrap gap-4 relative'>
                        <div className={`layout__button hidden sm:flex pb-2 cursor-pointer ${layout === 2 && 'border-b border-black'} `} onClick={() => handleSetLayout(ProductListingLayoutEnum.TWO_COLUMN)}>
                            <span className="material-symbols-rounded rotate-90 text-base leading-4 sm:text-lg sm:leading-5">
                                view_agenda
                            </span>
                        </div>

                        {/* for big screen hide below button during 0 - 420px */}
                        <div className={`layout__button hidden sm:flex pb-2 cursor-pointer ${layout !== 2 && 'border-b border-black'} `} onClick={() => handleSetLayout(ProductListingLayoutEnum.FIVE_COLUMN)}>
                            <span className="material-symbols-rounded text-base leading-4 sm:text-lg sm:leading-5 ">
                                grid_view
                            </span>
                        </div>

                        {/* for small screen: hide below button during 420px - ~ */}
                        <div className={`layout__button sm:hidden pb-2 cursor-pointer ${layout !== 2 && 'border-b border-black'} `} onClick={() => handleSetLayout(ProductListingLayoutEnum.ONE_COLUMN)}>
                            <span className="material-symbols-rounded text-base leading-4 sm:text-lg sm:leading-5 ">
                                grid_view
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <MoreFilters />
        </nav>
    )
}

export default ProductCategory