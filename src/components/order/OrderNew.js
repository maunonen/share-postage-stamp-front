import React from 'react'
import axios from '../../config/axios'
import CountryList from '../order/CountryList'

export default class OrderNew extends React.Component {
    constructor (props){
        super (props)
        this.state = {
            error : '', 
            countries :[] 
        }
        
    }
    componentDidMount () {
        axios.get('/stampscountries').then((responce) => {
            const countriesReq = responce.data
            if ( !!countriesReq && countriesReq[0].countries.length > 0){ 
                this.setState({
                    countries : countriesReq[0].countries
                })
            }
        }).catch( (error) => {
           console.log() 
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

    render (){
        return (
            <div>
                    { this.state.error && ( <h1>{ this.state.error}</h1> )}
                    <ul>
                        {
                        this.state.countries.map((country) => (
                            <CountryList
                                key={country}
                                country= {country}
                        />
                        ))
                        }
                    </ul>

            </div>
            
        )
    }

}
