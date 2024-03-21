"use client"
import DesktopTabs from '@components/Accounts/DesktopTabs';
import MobileTabs from '@components/Accounts/MobileTabs';
import React from 'react'

const Account = () => {

    const [activeTab, setActiveTab] = React.useState(1);

    return (
        <main>
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