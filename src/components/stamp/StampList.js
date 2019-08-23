import React from 'react'
import StampItem from './StampItem'
import { connect } from 'react-redux'
import { getStampByOwner} from '../../actions/stamp'
import { removeStamp} from '../../actions/stamp'


 
class StampList extends React.Component {
    constructor (props){
        super(props)
        
        this.state ={
            error : props.stamps.error || ''
        }
    }



    componentDidMount(){
        // if user logged 
        //console.log('STAMP LIST DID MOUNT', this.props.stamps)

        this.props.dispatch(getStampByOwner())
    }
    onRemoveStamp = (event) =>  {
        console.log('STAMP ID', event.target.name)
        this.props.dispatch(removeStamp(event.target.name))
    }

    render () {
        return (
            <div>
            { (this.props.error) && ( <h1>{this.props.error}</h1>)}
                <h2>Stamp List</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>designer</th>
                        <th>designedAt</th>
                        <th>Action</th>
                    </tr>
                { this.props.stamps.map((stamp) => (
                    <StampItem 
                        key={stamp._id}
                        stamp={stamp}
                        remove={this.onRemoveStamp}
                    />   
                ))}  
                </table>
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