import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { PRODUCTSIZE, ProductAvailabilityEnum, ProductSizeEnum } from '@enumsAndTypes/productListing/productListing.types';
import { setInStock, setSizeSelected } from '@libs/features/productListing/productListingSlice';
import { RootState } from '@libs/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const MoreFilters = () => {

    const dispatch = useDispatch();
    const { sizeSelected, inStockSelected } = useSelector((state: RootState) => state.productListing);

    const handleStockFilter = (stock: ProductAvailabilityEnum) => () => {
        dispatch(setInStock(stock))
    }

    const handleSizeFilter = (size: ProductSizeEnum) => () => {
        dispatch(setSizeSelected(size))
    }

    return (
        <div className="more__filters border border-black p-8 absolute top-14 right-0 bg-white">
            <div className="availability">
                <h3>AVAILABILITY</h3>
                <div className="flex gap-2 mt-2">
                    <MyOutlinedButton handleClick={handleStockFilter(ProductAvailabilityEnum.IN_STOCK)} active={ProductAvailabilityEnum.IN_STOCK === inStockSelected} className='whitespace-nowrap'>IN STOCK</MyOutlinedButton>
                    <MyOutlinedButton handleClick={handleStockFilter(ProductAvailabilityEnum.OUT_OF_STOCK)} active={ProductAvailabilityEnum.OUT_OF_STOCK === inStockSelected} className='whitespace-nowrap'>OUT OF STOCK</MyOutlinedButton>
                </div>
            </div>
            <div className="availability mt-4">
                <h3>SIZE</h3>
                <div className="flex gap-2 flex-wrap mt-2">
                    {
                        PRODUCTSIZE.map((size, index) => (
                            <MyOutlinedButton key={index} handleClick={handleSizeFilter(size)} active={size === sizeSelected}>{size}</MyOutlinedButton>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MoreFilters