import AccountsDetails from "../AccountsDetails";
import AccountsOrders from "../AccountsOrders";

const DesktopTabs = () => {
    return (
        <div className='accounts flex gap-10 mx-auto'>
            <div className="account__details">
                <AccountsDetails />
            </div>
            <div className="account__orders">
                <AccountsOrders />
            </div>
        </div>
    )
};

export default DesktopTabs;