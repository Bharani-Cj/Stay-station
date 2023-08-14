import { useState } from "react";
import "./LoginAndSignup.css";
import OutsideClickHandler from "react-outside-click-handler";

// eslint-disable-next-line react/prop-types
const LoginAndSignup = ({ setLoginClick }) => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="l-wrapper">
      <OutsideClickHandler
        onOutsideClick={() => {
          setLoginClick(false);
        }}
      >
        <div className={signIn ? "container right-panel-active" : "container"} id="container">
          <div className="form-container sign-up-container">
            <form>
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="2" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="1" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="1" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="1" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="2" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="3" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="4">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button onClick={() => setSignIn(false)} className="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button onClick={() => setSignIn(true)} className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default LoginAndSignup;
