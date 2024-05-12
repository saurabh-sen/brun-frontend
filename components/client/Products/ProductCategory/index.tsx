'use client'
import React from 'react'
import { RootState } from '@libs/store'
import MoreFilters from '../MoreFilters'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonType } from '@modals/common/common.types'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { setLayout, setProductCategory } from '@libs/features/productListing/productListingSlice'
import { PRODUCTCATEGORIES, EProductCategoryEnum, EProductListingLayoutEnum } from '@modals/productListing/productListing.types'

const ProductCategory = () => {

    const dispatch = useDispatch();
    const { layout, categorySelected } = useSelector((state: RootState) => state.productListing);

    const changeCategory = (category: EProductCategoryEnum) => {
        dispatch(setProductCategory(category))
    }

    const handleSetLayout = (layout: EProductListingLayoutEnum) => {
        dispatch(setLayout(layout))
    }

    return (
        <nav className='products__category max-w-7xl flex flex-col gap-3 m-auto select-none pt-14'>
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
                        <div className={`layout__button hidden sm:flex pb-2 cursor-pointer ${layout === 2 && 'border-b border-black'} `} onClick={() => handleSetLayout(EProductListingLayoutEnum.TWO_COLUMN)}>
                            <span className="material-symbols-rounded rotate-90 text-base leading-4 sm:text-lg sm:leading-5">
                                view_agenda
                            </span>
                        </div>

                        {/* for big screen hide below button during 0 - 420px */}
                        <div className={`layout__button hidden sm:flex pb-2 cursor-pointer ${layout !== 2 && 'border-b border-black'} `} onClick={() => handleSetLayout(EProductListingLayoutEnum.FIVE_COLUMN)}>
                            <span className="material-symbols-rounded text-base leading-4 sm:text-lg sm:leading-5 ">
                                grid_view
                            </span>
                        </div>

                        {/* for small screen: hide below button during 420px - ~ */}
                        <div className={`layout__button sm:hidden pb-2 cursor-pointer ${layout !== 2 && 'border-b border-black'} `} onClick={() => handleSetLayout(EProductListingLayoutEnum.ONE_COLUMN)}>
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