import React from 'react'
import { Link } from 'react-router-dom'

const  OrderItem = (props) => (
    //console.log(props)
    <tr>
        <td>
            <Link to={ `/editOrder/${ props.order._id}`}>
                {props.order.description}
            </Link>
        </td>
        <td>{props.order.status}</td>
        <td>{props.order.address}</td>
        <td>{props.order.client.username}</td>
        <td>
            <button>Detail</button>
            <button>New Shipment</button>
            <button>Change status</button>
        </td>
    </tr>
    
)

export default OrderItem