import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getCategories } from '../../actions/CategoryAction'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/UserAction'
import { addItemsToCart } from '../../actions/CartAction'
import { getProducts } from '../../actions/ProductAction'

function Header() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()
    
    const { products } = useSelector((state)=>state.p)
    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const { categories } = useSelector((state)=>state.c)

    const verticalNavbar = () => {
        setHandleVerticalNavbar(!handleVerticalNavbar)
    }
    const [handleVerticalNavbar, setHandleVerticalNavbar] = useState(false)

    useEffect(()=>{
        dispatch(getProducts())
        dispatch(getCategories())
    },[dispatch])

    const handleLogout = () => {
        dispatch(logout())
        alert.success('Logged out successfully !')
    }

    // the search result
    const [name, setName] = useState('');

    const [foundUsers, setFoundUsers] = useState(products);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = products.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
        } else {
            setFoundUsers('');
            // If the text field is empty, show all users
        }

        setName(keyword);
    };

    const handleProductNavigate = (id) =>{
        setFoundUsers('')
        setName('')
        navigate(`/product/${id}`)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row bg-secondary py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100">
                            <Link className="text-body mr-3" to="/about">About</Link>
                            <Link className="text-body mr-3" to="/contact">Contact</Link>
                            <Link className="text-body mr-3" to="/">Help</Link>
                            <Link className="text-body mr-3" to="/">FAQs</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center" style={{gap:"10px"}}>
                            {
                                user ? (
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <div style={{display: "flex",flexWrap: "nowrap",alignItems: "center",justifyContent: "center"}}>
                                                <img style={{height:"18px",width:"18px",borderRadius:"100%",marginLeft:"20px"}} src={user.avatar && user.avatar.url} className='rounded-circle' alt={user && user.name} />
                                                <span className="dropdown-item">{user && user.name}</span>
                                            </div>
                                            {
                                                user && user.role !== 'admin' ? (
                                                    <Link className="dropdown-item" to='/orders/me'>Orders</Link>
                                                ) : (
                                                    <Link className="dropdown-item" to='/admin/dashboard'>Dashboard</Link>
                                                )
                                            }
                                            <Link className="dropdown-item" to='/me'>Profile</Link>
                                            <Link className="dropdown-item" onClick={handleLogout}>Logout</Link>
                                        </div>
                                    </div>
                                ) : !loading && <Link className="dropdown-item" to='/login'>Sign in</Link>
                            }
                           
                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <Link to="/" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                            </Link>
                            <Link to="/" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <Link to="/" className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">Insta</span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <div className="input-group">
                            <input 
                                type="search"
                                value={name}
                                onChange={filter}
                                className="form-control"
                                placeholder="Search"
                            />
                            <div className="input-group-append" role='button'>
                                <span className="input-group-text bg-transparent text-primary">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div style={{position: "absolute",zIndex: "99999999",width: "94%",background: "#fff"}}>
                        {foundUsers && foundUsers.length > 0 ? (
                            foundUsers.map((user, key) => (
                                    <li key={key} style={{listStyle:"none"}} className="user">
                                        <div style={{padding: "10px",border: "1px solid #ced4da"}} onClick={()=>handleProductNavigate(user?._id)}>
                                            <div role='button' style={{textDecoration:"none",color:"#3d464d"}}>
                                                <span className="user-name">{user.name}</span>
                                            </div>
                                        </div>
                                    </li>
                            ))
                            ) : (
                            ''
                        )}
                        </div>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Customer Service</p>
                        <h5 className="m-0">+012 345 6789</h5>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link className="btn d-flex align-items-center justify-content-between bg-primary w-100" onClick={verticalNavbar} href="#navbar-vertical" style={{height: "65px", padding: "0 30px"}}>
                            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </Link>
                        {
                            handleVerticalNavbar ?
                            <>
                                <nav className="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{width: "calc(100% - 30px)", zIndex: "999"}}>
                                    <div className="navbar-nav w-100">
                                        {
                                            categories && categories.map((val,key)=>(
                                                <div key={key}>
                                                    <Link to="/" className="nav-item nav-link">{val.name}</Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </nav>
                            </>
                            :
                            ''
                        }
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <Link to="/" className="text-decoration-none d-block d-lg-none">
                                <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                            </Link>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to="/" className="nav-item nav-link active">Home</Link>
                                    <Link to="/product" className="nav-item nav-link">Shop</Link>
                                    <Link to="/detail" className="nav-item nav-link">Shop Detail</Link>
                                    <div className="nav-item dropdown">
                                        <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></Link>
                                        <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            <Link to="/cart" className="dropdown-item">Shopping Cart</Link>
                                            <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                                </div>
                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <Link to="/cart" className="btn px-0 ml-3">
                                        <i className="fas fa-shopping-cart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px"}}>{cartItems.length}</span>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header