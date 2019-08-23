import React from 'react'
import { Link } from 'react-router-dom'

const CountryList = (props) => {
    return (
        <Link to = {`/stampgallery/${ props.country } `}>
            <li>{ props.country}</li> 
        </Link> 
        
    )
}

export default CountryList