"use client";
import { useSelector } from "react-redux";
import { RootState } from "@libs/store";

import MyOutlinedButton from "@components/common/MyOutlinedButton";
import DetailsItem from "../DetailsItem";
import { ButtonType } from "@modals/common/common.types";

const AccountsDetails = () => {

    const userDetails = useSelector((state: RootState) => state.account.userDetails);
    
    const handleSignout = () => {
        // hit the api and remove the tokens
    }

    return (
        <div className="account__details flex flex-col gap-4 sm:gap-8">
            <h4 className='hidden md:block'>ACCOUNT DETAILS</h4>
            <div className='flex flex-col gap-7'>
                <DetailsItem label='FIRST NAME' value={userDetails.first_name} />
                <DetailsItem label='LAST NAME' value={userDetails.last_name} />
                <DetailsItem label='EMAIL' value={userDetails.email} />
                <MyOutlinedButton active={false} handleClick={handleSignout} className='!w-max !py-2 !px-8 md:!py-4 md:!px-16 m-auto md:m-0 !font-semibold' type={ButtonType.BUTTON}>SIGN OUT</MyOutlinedButton>
            </div>
        </div>
    )
}

export default AccountsDetails;