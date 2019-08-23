import React from 'react'
import { Link } from 'react-router-dom'

const StampGalleryItem = (props) => {
    return (
        <div>
            <Link to='/ordernew/' >
                <img 
                src={require( `../../../public/images/${props.stamp.imgUrl}`)} 
                alt="logo" className="brand-logo"
                width={{ width : 70}}
                />
            </Link>
                <p>{ props.stamp._id}</p>
                <p>{ props.stamp.namel}</p>
        </div>
        
    )
}
export default StampGalleryItem