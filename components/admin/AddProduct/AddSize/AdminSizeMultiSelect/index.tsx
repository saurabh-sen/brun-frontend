import { EProductSizeEnum } from "@modals/productListing/productListing.types";
import FilterBox from '@components/client/Products/MoreFilters/FilterBox';

const SIZES: EProductSizeEnum[] = [EProductSizeEnum.XS, EProductSizeEnum.S, EProductSizeEnum.M, EProductSizeEnum.L, EProductSizeEnum.XL, EProductSizeEnum.XXL];

interface IAdminSizeMultiSelect {
    sizeSelected: EProductSizeEnum[];
    handleSizeSelection: (size: EProductSizeEnum) => void;
}

const AdminSizeMultiSelect = ({ sizeSelected, handleSizeSelection }: IAdminSizeMultiSelect) => {

    return (
        <div className="size__filter grid grid-cols-3 sm:grid-cols-6 gap-0 w-max bg-white">
            {
                SIZES.map((size, index) => (
                    <FilterBox key={index} active={sizeSelected.includes(size)} handleClick={() => handleSizeSelection(size)}>
                        <p>{size}</p>
                    </FilterBox>
                ))
            }
        </div>
    )
}

export default AdminSizeMultiSelect;