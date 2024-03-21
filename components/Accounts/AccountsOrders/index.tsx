import OrderCard from "@components/Cart/OrderCard";

const AccountsOrders = () => {
    return (
        <div className="account__orders flex flex-col gap-4 sm:gap-8">
            <h4 className='hidden md:block'>ORDERS DETAILS</h4>
            <div className="flex flex-col gap-5">
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
        </div>
    )
}

export default AccountsOrders;