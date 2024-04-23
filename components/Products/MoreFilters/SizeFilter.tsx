import FilterBox from "./FilterBox";

const SizeFilter = () => {
    return (
        <div className="size__filter grid grid-cols-3 sm:grid-cols-6 gap-0 w-max bg-white">
            {
                ['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                    <FilterBox key={index} active={index === 2} handleClick={() => console.log('set this size to state')}>
                        <p>{size}</p>
                    </FilterBox>
                ))
            }
        </div>
    )
}

export default SizeFilter;