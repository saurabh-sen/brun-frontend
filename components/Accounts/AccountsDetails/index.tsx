import MyOutlinedButton from "@components/common/MyOutlinedButton";
import DetailsItem from "../DetailsItem";

const AccountsDetails = () => {

    const handleAccountDetails = () => {};

    return (
        <div className="account__details flex flex-col gap-4 sm:gap-8">
            <h4 className='hidden md:block'>ACCOUNT DETAILS</h4>
            <form className='flex flex-col gap-7' onSubmit={handleAccountDetails}>
                <DetailsItem label='FIRST NAME' value='John' />
                <DetailsItem label='LAST NAME' value='Doe' />
                <DetailsItem label='EMAIL' value='john.doe@example.com' />
                <MyOutlinedButton active={false} handleClick={() => alert('signed out')} className='!w-max !py-2 !px-8 md:!py-4 md:!px-16 m-auto md:m-0'>SIGN OUT</MyOutlinedButton>
            </form>
        </div>
    )
}

export default AccountsDetails;