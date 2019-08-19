import React from 'react'
import { connect } from 'react-redux'
import StampForm from '../../components/stamp/StampForm'
import { editStamp, getStampByOwner}  from '../../actions/stamp'



/* const StampEdit = (props) => (
    
) */
 class StampEdit extends React.Component {

    constructor (props){
        super(props) 

        this.state = {
            error : ''

        }
    }
    
    render () {  
        console.log('EDIT STAMP RENDER', this.props.error)    
        console.log('EDIT STAMP RENDER', !!this.props.error)
        let stampForm  = 
        <StampForm 
            stamp = { this.props.stamp }
            onSubmit = { ( {
                name, price, designer, designedAt , 
                edition, linkToImgUrl }
                ) => {
                const updateObject= {
                    name, price, designer, designedAt , 
                    edition, linkToImgUrl     
                }                                 
                const responce = this.props.dispatch(editStamp( this.props.stamp._id, updateObject ))
                console.log('PROMISE', responce)
                if ( !! this.props.error){
                    return
                }   
                console.log('EDIT STAMP RENDER ERROR', this.props.error)

            }}
        />
        let editComponent 
        if ( this.props.loading) {
            editComponent = 
            <div>   
                    <h1>Loading....</h1>
                    {stampForm}
            </div>
            
            
            
        } if ( this.props.error.length > 0 ){
               editComponent = 
               <div>
                { this.props.error &&  ( <h1>{ this.props.error}</h1>)}
                    {stampForm}
               </div>
               
               

        } else {
            editComponent = <div>
                {stampForm}
            </div>         

        }
        return (
            <div>{ editComponent}</div>
            
        )
    }
        
}  

const mapStateToProps = (state, props) => {
    console.log('EDIT STAMP MAP STATE TO PROPS', state.stamps.error)
    const stampTemp = state.stamps.stamps.find((stamp) => stamp._id === props.match.params.id )
    return {
        stamp : stampTemp, 
        error : state.stamps.error, 
        loading : state.stamps.loading
    }
}

export default connect (mapStateToProps)(StampEdit) 