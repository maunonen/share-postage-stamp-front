import React from 'react'

export default class OrderForm extends React.Component {

    constructor (props){
            super(props)
            this.state = {
                description :  this.props.order ? this.props.order.description : '', 
                stamps :  this.props.order ? this.props.order.stamps : [], 
                client : this.props.order ? this.props.order.client : '', 
                sender : this.props.order ? this.props.order.sender : '',
                fullAddress : this.props.order ? 
                        (this.props.order.fullAddress ? this.props.order.fullAddress : {}) : {},
                status : this.props.order ? this.props.order.status : '', 
                sum : this.props.order ? this.props.order.sum : '', 
                error : ''
            }
    }

    onChange = (event) => {
		let state = {}
		state[event.target.name] = event.target.value;
		this.setState(state)
	}

    /* onDescriptionChange = (e) => {
        const description = e.target.value 
        this.state( () => ( { description }))
    } */
    render (){
        /* "description" : "First order ", 
                "stamps" : [{ "stamp" : "5d5cfa55d427861ebfcecda1"}], 
                "client" : "5cd34166b4588252bd0ea8d1", 
                "sender" : "5cd34166b4588252bd0ea8d1", 
                "fullAddress" : {
                    "country" : "Finland", 
                    "city" : "Vantaa", 
                    "postalcode" : "01510", 
                    "address" : "Lautamiehentie 4 C"
                }, 
                
                "status" : "new", 
                "sum" : "5.61" */
                /* <p>{ this.state.sum}</p>
                    <p>{ this.state.sender}</p> 
                    <p>{ this.state.client}</p> 
                    
                    */
                /* 
                    { this.state.fullAddress ? (
                        <p> 
                            { Object.this.state.fullAddress.value( KeyObject)}
                        </p>
                    ) : 1}
                */

    return (
        <div>
            <h1>Order Form</h1> 
                { this.state.error && (
                    <h1>{this.state.error}</h1>
                    )}
                <input 
                    type="text"
                    placeholder="description"
                    name="description"
                    value = { this.state.description }
                    onChange = { this.onChange}
                />
                
                
                { this.state.stamps && this.state.stamps.length > 0 ? ( 
                    <ol>
                        { this.state.stamps.map((order) => 
                            (

                                <li key={ order._id}>{ order.stamp}</li>)
                            )
                        }
                    </ol>) : '' }
                   
                    
        </div>
    )
}
}


