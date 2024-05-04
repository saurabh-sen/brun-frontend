"use client"
import DesktopTabs from '@components/client/Accounts/DesktopTabs';
import MobileTabs from '@components/client/Accounts/MobileTabs';
import { setOrderHistory, setUserDetails, setWishList } from '@libs/features/account/accountSlice';
import { RootState } from '@libs/store';
import { IAccountDetails } from '@modals/account/account.types';
import { accountApi } from '@services/account/account.service';
import { getUserIdToStorage } from '@services/tokens/tokens.service';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMakeAuthenticatedAPICall } from '@services';

const Account = () => {

    const [activeTab, setActiveTab] = React.useState(1);

    const router = useRouter();
    const dispatch = useDispatch();
    const userDetails = useSelector((state: RootState) => state.account.userDetails);
    const { callApi, data, error, loading } = useMakeAuthenticatedAPICall<IAccountDetails>();

    useEffect(() => {
        const userId = getUserIdToStorage();
        // if userId is null or error is there then redirect to login
        if (!userId) {
            router.replace('/login');
        }else if(!userDetails.id) callApi(accountApi({ userId: userId }));
    }, [])

    // setUserDetails from data when it is not null
    useEffect(() => {
        if (data) {
            if(data?.data)dispatch(setUserDetails(data.data));
            if(data?.data?.wishlist)dispatch(setWishList(data.data.wishlist));
            // undo this after new UI is completed
            // if(data?.data?.orders)dispatch(setOrderHistory(data.data.orders));
        }
    }, [data])

    if (loading) return <div className='accountsPage__loading min-h-screen mt28'>Loading...</div>
    if (error.isError) {
        router.replace('/login');
        return <div>Error occured: {error.message}</div>;
    }
    if (!data && !userDetails) return null;

    return (
        <main className='accountsPage min-h-screen mt-28'>
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