
import React, { useState } from 'react'
import TabsBody from '@components/common/Tabs/TabsBody/TabsBody';
import MoreFiltersNav from './MoreFiltersNav';
import ColorsFilter from './ColorsFilter';
import SizeFilter from './SizeFilter';
import PriceFilter from './PriceFilter';
import FilterCTA from './FilterCTA';

const MoreFilters = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleSetActiveTab = (tab: number) => {
        setActiveTab(tab);
    }

    return (
        <div className="more__filters relative">
            <MoreFiltersNav activeTab={activeTab} handleSetActiveTab={handleSetActiveTab} />
            <div className={`filter__body__container absolute top-12 left-0 ${activeTab === null && 'hidden' }`}>
                <TabsBody show={activeTab === 1}>
                    <ColorsFilter />
                </TabsBody>
                <TabsBody show={activeTab === 2}>
                    <SizeFilter />
                </TabsBody>
                <TabsBody show={activeTab === 3}>
                    <PriceFilter />
                </TabsBody>
                {
                    activeTab !== 0 && <FilterCTA setActiveTab={setActiveTab} />
                }
            </div>
        </div>
    )
}

export default MoreFilters