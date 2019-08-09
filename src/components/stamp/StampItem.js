import React from 'react'

const StampItem = (props) => (  
    <div>
        <h2>{ props.stamp.name}</h2>
        <h2>{ props.stamp.price}</h2>
        <h2>{ props.stamp.designer}</h2>
        <h2>{ props.stamp.designedAt}</h2>
    </div>
) 
export default StampItem