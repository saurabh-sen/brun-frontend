import MyOutlinedButton from "@components/common/MyOutlinedButton"
import { ButtonType } from "@modals/common/common.types"

type IActiveTab = 0 | 1 | 2 | 3;

interface IFilterCTA {
    setActiveTab: (num: IActiveTab) => void;
}

const FilterCTA = ({setActiveTab}: IFilterCTA) => {
    return (
        <div className="filter__cta flex mt-3 gap-3">
            <MyOutlinedButton type={ButtonType.BUTTON} active={false} handleClick={() => setActiveTab(0)} className='bg-white'>CLEAR</MyOutlinedButton>
            <MyOutlinedButton type={ButtonType.BUTTON} active={false} handleClick={() => console.log('view results')} className='bg-white'>VIEW RESULTS</MyOutlinedButton>
        </div>
    )
}

export default FilterCTA