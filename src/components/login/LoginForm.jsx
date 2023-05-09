// Init
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../api';
import LoginImg from '../../assets/images/login_nft.png';
import { UpdateStore } from '../../StoreContext';

// Component
export default function LoginForm() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const nav = useNavigate();
  const updateStore = UpdateStore();

  const handleUserOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    api('post', 'auth/login', {
      email: user?.email,
      password: user?.password,
    })
      .then((res) => {
        updateStore({ user: res?.data?.user });
        localStorage.setItem('token', res?.data?.token);
        nav('/');
      })
      .catch((err) => {
        toast.error(err);
      });
  };
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
              <input
                placeholder="Email address"
                value={user?.email}
                name="email"
                onChange={handleUserOnChange}
                type="text"
              />
            </div>
          </div>
          <div className="loginFormInputDiv">
            <div className="loginFormLabel">Password</div>
            <div className="loginFormInput">
              <input
                placeholder="Password"
                value={user?.password}
                name="password"
                onChange={handleUserOnChange}
                type="password"
              />
            </div>
          </div>
          <div className="loginFormCheckDiv">
            <div className="loginFormCheckboxDiv">
              <input type="checkbox" className="loginFormCheckox" />
              Remember me
            </div>
            <div className="loginFormForgetDiv">Forgot password?</div>
          </div>
          <button onClick={handleLogin} type="submit" className="loginFormButton">
            Login
          </button>
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
