import React from 'react'
import OrderList from './order/OrderList'
import ShipmentList from './shipment/ShipmentList'
import StampList from './stamp/StampList'

const AppStampDashBoard = () => (
    <div>
        <OrderList/>
        <ShipmentList/>
        <StampList/>
    </div>
)

export default AppStampDashBoard