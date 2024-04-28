import React from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@libs/store";
import { setPriceSelected } from "@libs/features/productListing/productListingSlice";

const PriceFilter = () => {

    const [value, setValue] = React.useState<number[]>([0, 2000]);
    const dispatch = useDispatch();

    const log = (value: number | number[]) => {
        if(!Array.isArray(value))return;
        setValue(value as number[]);
        dispatch(setPriceSelected([value[0], value[1]] as [number, number]));
    }

    const priceSelected = useSelector((state: RootState) => state.productListing.priceSelected);

    return (
        <div className="slider py-4 px-4 border border-black w-max sm:w-96 bg-white">
            <div className="value__range flex justify-between items-center mb-2">
                <p className="min__range">₹ {value[0]}</p>
                <p className="min__range">₹ {value[1]}</p>
            </div>
            <Slider range step={10} min={0} max={2000} defaultValue={[0, 2000]} onChangeComplete={log} styles={{
                track: {
                    backgroundColor: '#000',
                    height: 4
                },
                rail: {
                    backgroundColor: '#000',
                    height: 4
                },
                handle: {
                    backgroundColor: '#000',
                    border: '2px solid #000'
                },
                tracks: {
                    backgroundColor: '#000',
                    height: 4
                },
            }} />
        </div>
    )
}
export default PriceFilter;