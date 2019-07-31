const shipmentDefaultStete  = []

const shipmentReducer = ( state = shipmentDefaultStete, action) => {
    switch (action.type) {
        case 'ADD_SHIPMENT' : 
            return 1
        default : 
            return state
    }
}

export default shipmentReducer