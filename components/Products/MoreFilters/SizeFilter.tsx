import { useSelector, useDispatch } from "react-redux";
import FilterBox from "./FilterBox";
import { RootState } from "@libs/store";
import { setSizeSelected } from "@libs/features/productListing/productListingSlice";
import { EProductSizeEnum } from "@modals/productListing/productListing.types";

const SIZES: EProductSizeEnum[] = [EProductSizeEnum.XS, EProductSizeEnum.S, EProductSizeEnum.M, EProductSizeEnum.L, EProductSizeEnum.XL, EProductSizeEnum.XXL];

const SizeFilter = () => {

    const sizeSelected = useSelector((state: RootState) => state.productListing.sizeSelected);

    const dispatch = useDispatch();

    const handleSizeSelection = (size: EProductSizeEnum) => {
        dispatch(setSizeSelected(size));
    }

    return (
        <div className="size__filter grid grid-cols-3 sm:grid-cols-6 gap-0 w-max bg-white">
            {
                SIZES.map((size, index) => (
                    <FilterBox key={index} active={sizeSelected === size} handleClick={() => handleSizeSelection(size)}>
                        <p>{size}</p>
                    </FilterBox>
                ))
            }
        </div>
    )
}

export default SizeFilter;