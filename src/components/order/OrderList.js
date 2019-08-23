import React from 'react'
import { connect } from 'react-redux'
import OrderItem from '../../components/order/OrderItem'
import { getOrderByOwner, removeOrder } from '../../actions/order'



class OrderList extends React.Component {

    constructor (props) {
        super (props)
        this.state = {
            error : props.orders.error || ''
        }
    }

    onRemoveOrder = (e) => {
        console.log('ID', e.target.name)
        this.props.dispatch(removeOrder(e.target.name))
    }

    componentDidMount () {
        this.props.dispatch(getOrderByOwner())
    }

    render () {
        return (
            <div>
                { this.props.error && ( <h1> { this.props.error }</h1>)}
                <h2>Order List</h2>
                <table> 
                    <tr>
                        <th>Description</th>
                        <th>Status</th>
                        <th>address</th>
                        <th>username</th>
                        <th>Actions</th>
                    </tr>
                    { this.props.orders.map( (order) => (
                        <OrderItem 
                                key={order._id}
                                order={order}
                                remove={ this.onRemoveOrder}
                        />
                    ))}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{

    return {
        orders : state.orders.orders, 
        error : state.orders.error   
    }

}

export default connect (mapStateToProps)(OrderList)