const stampDefaultStete  = []

const stampReducer = ( state = stampDefaultStete, action) => {
    switch (action.type) {
        case 'ADD_STAMP' : 
            return 1
        default : 
            return state
    }
}

export default stampReducer