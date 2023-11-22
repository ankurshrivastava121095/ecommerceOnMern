import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, loginUser } from "../../actions/UserAction";
import Loading from "../Layout/Loading";
import MetaData from "../MetaData";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isAuthenticated, error, loading } = useSelector(
        (state) => state.auth
    );

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            navigate("/");
        }
    }, [error, alert, dispatch, isAuthenticated, navigate]);

    return (
        <>
        {loading ? (
            <Loading />
        ) : (
            <>
            {/* breadcrumb starts */}
            <MetaData title={"Login"} />
            <div className="container-fluid">
                <div className="row px-xl-5">
                <div className="col-12">
                    <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="/">
                        Home
                    </Link>
                    <span className="breadcrumb-item active">Sign in</span>
                    </nav>
                </div>
                </div>
            </div>
            {/* breadcrumb ends */}

            <div className="container-fluid">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">Login</span>
                </h2>
                <div className="row px-xl-5">
                <div className="col-lg-12 mb-5">
                    <div className="contact-form bg-light p-30">
                        <div id="success"></div>
                        <form onSubmit={submitHandler}>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                    required="required"
                                    data-validation-required-message="Please enter your email"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your Password"
                                    required="required"
                                    data-validation-required-message="Please enter your password"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary py-2 px-4"
                                    type="submit"
                                    id="sendMessageButton"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <br />
                        <p>Don't have account ? <Link to='/register'>Click here</Link> to sign up</p>
                    </div>
                </div>
                </div>
            </div>
            </>
        )}
        </>
    );
}

export default Login;
