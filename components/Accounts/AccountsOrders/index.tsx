import OrderCard from "@components/Cart/OrderCard";
import { RootState } from "@libs/store";
import { useSelector } from "react-redux";

const AccountsOrders = () => {

    const ordersHistory = useSelector((state: RootState) => state.account.orderHistory);

    return (
        <div className="account__orders flex flex-col gap-4 sm:gap-8">
            <h4 className='hidden md:block'>ORDERS DETAILS</h4>
            <div className="flex flex-col gap-5">
                {
                    ordersHistory.length === 0 
                    ? <div>No orders found</div>
                    : ordersHistory.map((order) => <OrderCard key={order.id} {...order} />)
                }
            </div>
        </div>
    )
}

export default AccountsOrders;