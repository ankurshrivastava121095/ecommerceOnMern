import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product/Product'
import MetaData from './MetaData'
import Loading from './Layout/Loading'
import { getCategories } from '../actions/CategoryAction'

function Home({title}) {

    const dispatch = useDispatch()

    const { loading, products } = useSelector((state)=>state.p)
    const { categories } = useSelector((state)=>state.c)


    useEffect(()=>{
        dispatch(getProducts())
        dispatch(getCategories())
    },[dispatch])

    return (
        <>
            
            {/* carousel starts */}
            <div className="container-fluid mb-3">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#header-carousel" data-slide-to="1"></li>
                                <li data-target="#header-carousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item position-relative active" style={{height: "430px"}}>
                                    <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{objectFit: "cover"}} />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{maxWidth: "700px"}}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <Link className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" to="/">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative" style={{height: "430px"}}>
                                    <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{objectFit: "cover"}} />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{maxWidth: "700px"}}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <Link className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" to="/">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative" style={{height: "430px"}}>
                                    <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{objectFit: "cover"}} />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{maxWidth: "700px"}}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <Link className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" to="/">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-offer mb-30" style={{height: "200px"}}>
                            <img className="img-fluid" src="img/offer-1.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <Link to="" className="btn btn-primary">Shop Now</Link>
                            </div>
                        </div>
                        <div className="product-offer mb-30" style={{height: "200px"}}>
                            <img className="img-fluid" src="img/offer-2.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <Link to="" className="btn btn-primary">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* carousel ends */}

            {/* categories starts */}
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
                <div className="row px-xl-5 pb-3">
                    {
                        categories && categories.map((category)=>
                            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                <Link className="text-decoration-none" to="">
                                    <div className="cat-item d-flex align-items-center mb-4">
                                        <div className="overflow-hidden" style={{width: "100px", height: "100px"}}>
                                            <img className="img-fluid" src={category?.images?.url} alt="" />
                                        </div>
                                        <div className="flex-fill pl-3">
                                            <h6 className='text-capitalize'>{category.name}</h6>
                                            {/* <small className="text-body">100 Products</small> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                  

                </div>
            </div>
            {/* categories ends */}

            {/* products starts */}
            {
                loading ? <Loading /> : (
                    <>
                        <MetaData title={'Buy'} />

                        <div className="container-fluid pt-5 pb-3">
                            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
                            <div className="row px-xl-5">
                                {
                                    products && products.map((product)=>(
                                        <Product key={product._id} product={product} />
                                    ))
                                }
                            </div>
                        </div>
                    </>
                )
            }
            {/* products ends */}

            {/* offer starts */}
            <div className="container-fluid pt-5 pb-3">
                <div className="row px-xl-5">
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{height: "300px"}}>
                            <img className="img-fluid" src="img/offer-1.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <Link to="" className="btn btn-primary">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{height: "300px"}}>
                            <img className="img-fluid" src="img/offer-2.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <Link to="" className="btn btn-primary">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* offer ends */}

            {/* featured starts */}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                            <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* featured ends */}
        </>
    )
}

export default Home