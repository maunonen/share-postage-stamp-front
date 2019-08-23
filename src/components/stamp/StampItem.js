import React from 'react'
import { Link } from 'react-router-dom'

const StampItem = (props) => (  
    <tr>
        <td>
        <Link to={ `/editstamp/${ props.stamp._id}`}>
            { props.stamp.name}
        </Link>
        </td>
        <td>{ props.stamp.price}</td>
        <td>{ props.stamp.designer}</td>
        <td>{ props.stamp.designedAt}</td>
        <td>
            <button 
            onClick = { props.remove }
            name={props.stamp._id} 
            >Remove</button></td>        
    </tr>
        
    
) 
export default StampItem