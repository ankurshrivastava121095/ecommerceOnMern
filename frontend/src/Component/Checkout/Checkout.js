import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from '../../actions/CartAction';

function Checkout() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { cartItems } = useSelector((state) => state.cart);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,0
    );

    const totalPrice = subtotal;

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [pincode, setPincode] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveShippingInfo({name, phone, address, city, country, pincode}))
        const data = {
            subtotal, 
            totalPrice
        }
        sessionStorage.setItem("orderInfo", JSON.stringify(data));
        navigate('/process/payment')
    }

    return (
        <>
            {/* Breadcrumb Start */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <Link className="breadcrumb-item text-dark" href="/">Home</Link>
                            <Link className="breadcrumb-item text-dark" href="/">Shop</Link>
                            <span className="breadcrumb-item active">Checkout</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}

            {/* checkout starts */}
            <form onSubmit={handleSubmit}>
                <div className="container-fluid">
                    <div className="row px-xl-5">
                        <div className="col-lg-8">
                            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Billing Address</span></h5>
                            <div className="bg-light p-30 mb-5">
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label>Name</label>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            placeholder="Enter name"
                                            name='name'
                                            onChange={(e)=>setName(e.target.value)} 
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <label>Phone</label>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            placeholder="Enter Phone"
                                            name='phone'
                                            onChange={(e)=>setPhone(e.target.value)} 
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <label>Address</label>
                                        <textarea 
                                            className="form-control" 
                                            type="text" 
                                            placeholder="Enter Adress" 
                                            name='address'
                                            onChange={(e)=>setAddress(e.target.value)} 
                                        ></textarea>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Pin Code</label>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            placeholder="Enter Pincode"
                                            name='pincode'
                                            onChange={(e)=>setPincode(e.target.value)}  
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>City</label>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            placeholder="Enter City" 
                                            name='city'
                                            onChange={(e)=>setCity(e.target.value)} 
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <label>Country</label>
                                        <select 
                                            className="custom-select"
                                            name='country'
                                            onChange={(e)=>setCountry(e.target.value)} 
                                        >
                                            <option>---- Select Country ----</option>
                                            <option value="ind">India</option>
                                            <option value="us">United States</option>
                                            <option value="afg">Afghanistan</option>
                                            <option value="alb">Albania</option>
                                            <option value="alg">Algeria</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="collapse mb-5" id="shipping-address">
                                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Shipping Address</span></h5>
                                <div className="bg-light p-30">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label>First Name</label>
                                            <input className="form-control" type="text" placeholder="John" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Last Name</label>
                                            <input className="form-control" type="text" placeholder="Doe" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>E-mail</label>
                                            <input className="form-control" type="text" placeholder="example@email.com" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Mobile No</label>
                                            <input className="form-control" type="text" placeholder="+123 456 789" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Address Line 1</label>
                                            <input className="form-control" type="text" placeholder="123 Street" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Address Line 2</label>
                                            <input className="form-control" type="text" placeholder="123 Street" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Country</label>
                                            <select className="custom-select">
                                                <option selected>United States</option>
                                                <option>Afghanistan</option>
                                                <option>Albania</option>
                                                <option>Algeria</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>City</label>
                                            <input className="form-control" type="text" placeholder="New York" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>State</label>
                                            <input className="form-control" type="text" placeholder="New York" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>ZIP Code</label>
                                            <input className="form-control" type="text" placeholder="123" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-4">
                            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Order Total</span></h5>
                            <div className="bg-light p-30 mb-5">
                                <div className="border-bottom">
                                    <h6 className="mb-3">Products</h6>
                                    {
                                    cartItems && cartItems.map((val,key)=>(
                                        <div key={key} className="d-flex justify-content-between">
                                            <p>{val.name}</p>
                                            <p>{val.price}/-</p>
                                        </div>
                                    )) 
                                    }
                                </div>
                                <div className="border-bottom pt-3 pb-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h6>Subtotal</h6>
                                        <h6>{subtotal}/-</h6>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5>Total</h5>
                                        <h5>{totalPrice}/-</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Payment</span></h5>
                                <div className="bg-light p-30">
                                    <div className="form-group">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                                            <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                                            <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
                                        </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                                            <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
                                        </div>
                                    </div>
                                    <button type='submit' className="btn btn-block btn-primary font-weight-bold py-3">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {/* checkout ends */}
        </>
    )
}

export default Checkout