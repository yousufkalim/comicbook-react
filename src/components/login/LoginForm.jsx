// Init
import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginImg from '../../assets/images/login_nft.png';
// Component
export default function LoginForm() {
  return (
    <div className="loginFormContainer">
      <div className="loginFormImageDiv">
        <div className="loginFormImage">
          <img src={LoginImg} alt="nft" />
        </div>
      </div>
      <div className="loginFormDiv">
        <div className="loginFormSubDiv">
          <div className="loginFormTitleDiv">
            <div className="loginFormTitle">Welcome Back</div>
            <div className="loginFormDesp">Please enter your details</div>
          </div>
          <div className="loginFormInputDiv">
            <div className="loginFormLabel">Email</div>
            <div className="loginFormInput">
              <input placeholder="Email address" />
            </div>
          </div>
          <div className="loginFormInputDiv">
            <div className="loginFormLabel">Password</div>
            <div className="loginFormInput">
              <input placeholder="Password" />
            </div>
          </div>
          <div className="loginFormCheckDiv">
            <div className="loginFormCheckboxDiv">
              <input type="checkbox" className="loginFormCheckox" />
              Remember me
            </div>
            <div className="loginFormForgetDiv">Forgot password?</div>
          </div>
          <div className="loginFormButton">Login</div>
          <div className="loginFormSignUpDiv">
            Don’t Have an account?
            <NavLink className="loginFormSignUp" to="/signup">
              Sign Up here
            </NavLink>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
