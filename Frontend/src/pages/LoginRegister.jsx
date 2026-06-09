import React, { useState } from "react";
import "../styles/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {

  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  // REGISTER

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8080/register",
        {
          fullName,
          email,
          password
        }
      );

      console.log(response.data);

      // Register success -> Login page
      
      setIsLogin(true);
      nav("/home");

    } catch (error) {

      console.log(error);

    }
  };

  // LOGIN

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8080/login",
        {
          email,
          password
        }
      );

      console.log(response.data);

      nav("/home");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="body">

      <div className={`login-container ${!isLogin ? "register-mode" : ""}`}>

        <div className="image">
          <img
            src="https://images.pexels.com/photos/7501135/pexels-photo-7501135.jpeg"
            alt="shoe"
          />
        </div>

        <div className="login-credentials">

          {
            isLogin ? (

              <div className="credentials">

                <h1>Welcome Back!</h1>

                <p>
                  Login to explore all the features and benefits
                  of our platform and see what's new
                </p>

                <div className="name">
                  <label htmlFor="l-email">Email</label>

                  <input
                    type="email" id="l-email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="password">
                  <label htmlFor="l-pass">Password</label>

                  <input
                    type="password" id="l-pass"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <a href="#">Forgot Password?</a>

              </div>

            ) : (

              <div className="credentials">

                <h1>Create Account</h1>

                <p>
                  Register now and start exploring our platform.
                </p>

                <div className="name">
                  <label htmlFor="r-name">Full Name</label>

                  <input
                    type="text" id="r-name"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="name">
                  <label htmlFor="r-email">Email</label>

                  <input
                    type="email" id="r-email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="password">
                  <label htmlFor="r-pass">Password</label>

                  <input
                    type="password" id="r-pass"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="password">
                  <label htmlFor="r-pass">Confirm Password</label>

                  <input type="password" id="r-pass" />
                </div>

              </div>

            )
          }

          <div className="login-register">

            <div>

              {
                isLogin ? (
                  <>
                    <p>Don't have an account?</p>

                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLogin(false);
                      }}
                    >
                      Register Now
                    </a>
                  </>
                ) : (
                  <>
                    <p>Already have an account?</p>

                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLogin(true);
                      }}
                    >
                      Login Now
                    </a>
                  </>
                )
              }

            </div>

            <button
              onClick={
                isLogin
                  ? handleLogin
                  : handleRegister
              }
            >
              {isLogin ? "Login" : "Register"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LoginRegister;