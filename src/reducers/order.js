const orderDefaultState = []
const orderReducer = ( state = orderDefaultState ,action ) => {

    switch (action.type){
        case 'ADD_ORDER' : 
            return 1 
        default : 
            return state
    } 
}

export default orderReducer