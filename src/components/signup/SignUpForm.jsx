// Init
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import GoogleIcon from '../../assets/images/google_icon.svg';
import AppleIcon from '../../assets/images/apple_icon.svg';
import api from '../../api';

// Component
export default function SignUpForm() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const nav = useNavigate();

  const handleUserOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    api('post', 'users/', {
      first_name: user?.firstName,
      last_name: user?.lastName,
      email: user?.email,
      password: user?.password,
    })
      .then(() => {
        toast.success('User Created');
        nav('/login');
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div className="signUpContainer">
      <div className="signUpHeader">
        <div className="signUpHeaderTitle">Let’s get started</div>
        <div className="signUpHeaderDesp">Create your account to start collecting today</div>
      </div>
      <div className="signUpFormDiv">
        <div className="signUpForm">
          <div className="signUpFormSubDiv">
            <div className="signUpFormTitleDiv">
              <div className="signUpFormTitle">Create your account</div>
              <div className="signUpFormSignInDiv">
                Already registered? <span> Sign in here</span>
              </div>
              {/* <div className="signUpFormDesp">Please enter your details</div> */}
            </div>
            <div className="signUpSocialLogInDiv">
              <div className="signUpSocialLogIn">
                <div className="signUpSocialLogInIcon">
                  <img src={GoogleIcon} alt="GoogleIcon" />
                </div>
                <div className="signUpSocialLogInText">Continue with Google</div>
              </div>
              <div className="signUpSocialLogIn">
                <div className="signUpSocialLogInIcon">
                  <img src={AppleIcon} alt="GoogleIcon" />
                </div>
                <div className="signUpSocialLogInText">Continue with Apple</div>
              </div>
            </div>
            <div className="signUpFormDividerDiv">
              <div className="signUpFormDivider" />
              <div className="signUpFormDividerText">or</div>
              <div className="signUpFormDivider" />
            </div>

            <div className="signUpFormInputDiv">
              <div className="signUpFormInput">
                <input
                  placeholder="First Name"
                  value={user?.firstName}
                  type="text"
                  name="firstName"
                  onChange={handleUserOnChange}
                />
              </div>
            </div>
            <div className="signUpFormInputDiv">
              <div className="signUpFormInput">
                <input
                  placeholder="Last Name"
                  value={user?.lastName}
                  type="text"
                  name="lastName"
                  onChange={handleUserOnChange}
                />
              </div>
            </div>
            <div className="signUpFormInputDiv">
              <div className="signUpFormInput">
                <input
                  placeholder="Email address"
                  value={user?.email}
                  type="email"
                  name="email"
                  onChange={handleUserOnChange}
                />
              </div>
            </div>
            <div className="signUpFormInputDiv">
              <div className="signUpFormInput">
                <input
                  placeholder="Password"
                  value={user?.password}
                  type="password"
                  name="password"
                  onChange={handleUserOnChange}
                  autoComplete="new-password"
                />
              </div>
            </div>
            <div className="signUpFormCheckDiv">
              <div className="signUpFormCheckboxDiv">
                <Checkbox sx={{ color: '#928f8f50' }} />
                {/* <input type="checkbox" className="signUpFormCheckox" /> */}I agree to the Terms
                and Privacy Policy
              </div>
            </div>
            <button type="submit" className="signUpFormButton" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
