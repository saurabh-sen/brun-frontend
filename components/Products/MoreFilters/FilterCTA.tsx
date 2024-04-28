import MyOutlinedButton from "@components/common/MyOutlinedButton"
import { RootState } from "@libs/store";
import { ButtonType } from "@modals/common/common.types"
import { useSelector } from "react-redux";

type IActiveTab = 0 | 1 | 2 | 3;

interface IFilterCTA {
    setActiveTab: (num: IActiveTab) => void;
}

const FilterCTA = ({setActiveTab}: IFilterCTA) => {

    const { sizeSelected, colorSelected, priceSelected } = useSelector((state: RootState) => state.productListing);
    
    const handleViewResult = () => {
        // call the API to get the filtered results
        console.log('View Results', sizeSelected, colorSelected, priceSelected);
        setActiveTab(0);
    }

    return (
        <div className="filter__cta flex mt-3 gap-3">
            <MyOutlinedButton type={ButtonType.BUTTON} active={false} handleClick={() => setActiveTab(0)} className='bg-white'>CLEAR</MyOutlinedButton>
            <MyOutlinedButton type={ButtonType.BUTTON} active={false} handleClick={handleViewResult} className='bg-white'>VIEW RESULTS</MyOutlinedButton>
        </div>
    )
}

export default FilterCTA