import { ColorsData } from "@contants";
import FilterBox from "./FilterBox";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@libs/store";
import { setColorSelected } from "@libs/features/productListing/productListingSlice";

const ColorsFilter = () => {

    const colorSelected = useSelector((state: RootState) => state.productListing.colorSelected);

    const dispatch = useDispatch();

    const handleColorSelected = (color: string) => {
        dispatch(setColorSelected(color));
    }


    return (
        <div className="colors__filter grid grid-cols-3 sm:grid-cols-6 gap-0 w-max bg-white">
            {
                ColorsData.map((data, index) => (
                    <FilterBox key={index} active={colorSelected === data.name} handleClick={() => handleColorSelected(data.name)}>
                        <div className="color__box w-5 h-5 border border-gray-400 " style={{
                            backgroundColor: data.color
                        }} />
                        <p className="text-center">{data.name}</p>
                    </FilterBox>
                ))
            }
        </div>
    )
}

export default ColorsFilter;