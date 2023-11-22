import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../actions/UserAction";
import Loading from "../Layout/Loading";
import MetaData from "../MetaData";
import ProfileTab from "./UserComponents/ProfileTab";
import ChangePassword from "./UserComponents/ChangePassword";
import YourOrders from "./UserComponents/YourOrders";
import YourWishlist from "./UserComponents/YourWishlist";

function UserProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();

    const[profileTab, setProfileTab] = useState(true)
    const[changePasswordTab, setChangePasswordTab] = useState(false)
    const[yourOrderTab, setYourOrderTab] = useState(false)
    const[yourWishlistTab, setYourWishlistTab] = useState(false)

    const handleProfileTab = () => {
        setProfileTab(true)
        setChangePasswordTab(false)
        setYourOrderTab(false)
        setYourWishlistTab(false)
    }

    const handleChangePasswordTab = () => {
        setProfileTab(false)
        setChangePasswordTab(true)
        setYourOrderTab(false)
        setYourWishlistTab(false)
    }

    const handleYourOrderTab = () => {
        setProfileTab(false)
        setChangePasswordTab(false)
        setYourOrderTab(true)
        setYourWishlistTab(false)
    }

    const handleYourWishlistTab = () => {
        setProfileTab(false)
        setChangePasswordTab(false)
        setYourOrderTab(false)
        setYourWishlistTab(true)
    }

    const { isAuthenticated, error, loading } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        // if (error) {
        //     alert.error(error);
        //     dispatch(clearErrors());
        // }
        // if (!isAuthenticated) {
        //     navigate("/");
        // }
    }, [error, alert, dispatch, isAuthenticated, navigate]);

    return (
        <>
        {loading ? (
            <Loading />
        ) : (
            <>
            {/* breadcrumb starts */}
            <MetaData title={"Profile"} />
            <div className="container-fluid">
                <div className="row px-xl-5">
                <div className="col-12">
                    <nav className="breadcrumb bg-light mb-30">
                        <Link className="breadcrumb-item text-dark" to="/">
                            Profile
                        </Link>
                        {/* <span className="breadcrumb-item active">Sign in</span> */}
                    </nav>
                </div>
                </div>
            </div>
            {/* breadcrumb ends */}

            <div className="container-fluid">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">Welcome Admin</span>
                </h2>
                <div className="row px-xl-5">
                <div className="col-lg-12 mb-5">
                    <div className="contact-form bg-light p-30">
                        <div id="success"></div>
                        <div className="adminPanel">
                            <div className="adminSidebar">
                                <div className="adminSidebarList">
                                    <p onClick={handleProfileTab} role="button" className={`mb-2 text-nowrap ${profileTab ? 'text-decoration-underline' : ''}`}><i className="fa-solid fa-user"></i> Update Profile</p>
                                    <p onClick={handleChangePasswordTab} role="button" className={`mb-2 text-nowrap ${changePasswordTab ? 'text-decoration-underline' : ''}`}><i className="fa-solid fa-lock"></i> Update Password</p>
                                    <p onClick={handleYourOrderTab} role="button" className={`mb-2 text-nowrap ${yourOrderTab ? 'text-decoration-underline' : ''}`}><i className="fa-solid fa-bag-shopping"></i> Orders</p>
                                    <p onClick={handleYourWishlistTab} role="button" className={`mb-2 text-nowrap ${yourWishlistTab ? 'text-decoration-underline' : ''}`}><i className="fa-solid fa-heart"></i> Wishlist</p>
                                </div>
                            </div>
                            <div className="main-body">
                                {
                                    profileTab ?
                                    <ProfileTab />
                                    :
                                    ''
                                }
                                {
                                    changePasswordTab ?
                                    <ChangePassword />
                                    :
                                    ''
                                }
                                {
                                    yourOrderTab ?
                                    <YourOrders />
                                    :
                                    ''
                                }
                                {
                                    yourWishlistTab ?
                                    <YourWishlist />
                                    :
                                    ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </>
        )}
        </>
    );
}

export default UserProfile;
