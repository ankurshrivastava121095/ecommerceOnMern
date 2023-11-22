import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, updateUserPassword } from '../../../actions/UserAction';

function ChangePassword() {

    const dispatch = useDispatch()
    const alert = useAlert();

    const { user, loading } = useSelector(state => state.auth)

    const [userID, setUserID] = useState(user?._id);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
  
        const formData = new FormData();
        formData.append("oldPassword", oldPassword);
        formData.append("newPassword", newPassword);
        formData.append("confirmPassword", confirmPassword);
    
        dispatch(updateUserPassword(formData, userID));
    };

    return (
        <>
            <h3>Change Password</h3>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit}>
                        <div className="control-group">
                            <label htmlFor="currentPassword">Old Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="oldPassword"
                                name="oldPassword"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                placeholder='Enter old password'
                                required="required"
                                data-validation-required-message="Please enter your old password"
                            />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <label htmlFor="newPassword">New Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="newPassword"
                                name="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder='Enter new password'
                                required="required"
                                data-validation-required-message="Please enter your new password"
                            />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required="required"
                                placeholder='Enter new password again'
                                data-validation-required-message="Please enter your confirm password"
                            />
                            <p className="help-block text-danger"></p>
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

export default ChangePassword