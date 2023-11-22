import React from 'react'
import { Link } from 'react-router-dom'

function Product({ product, key }) {
    return (
        <>
                 <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <div className="product-item bg-light mb-4">
                        <div className="product-img position-relative overflow-hidden" style={{height:"300px"}}>
                            <img className="img-fluid w-100" src={product.images.url} alt="" />
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to={`/product/${product._id}`}><i className="fa fa-info-circle" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to={`/product/${product._id}`}>{product.name}</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>₹{product.price}</h5>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Product