import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;
export default function HomeF() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            const response = await axios.post('https://finaldashboard-api.vercel.app/signup', {
                username,
                password,
            });
            alert('Signed up succesfully');
            console.log(response.data); // Handle success response (optional)
            navigate('/')
        } catch (error) {
            console.error(error); // Handle errors (optional)
        }
    };

    const handleLogin = async () => {
        try {

            navigate('/')
        } catch (error) {
            console.error(error); // Handle errors (optional)
        }
    };

    return (
        <>
            <section className="section">
                <div className="overlay">
                    <img
                        loading="lazy"
                        src="https://cdn.dribbble.com/userupload/14647156/file/original-b4c99b21cbbf14c99ad835eefbd42d42.png?resize=1024x533"
                        alt=""
                        className="background-image"
                    />
                    <div className="wrapper">
                        <div className="titleContainer">
                            <h1 className="title" >Welcome!</h1>
                            <br />
                            <br />
                            <p className="para"><span style={{ color: " #4aaa55" }}>Signup</span> and create your company Employees database</p>
                        </div>
                        <div className="login-form">
                            <div className="header">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3da127ffbcdae638cfbcd74d76fa93d4b91607c9bc06737a239bce1d1a34dd15?apiKey=6b2c18dd5a434af0bc296b4d166f3aea&"
                                    alt="EMPLOYEE PORTAL icon"
                                    className="portal-icon"
                                />
                                <h2 className="portal-title">EMPLOYEE PORTAL</h2>
                            </div>
                            <h3 className="form-title">Sign Up</h3>
                            <p className="form-description">
                                Create your username and password
                            </p>
                            <label htmlFor="username" className="input-label">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                className='input-field'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="password" className="input-label">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='input-field'
                            />
                            <button onClick={handleSignUp} className="submit-button">
                                SIGN UP
                            </button>
                            <p className="password-reset">
                                <span className="forgot-text">Already have a account?  </span>{" "}
                                <a onClick={handleLogin} className="reset-link">
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <style>{`
        .section {
          display: flex;
          flex-direction: column;
          color: #fff;
          justify-content: center;
        }
        .overlay {
          overflow: hidden;
          height: auto;
          width: auto;
          align-items: center;
          justify-content: center;
          padding: 80px 60px;
        }
        @media (max-width: 991px) {
          .overlay {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100vh;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .wrapper {
          position: relative;
          display: flex;
          width: 100%;
        }
        @media (max-width: 991px) {
          .wrapper {
            max-width: 100%;
            flex-direction: column;
            
            gap: 80px;
            align-items: center;
          }
        }
        .title {
          
          font: 600 60px/30% Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .titleContainer {
          text-align: center;
          flex-grow: 0.7;
          margin: auto 0;
          
        }
        .para{
          font: 600 20px/30% Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .title {
            max-width: 100%;
            font-size: 40px;
          }
        }
        .login-form {
         
          border-radius: 20px;
          box-shadow: 2px 5px 10px 0px rgba(0, 0, 0, 0.1);
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          font-size: 14px;
          font-weight: 400;
          padding: 37px 40px 62px;
          height: 580px;
          width: 500px;
        }
        @media (max-width: 991px) {
          .login-form {
            max-width: 100%;
            height: auto;
            padding: 0 20px;
          }
        }
        .header {
          align-self: start;
          display: flex;
          margin-left: 11px;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .header {
            margin-left: 10px;
          }
        }
        .portal-icon {
          aspect-ratio: 0.15;
          object-fit: auto;
          object-position: center;
          width: 6px;
          background-color: #4aaa55;
        }
        .portal-title {
          -webkit-text-stroke-width: 1;
          -webkit-text-stroke-color: #4aaa55;
          font-family: Montserrat, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .form-title {
          text-transform: uppercase;
          align-self: center;
          margin-top: 54px;
          font: 600 22px Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .form-title {
            margin-top: 40px;
          }
        }
        .form-description {
          font-family: Montserrat, sans-serif;
          align-self: center;
          margin-top: 22px;
        }
        .input-label {
          color: #ffffff;
          font-family: Montserrat, sans-serif;
          font-weight: 500;
          margin-top: 10px;
        }
        @media (max-width: 991px) {
          .input-label {
            max-width: 100%;
          }
        }
        .input-field {
          border-radius: 4px;
          border-color: rgba(229, 229, 229, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          margin-top: 13px;
          align-items: start;
          color: rgba(0, 0, 0, 0.5);
          justify-content: center;
          padding: 17px 20px;
          font: 12px Montserrat, sans-serif;
        }
        @media (max-width: 991px) {
          .input-field {
            max-width: 100%;
          }
        }
        .submit-button {
          font-family: Montserrat, sans-serif;
          border-radius: 4px;
          background-color: #4aaa55;
          margin-top: 30px;
          align-items: center;
          font-weight: 500;
          justify-content: center;
          padding: 17px 60px;
        }
        @media (max-width: 991px) {
          .submit-button {
            max-width: 100%;
            padding: 17px 60px;
          }
        }
        .password-reset {
          color: #4aaa55;
          font-family: Montserrat, sans-serif;
          font-weight: 600;
          align-self: center;
          margin-top: 10px;
        }
        .forgot-text {
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
        .reset-link {
          font-weight: 500;
          text-decoration: underline;
          color: rgba(74, 170, 85, 1);
        }
      `}</style>
        </>
    );
}
