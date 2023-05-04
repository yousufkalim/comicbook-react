// Init
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import GoogleIcon from '../../assets/images/google_icon.svg';
import AppleIcon from '../../assets/images/apple_icon.svg';
// Component
export default function SignUpForm() {
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
                <input placeholder="First Name" />
              </div>
            </div>
            <div className="signUpFormInputDiv">
              <div className="signUpFormInput">
                <input placeholder="Last Name" />
              </div>
            </div>
            <div className="signUpFormInputDiv">
              <div className="signUpFormInput">
                <input placeholder="Email address" />
              </div>
            </div>
            <div className="signUpFormInputDiv">
              <div className="signUpFormInput">
                <input placeholder="Password" />
              </div>
            </div>
            <div className="signUpFormCheckDiv">
              <div className="signUpFormCheckboxDiv">
                <Checkbox sx={{ color: '#928f8f50' }} />
                {/* <input type="checkbox" className="signUpFormCheckox" /> */}I agree to the Terms
                and Privacy Policy
              </div>
            </div>
            <div className="signUpFormButton">Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
}
