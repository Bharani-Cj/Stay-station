import { useEffect, useState } from "react";
import "./LoginAndSignup.css";
import OutsideClickHandler from "react-outside-click-handler";
import { signIn, signUp } from "../../utils/api";
import { toast } from "react-toastify";

const signUpInitialState = {
  name: "",
  password: "",
  email: "",
};

const LoginAndSignup = ({ setLoginClick }) => {
  const [toggleSign, setToggleSign] = useState(false);

  const [signUpData, setSignUpData] = useState(signUpInitialState);
  const { name, email, password } = signUpData;
  // window scroll
  useEffect(() => {
    function handleScroll() {
      setLoginClick(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // handleSignUp
  function handleSignUpChange(e) {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  }
  // submitSignUp
  async function handleSignUpSubmit(e) {
    toast.warn("Please wait until you signed up");
    e.preventDefault();
    const data = await signUp(signUpData);
    if (!data?.token) return;
    setLoginClick(false);
    window.localStorage.setItem("user", data?.user.email);
  }

  async function handleSingInSubmit(e) {
    toast.warn("Please wait until you logged in");
    e.preventDefault();
    const data = await signIn(signUpData);
    if (!data?.token) return;
    setLoginClick(false);
    window.localStorage.setItem("user", data?.user.email);
  }

  return (
    <div className="l-wrapper">
      <OutsideClickHandler
        onOutsideClick={() => {
          setLoginClick(false);
        }}
      >
        <div className={toggleSign ? "container right-panel-active" : "container"} id="container">
          {/* Signup container */}
          <div className="form-container sign-up-container">
            <form onSubmit={handleSignUpSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="Name.."
                name="name"
                value={name}
                onChange={handleSignUpChange}
                required
              />
              <input
                type="email"
                placeholder="Email.."
                name="email"
                value={email}
                onChange={handleSignUpChange}
                required
              />
              <input
                type="password"
                placeholder="Password.."
                name="password"
                value={password}
                onChange={handleSignUpChange}
                required
              />
              <button>Sign Up</button>
            </form>
          </div>

          {/* SignIn Container */}
          <div className="form-container sign-in-container">
            <form onSubmit={handleSingInSubmit}>
              <h1>Sign in</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                value={email}
                onChange={handleSignUpChange}
              />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={handleSignUpChange}
              />
              <a href="4">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button
                  onClick={() => {
                    setToggleSign(false);
                    // setSignUpData(signUpInitialState);
                  }}
                  className="ghost"
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  onClick={() => {
                    // setSignUpData(signUpInitialState);
                    setToggleSign(true);
                  }}
                  className="ghost"
                  id="signUp"
                >
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
