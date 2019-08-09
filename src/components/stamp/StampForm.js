import React from 'react'
import { addStamp , addStampSuccess } from '../../actions/stamp'
import { connect } from 'react-redux';


 class StampForm extends React.Component {

    constructor (props){
        super (props)
        console.log('PROPS', props)

        this.state = {
            name : '', 
            price : '', 
            designer : '', 
            designedAt : '', 
            edition : 0, 
            linkToImgUrl : '', 
            owner : '' , 
            error : props.error
        } 
    }
    
    onNameChange = (e) => {
        const name = e.target.value
        this.setState ( () => ({ name}))
    }

    onPriceChage = (e) => {
        const price = e.target.value
        this.setState ( () => ( { price})) 
    }

    onDesignerChange = (e) => {
        const designer = e.target.value 
        this.setState ( () => ( { designer})) 
    }

    onDesignedAtChange = (e) => {
        const designedAt = e.target.value
        this.setState ( () => ({ designedAt})) 
    }

    onLinkChange = (e) => {
        const linkToImgUrl = e.target.value
        this.setState( () => ({ linkToImgUrl}))
    }

    onOwnerChange = (e) => {
        const owner = e.target.value
        this.setState ( () => ( { owner}))
    }
    onSubmit = (e) => {
        e.preventDefault() 
        
        if ( ! this.state.name || !this.state.price || !this.state.owner) {
            this.setState ( ()  => ({ 
                error : 'Please provide name, price and owner field'
            })) 
        } else {
            this.setState ( () => ( { error : ''})) 
            const stampObj = {
                name : this.state.name, 
                price : this.state.price,  
                designer : this.state.designer, 
                designedAt : this.state.designedAt, 
                edition : this.state.edition, 
                linkToImgUrl : this.state.linkToImgUrl, 
                owner : this.state.owner
            }
            this.props.dispatch(addStamp(stampObj)) 
        }
    }


    render () {
        return (
            <div>
        <h1>Stamp Form</h1>
        { (this.state.error || this.props.error) && ( <h1> `${ this.state.error} ${ this.props.error}`</h1>)}
    
        <form onSubmit = {this.onSubmit}>
            <input 
                type="text"
                placeholder="name"
                autoFocus
                value={this.state.name}
                onChange={this.onNameChange}
            />
            <input
                type="number"
                placeholder="1.45"
                value={this.state.price}
                onChange={this.onPriceChage}
            />
            <input 
                type="text"
                placeholder="designer"
                value={this.state.designer}
                onChange={this.onDesignerChange}
            />
            <input 
                type="text"
                placeholder="22.12.2018"
                value={ this.state.designedAt}
                onChange={this.onDesignedAtChange}
            />
            <input 
                type="text"
                placeholder="https://www.rbc.ru/"
                value={ this.state.linkToImgUrl}
                onChange ={ this.onLinkChange}
            />
            <input 
                type="text"
                placeholder="25352452"
                value={this.state.owner}
                onChange={ this.onOwnerChange}
            />
            <button>Add button</button>
        </form>
    </div>
        )
    }
}
    
const mapStateToProps = (state) => {
    //console.log(state)
    //console.log( "Error", state.stamps.error)
    return  {
        stamps : state.stamps.stamps, 
        error : state.stamps.error       
    }
}

export default connect(mapStateToProps)(StampForm)