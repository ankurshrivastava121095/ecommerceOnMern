import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../MetaData";
import Loading from "../../Layout/Loading";
import { clearErrors, loginUser } from "../../../actions/UserAction";

function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();

    const { isAuthenticated, error, loading } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        // if (error) {
        //     alert.error(error);
        //     dispatch(clearErrors());
        // }
        // if (isAuthenticated) {
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
            <MetaData title={"Dashboard"} />
            <div className="container-fluid">
                <div className="row px-xl-5">
                <div className="col-12">
                    <nav className="breadcrumb bg-light mb-30">
                        <Link className="breadcrumb-item text-dark" to="/">
                            Dashboard
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
                                    <p role="button" className="mb-2 text-nowrap"><i className="fa-solid fa-gauge-high"></i> Dashboard</p>
                                    <p role="button" className="mb-2 text-nowrap"><i className="fa-solid fa-users"></i> Users</p>
                                    <p role="button" className="mb-2 text-nowrap"><i className="fa-solid fa-bars"></i> Category</p>
                                    <p role="button" className="mb-2 text-nowrap"><i className="fa-solid fa-bag-shopping"></i> Products</p>
                                    <p role="button" className="mb-2 text-nowrap"><i className="fa-solid fa-cart-shopping"></i> Orders</p>
                                </div>
                            </div>
                            <div className="main-body">
                                <h3>Dashboard</h3>
                                <div className="row">
                                    <div className="col-md-3">
                                        <Link to='/admin/users' className="dashboardBoxesLink">
                                            <div className="dashboardBoxes">
                                                <h3><i className="fa-solid fa-users"></i></h3>
                                                <div>
                                                    <center>
                                                        <h5 className="mt-3">Total Users</h5>
                                                        <p>10</p>
                                                    </center>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-3">
                                        <Link to='/admin/categories' className="dashboardBoxesLink">
                                            <div className="dashboardBoxes">
                                                <h3><i className="fa-solid fa-bars"></i></h3>
                                                <div>
                                                    <center>
                                                        <h5 className="mt-3">Total Categories</h5>
                                                        <p>10</p>
                                                    </center>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-3">
                                        <Link to='/admin/products' className="dashboardBoxesLink">
                                            <div className="dashboardBoxes">
                                                <h3><i className="fa-solid fa-bag-shopping"></i></h3>
                                                <div>
                                                    <center>
                                                        <h5 className="mt-3">Total Products</h5>
                                                        <p>10</p>
                                                    </center>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-3">
                                        <Link to='/admin/orders' className="dashboardBoxesLink">
                                            <div className="dashboardBoxes">
                                                <h3><i className="fa-solid fa-cart-shopping"></i></h3>
                                                <div>
                                                    <center>
                                                        <h5 className="mt-3">Total Orders</h5>
                                                        <p>10</p>
                                                    </center>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-7">
                                        <img src="https://wcs.smartdraw.com/chart/img/clustered-bar-chart.png?bn=15100111868" style={{height:"320px"}} alt="" />
                                    </div>
                                    <div className="col-md-5">
                                        <img src="https://learnenglish.britishcouncil.org/sites/podcasts/files/Writing-B2-Comparing-two-charts-3-low.jpg" className="w-100" alt="" />
                                    </div>
                                </div>
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

export default Dashboard;
