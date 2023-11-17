import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="p-0 login-right position-relative">
        <div className="login-head pt-4 text-end" />
        <div className="login-form">
          <div className="login-cnt false">
            <div className="overlay " />
            <div className="modal fade " style={{ display: "none" }}>
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body text-center">
                    <div className="loader mx-auto" />
                    <h5 className="modal-heading mt-3 text-primary">
                      Please wait, system proccessing your request.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="shadow-lg bg-body col-xl-4 col-lg-5 col-md-6 col-sm-10 rounded  mt-5  mt-5 text-center mb-5">
                <div className="pt-5 pb-5">
                  <h1 className="sec-title title-login">Admin Login</h1>
                  <div className="text-start">
                    <div className="form1 p-3">
                      <div className="button-group d-flex justify-content-center mb-5">
                        <button className="btn me-3 pointer active " role="email">
                          <i className="fa-regular fa-envelope me-1" /> Email
                        </button>
                        <button className="btn  me-3 pointer false" role="mobile">
                          <i className="fa-solid fa-mobile-screen" /> Mobile
                        </button>
                      </div>
                      <div id="email-field" className="field-wrapper input mb-3 ">
                        <label>
                          Email{" "}
                          <sup className="text-danger mt-4" style={{ fontSize: 12 }}>
                            *
                          </sup>
                          <small
                            className="text-danger text-start login-error"
                            style={{ fontSize: 12 }}
                          >
                            Please enter valid email.
                          </small>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          maxLength={70}
                          autoComplete="off"
                          className="form-control  border border-danger"
                        />
                      </div>
                      <div className="d-none">
                        <div id="mobile-field" className="field-wrapper input mb-3">
                          <label>
                            Mobile{" "}
                            <sup
                              className="text-danger mt-4"
                              style={{ fontSize: 12 }}
                            >
                              *
                            </sup>
                          </label>
                          <input
                            id="mobile"
                            name="mobile"
                            maxLength={10}
                            autoComplete="off"
                            className="form-control  "
                          />
                          <div
                            id="otpCheck-field"
                            className="field-wrapper input mb-3 mt-1"
                          >
                            <input
                              type="checkbox"
                              name="otpCheck"
                              id="otpCheck"
                              className="me-2 "
                            />
                            <label htmlFor="otpCheck">Login with OTP? </label>
                          </div>
                        </div>
                        <div
                          id="otp-field"
                          className="field-wrapper input mb-3 d-none"
                        >
                          <label>
                            OTP{" "}
                            <sup
                              className="text-danger mt-4"
                              style={{ fontSize: 12 }}
                            >
                              *
                            </sup>
                          </label>
                          <input
                            id="otp"
                            name="otp"
                            maxLength={6}
                            ots=""
                            type="password"
                            autoComplete="off"
                            className="form-control  "
                          />
                          <p className="text-success">
                            OTP valid time{" "}
                            <span className="forgot-pass-link text-primary float-end" />
                          </p>
                        </div>
                      </div>
                      <div id="password-field" className="field-wrapper input ">
                        <label>
                          Password{" "}
                          <sup className="text-danger mt-4" style={{ fontSize: 12 }}>
                            *
                          </sup>
                        </label>
                        <div className="input-group">
                          <input
                            type="password"
                            id="logpass"
                            name="logpass"
                            maxLength={20}
                            autoComplete="off"
                            className="form-control  "
                          />
                          <div className="input-group-append">
                            <span className="input-group-text ">
                              <i className="fas fa-eye" />
                            </span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <a
                            className="pointer forgot-pass-link text-primary"
                            href="/admin-forgot-password"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      <div id="captcha-field" className="field-wrapper input ">
                        <div id="captcha-field" className="field-wrapper input">
                          <label>
                            Captcha{" "}
                            <sup
                              className="text-danger mt-4"
                              style={{ fontSize: 12 }}
                            >
                              *
                            </sup>
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              id="captcha"
                              name="captcha"
                              otc=""
                              maxLength={6}
                              autoComplete="off"
                              className="form-control "
                            />
                            <div className="input-group-append">
                              <span className="p-0 input-group-text bg-light  ps-3 pe-3">
                                AWI7O3
                              </span>
                              <span className="input-group-text ">
                                <i
                                  className="fas fa-redo text-primary"
                                  style={{ fontSize: 18 }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <div className="field-wrapper">
                          <button
                            type="submit"
                            disabled=""
                            className="btn btn-primary float-end "
                          >
                            Log In{" "}
                          </button>
                          <button
                            type="submit"
                            disabled=""
                            className="btn btn-primary float-end d-none"
                          >
                            Send OTP{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="toast  success ? bg-success : bg-primary"
              style={{ position: "fixed", top: 10, right: 10, zIndex: 999999 }}
            >
              <div className="toast-body p-0">
                <div className="row p-3 ps-1">
                  <div className="col-md-10 p-2 text-center text-white" />
                  <div className="col-md-2">
                    <button
                      style={{
                        border: "1px solid rgb(92, 92, 92)",
                        boxShadow: "rgb(92, 92, 92) 2px 2px 3px",
                        background: "rgb(255, 255, 255)",
                        borderRadius: 5
                      }}
                    >
                      <span>X</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default App
