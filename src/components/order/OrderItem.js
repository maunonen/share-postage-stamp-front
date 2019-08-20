import React from 'react'
import { Link } from 'react-router-dom'

const  OrderItem = (props) => (
    //console.log(props)
    <div>
        <Link to={ `/editOrder/${ props.order._id}`}>
            <h2>{props.order.description}</h2>
        </Link>
            <h2>{props.order.status}</h2>
            <h2>{props.order.address}</h2>
            <h2>{props.order.client.username}</h2>
    </div>
)

export default OrderItem