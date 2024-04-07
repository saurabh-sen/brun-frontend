'use client'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { PRODUCTCATEGORIES, ProductCategoryEnum, ProductListingLayoutEnum } from '@modals/productListing/productListing.types'
import { setLayout, setProductCategory } from '@libs/features/productListing/productListingSlice'
import { RootState } from '@libs/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MoreFilters from '../MoreFilters'
import { ButtonType } from '@modals/common/common.types'

const ProductCategory = () => {

    const dispatch = useDispatch();
    const { layout, categorySelected } = useSelector((state: RootState) => state.productListing);
    const [showFilters, setShowFilters] = React.useState(false);

    const changeCategory = (category: ProductCategoryEnum) => {
        dispatch(setProductCategory(category))
    }

    const handleSetLayout = (layout: ProductListingLayoutEnum) => {
        dispatch(setLayout(layout))
    }

    const handleShowFilters = () => {
        setShowFilters(!showFilters);
    }

    return (
        <nav className='products__category max-w-7xl flex justify-between m-auto flex-col-reverse gap-7 sm:flex-row select-none'>
            <div className="Products__categories flex items-center gap-2 flex-wrap">
                {
                    PRODUCTCATEGORIES.map((category, index) => (
                        <MyOutlinedButton key={index} handleClick={() => changeCategory(category)} active={category === categorySelected} type={ButtonType.BUTTON}>{category}</MyOutlinedButton>
                    ))
                }
            </div>
            <div className="products__filters flex items-center flex-wrap gap-2 justify-between">
                <p className="selected__category sm:hidden">ALL PRODUCTS</p>
                <div className='flex items-center flex-wrap gap-2 relative'>
                    <MyOutlinedButton handleClick={handleShowFilters} active={true} type={ButtonType.BUTTON}>
                        <span className='w-16'>FILTERS {showFilters ? '-' : '+'}</span>
                    </MyOutlinedButton>
                    {
                        showFilters && <MoreFilters />
                    }
                    <MyOutlinedButton handleClick={() => handleSetLayout(ProductListingLayoutEnum.TWO_COLUMN)} active={layout === 2} type={ButtonType.BUTTON}>
                        <span className="material-symbols-rounded rotate-90 text-base leading-4 sm:text-lg sm:leading-5">
                            view_agenda
                        </span>
                    </MyOutlinedButton>

                    {/* for big screen hide below button during 0 - 420px */}
                    <MyOutlinedButton handleClick={() => handleSetLayout(ProductListingLayoutEnum.FIVE_COLUMN)} active={layout !== 2} className='hidden sm:flex' type={ButtonType.BUTTON}>
                        <span className="material-symbols-rounded text-base leading-4 sm:text-lg sm:leading-5 ">
                            grid_view
                        </span>
                    </MyOutlinedButton>
                    {/* for small screen: hide below button during 420px - ~ */}
                    <MyOutlinedButton handleClick={() => handleSetLayout(ProductListingLayoutEnum.ONE_COLUMN)} active={layout !== 2} className='sm:hidden' type={ButtonType.BUTTON}>
                        <span className="material-symbols-rounded text-base leading-4 sm:text-lg sm:leading-5 ">
                            grid_view
                        </span>
                    </MyOutlinedButton>
                </div>
            </div>
        </nav>
    )
}

export default ProductCategory