import React from 'react'
import StampItem from './StampItem'
import { connect } from 'react-redux'
import { getStampByOwner} from '../../actions/stamp'


 
class StampList extends React.Component {
    constructor (props){
        super(props)
        
        this.state ={
            error : props.stamps.error || ''
        }
    }



    componentDidMount(){
        // if user logged 
        console.log('STAMP LIST DID MOUNT')
        this.props.dispatch(getStampByOwner())
    }

    render () {
        return (
            <div>
            { (this.props.error) && ( <h1> ${ this.props.error}`</h1>)}
                <h1>Stamp List</h1>
                { this.props.stamps.map((stamp) => (
                    <StampItem 
                        key={stamp._id}
                        stamp={stamp}
                    />   
                ))}  
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        stamps : state.stamps.stamps, 
        error : state.stamps.error
    }
}

export default connect(mapStateToProps)(StampList)