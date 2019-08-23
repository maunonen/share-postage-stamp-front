import React from 'react'
import {connect} from 'react-redux'
import axios from '../../config/axios'
import StampGalleryItem from '../stamp/StampGalleryItem'

 class StampGallery extends React.Component {
    constructor (props){
        super(props)
        //console.log(this.props.match.params.id)
        this.state = {
            error : '', 
            stamplist : [
                {
                    imgUrl : '1.png', 
                    name : 'stamp1', 
                    _id : 'xvsdbvsdbv'
                }, 
                {
                    imgUrl : '2.png', 
                    name : 'stamp2', 
                    _id : 'sfbjnfsjkb'
                }
        ]
        }
    }
    componentDidMount (){ 
        axios.get('/stampscountries/' + this.props.match.params.id).then((responce) => {
            const stampsRes = responce.data
            if (!!stampsRes && stampsRes.length > 0) {
                /* this.setState({
                    stamplist : stampsRes
                }) */
            }

        }).catch( (error) => {
             if (error.response) {
                 // The request was made and the server responded with a status code
                 // that falls out of the range of 2xx
                 //console.log('ERROR STATUS STAMP', error.response.status)
                 if (error.response.status === 401){
                     this.setState({ 
                         error : 'Please provide password and username'
                     })
                 } else if (error.response.status === 404) {
                     this.setState({ 
                         error : '404 nothing found'
                     })
                 } else {
                     this.setState({ 
                         error : `${error.response.data}`
                     }) 
                 }
                 
               } else if (error.request) {
                 // The request was made but no response was received
                 // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                 // http.ClientRequest in node.js    
                 this.setState({ 
                     error :'Server not responce' 
                 })
               } else {
                 // Something happened in setting up the request that triggered an Error
                 this.setState({ 
                     error : 'Where is some error in setting up the request'
                 }) 
     
               }
         })
    }

    render () {
        console.log(this.state.stamplist)

        return (
            <div>
                <h1>Stamp Gallery</h1>
                { this.state.error && (<h1>{this.state.error}</h1>)}
                { this.state.stamplist.map( (stamp) => (
                    <StampGalleryItem
                        stamp={stamp}
                    />
                )
                ) }

            </div>
        ) 
    }
}

export default connect()(StampGallery)