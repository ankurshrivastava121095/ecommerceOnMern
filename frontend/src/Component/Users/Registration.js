import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, createUser } from "../../actions/UserAction";
import { useAlert } from "react-alert";
import Loading from "../Layout/Loading";
import MetaData from "../MetaData";

function Registration() {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [avatar, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("userName", userName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("conPassword", conPassword);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("avatar", avatar);

    dispatch(createUser(formData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [error, alert, dispatch, isAuthenticated, navigate]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* breadcrumb starts */}
          <MetaData title={"Registration"} />
          <div className="container-fluid">
            <div className="row px-xl-5">
              <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                  <Link className="breadcrumb-item text-dark" to="/">
                    Home
                  </Link>
                  <span className="breadcrumb-item active">Sign up</span>
                </nav>
              </div>
            </div>
          </div>
          {/* breadcrumb ends */}

          <div className="container-fluid">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
              <span className="bg-secondary pr-3">SignUp</span>
            </h2>
            <div className="row px-xl-5">
              <div className="col-lg-12 mb-5">
                <div className="contact-form bg-light p-30">
                  <div id="success"></div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="control-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            required="required"
                            data-validation-required-message="Please enter your name"
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="control-group">
                          <input
                            type="text"
                            className="form-control"
                            id="userName"
                            name="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Your Username"
                            required="required"
                            data-validation-required-message="Please enter your username"
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="control-group">
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Your Phone"
                            required="required"
                            data-validation-required-message="Please enter your phone"
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
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
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
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
                      </div>
                      <div className="col-md-6">
                        <div className="control-group">
                          <input
                            type="password"
                            className="form-control"
                            id="conPassword"
                            name="conPassword"
                            value={conPassword}
                            onChange={(e) => setConPassword(e.target.value)}
                            placeholder="Confirm Password"
                            required="required"
                            data-validation-required-message="Please enter your password again"
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="control-group">
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Your City"
                            required="required"
                            data-validation-required-message="Please enter your city"
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="control-group">
                          <input
                            type="text"
                            className="form-control"
                            id="state"
                            name="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            placeholder="Your State"
                            required="required"
                            data-validation-required-message="Please enter your state"
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="control-group">
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="Your Country"
                            required="required"
                            data-validation-required-message="Please enter your country"
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                    <div className="control-group">
                      <label htmlFor="avatar">Profile Picture</label>
                      <input
                        type="file"
                        className="form-control"
                        id="avatar"
                        name="avatar"
                        onChange={(e) => setImage(e.target.files[0])}
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary py-2 px-4"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                  <br />
                  <p>Already have account ? <Link to='/login'>Click here</Link> to sign in</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Registration;
