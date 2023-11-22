import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, updateUserProfile } from '../../../actions/UserAction';
import { useAlert } from 'react-alert';

function ProfileTab() {

    const dispatch = useDispatch()
    const alert = useAlert();

    const { user, loading } = useSelector(state => state.auth)

    const [userID, setUserID] = useState(user?._id);
    const [name, setName] = useState(user?.name);
    const [userName, setUserName] = useState(user?.userName);
    const [phone, setPhone] = useState(user?.phone);
    const [city, setCity] = useState(user?.city);
    const [state, setState] = useState(user?.state);
    const [country, setCountry] = useState(user?.country);
    const [avatar, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
  
        const formData = new FormData();
        formData.append("name", name);
        formData.append("userName", userName);
        formData.append("phone", phone);
        formData.append("city", city);
        formData.append("state", state);
        formData.append("country", country);
        formData.append("avatar", avatar);
    
        dispatch(updateUserProfile(formData, userID));
    };

    return (
        <>
            <h3>Edit Profile</h3>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 d-flex flex-nowrap align-items-center gap-50px">
                            <img src={user?.avatar?.url} style={{height:"200px",borderRadius: "100%",border: "1px solid #3d464d"}} alt="" />
                            <input
                                type="file"
                                className="form-control"
                                id="avatar"
                                name="avatar"
                                onChange={(e) => setImage(e.target.files[0])}
                                required="required"
                                data-validation-required-message="Please enter your email"
                            />
                        </div>
                        <div className="control-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required="required"
                                data-validation-required-message="Please enter your name"
                            />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="control-group">
                                    <label htmlFor="userName">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        name="userName"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required="required"
                                        data-validation-required-message="Please enter your username"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="control-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required="required"
                                        data-validation-required-message="Please enter your phone"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="control-group">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required="required"
                                        data-validation-required-message="Please enter your city"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="control-group">
                                    <label htmlFor="state">State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        name="state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        required="required"
                                        data-validation-required-message="Please enter your state"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="control-group">
                                    <label htmlFor="country">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="country"
                                        name="country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        required="required"
                                        data-validation-required-message="Please enter your country"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                className="btn btn-primary py-2 px-4"
                                type="submit"
                                id="sendMessageButton"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileTab