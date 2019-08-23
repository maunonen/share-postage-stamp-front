import React from 'react'
import OrderForm from './OrderForm';
import { connect } from 'react-redux';



class OrderEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error : ''            
        }
    }
        render () {
            console.log(this.props.order)
    
             return (
                <div>
                    <h1>Order Edit</h1>
                    <OrderForm
                        order={ this.props.order}
                        
                    ></OrderForm>
                </div>
             )
        }
    
}
const MapStateToProps = (state, props) => {
    console.log('Order Edit', state.orders.orders) 
    
    return {
        order : state.orders.orders.find((order) => order._id === props.match.params.id)
    }
}


export default connect (MapStateToProps)(OrderEdit)