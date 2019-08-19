import React from 'react'
import { Link } from 'react-router-dom'

const StampItem = (props) => (  
    <div>
        <Link to={ `/editstamp/${ props.stamp._id}`}>
            <h2>{ props.stamp.name}</h2>
        </Link>
        <h2>{ props.stamp.price}</h2>
        <h2>{ props.stamp.designer}</h2>
        <h2>{ props.stamp.designedAt}</h2>
        <button 
            onClick = { props.remove }
            name={props.stamp._id} 
            >Remove</button>
    </div>
) 
export default StampItem