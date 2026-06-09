  import React, { useState } from "react";
  import "../styles/login.css";

  const LoginRegister = () => {

    const [isLogin, setIsLogin] = useState(true);

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
                    Login to explore all the features and benefits of our
                    platform and see what's new
                  </p>

                  <div className="name">
                    <label>Email</label>
                    <input type="email" />
                  </div>

                  <div className="password">
                    <label>Password</label>
                    <input type="password" />
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
                    <label>Full Name</label>
                    <input type="text" />
                  </div>

                  <div className="name">
                    <label>Email</label>
                    <input type="email" />
                  </div>

                  <div className="password">
                    <label>Password</label>
                    <input type="password" />
                  </div>

                  <div className="password">
                    <label>Confirm Password</label>
                    <input type="password" />
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

              <button>
                {isLogin ? "Login" : "Register"}
              </button>

            </div>

          </div>

        </div>
      </div>
    );
  };

  export default LoginRegister;