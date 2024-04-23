import { ColorsData } from "@contants";
import FilterBox from "./FilterBox";

const ColorsFilter = () => {
    return (
        <div className="colors__filter grid grid-cols-3 sm:grid-cols-6 gap-0 w-max bg-white">
            {
                ColorsData.map((data, index) => (
                    <FilterBox key={index} active={index === 2} handleClick={() => console.log('set this to state')}>
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