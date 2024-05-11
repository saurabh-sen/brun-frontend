"use client"
import React from 'react'
import AnalyticsCard from './AnalyticsCard';
import AnalyticsFilter from './AnalyticsFilter';

const OrdersAnalytics = () => {
    return (
        <section id='OrdersAnalytics' className='space-y-6'>
            <h2>Orders</h2>
            <div className="orderanalytics grid grid-cols-4 gap-5">
                <AnalyticsCard title="Total Orders" value="100" />
                <AnalyticsCard title="Total Sales" value="₹ 1000" />
                <AnalyticsCard title="Total Cancelled Orders" value="100" />
                <AnalyticsFilter />
            </div>
        </section>
    )
}

export default OrdersAnalytics