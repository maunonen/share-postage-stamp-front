import React from 'react'
import  { connect} from 'react-redux'
import OrderForm from '../order/OrderForm'

const OrderAdd = (props) => (
    <div>
        <h1>Order Add</h1>
        { props.error && (<h1>{ props.error}</h1>)}
        <OrderForm
            
        />
    </div>
)
const MapStateToProps = (state) => {
    console.log(state)
    return {
        error : state.orders.error
    }
}

export default connect (MapStateToProps)(OrderAdd)