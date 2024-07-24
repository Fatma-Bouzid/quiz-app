import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import COVER_IMAGE from '../../assets/background.jpg';
import { FcGoogle } from "react-icons/fc";
import './loginPage.css';
import { RiDoubleQuotesL } from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialiser useNavigate

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    // Vous pouvez ajouter une logique de validation ici
    // Si les informations d'identification sont correctes
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={COVER_IMAGE} alt="Cover" />
        <div className="quote-icon">
          <RiDoubleQuotesL />
        </div>
        <div className="quote">
          <p>
            Those people who develop the <br />
            ability to continuously acquire <br />
            new and better forms of <br />
            knowledge that they can apply <br />
            to their work and to their lives will <br />
            be the movers and shakers in <br />
            our society for the indefinite <br />
            future. <br />
            Brian Tracy
          </p>
        </div>
      </div>
      <div className="login-right">
        <div className="login-form">
          <div className="login-form-header">
            <h1>Login to your Account</h1>
            <p>with your registered Email Address</p>
          </div>
          <div>
            <label htmlFor="username" className="address">
              Email address*
            </label>
            <br />
            <input
              type="email"
              placeholder="Enter email address"
              className="login-input"
            />
            <label htmlFor="password" className="pass">
              Enter password*
            </label>
            <br />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="login-input"
              />
              <span className="show-password" onClick={toggleShowPassword}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
        </div>

        <div className="login-options">
          <input type="checkbox" /> Remember my password
        </div>

        <div className="login-buttons">
          <button className="login-button" onClick={handleLogin}>Login</button>
        </div>

        <div className="login-divider">
          <p>or</p>
        </div>

        <div className="google-login">
          <button type="button" onClick={() => console.log('Login with Google clicked')}>
            <FcGoogle />Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
