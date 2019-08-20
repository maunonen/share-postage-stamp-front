import React from 'react'
import { connect } from 'react-redux'
import OrderItem from '../../components/order/OrderItem'
import { getOrderByOwner} from '../../actions/order'



class OrderList extends React.Component {

    constructor (props) {
        super (props)
        this.state = {
            error : props.orders.error || ''
        }
    }

    componentDidMount () {
        this.props.dispatch(getOrderByOwner())
    }

    render () {
        return (
            <div>
                { this.props.error && ( <h1> { this.props.error }</h1>)}
                <h1>Order List</h1>
                { this.props.orders.map( (order) => (
                    <OrderItem 
                            key={order._id}
                            order={order}
                            remove={ this.onRemoveOrder}
                    />
                ))}
                <button>Add Order</button>
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