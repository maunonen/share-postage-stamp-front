const userDefaultStete  = []

const userReducer = ( state = userDefaultStete, action) => {
    switch (action.type) {
        case 'ADD_STAMP' : 
            return 1
        default : 
            return state
    }
}

export default userReducer