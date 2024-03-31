"use client"
import DesktopTabs from '@components/Accounts/DesktopTabs';
import MobileTabs from '@components/Accounts/MobileTabs';
import { RootState } from '@libs/store';
import React from 'react'
import { useSelector } from 'react-redux';

const Account = () => {

    const isSearchBarOpen = useSelector((state: RootState) => state.homepage.isSearchBarOpen);
    const [activeTab, setActiveTab] = React.useState(1);

    return (
        <main className={`accountsPage ${isSearchBarOpen ? 'mt-52' : 'mt-28'}`}>
            <div className="md:hidden">
                <MobileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="hidden md:flex">
                <DesktopTabs />
            </div>
        </main>
    )
}

export default Account