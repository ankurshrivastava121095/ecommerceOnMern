import React from 'react'
import { Link } from 'react-router-dom'

function YourWishlist() {
    return (
        <>
            <h3>Your Wishlist</h3>
            <div className="row">
                <div className="col-md-12">
                    <Link to='/' className='orderCartWishListAnchor'>
                        <div className='orderCartWishListParentDiv'>
                            <p>Product Name</p>
                            <img src="https://assets.materialup.com/uploads/d4154b6c-5f07-4fc4-ae26-17f566b01d9f/preview.png" style={{height:"50px"}} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default YourWishlist