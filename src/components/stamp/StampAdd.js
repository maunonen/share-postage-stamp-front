import React from 'react'

import { connect} from 'react-redux'
import StampForm from './StampForm';
import { addStamp } from '../../actions/stamp';

const StampAdd = (props) => (
    //{ (this.state.error || this.props.error) && ( <h1> `${ this.state.error} ${ this.props.error}`</h1>)}
    <div>
        <h1>ADD STAMP</h1>
        { props.error && ( <h1>{ props.error}</h1>)}
        <StampForm 
                onSubmit = {(stamp) => {
                props.dispatch(addStamp(stamp))
                if ( !!props.error){
                    props.history.push('/')    
                }                 
                }
            }
        /> 
    </div>
)

const MapStateToProps = (state)  => {
    return {
        error : state.stamps.error
    }
}


export default connect (MapStateToProps) (StampAdd)