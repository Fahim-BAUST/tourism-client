
import React, { useState } from 'react';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import '../Services/Service/Service.js'



const Login = () => {
    const { signInUsingGoogle, signInUsingEamilAndPass, error, setLoading, setError } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                console.log('google sign in result:', result?.user);
                setLoading(true);
                history.push(redirect_uri);
            }).finally(() => { setLoading(false) });

    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSignIn = e => {
        e.preventDefault();
        signInUsingEamilAndPass(email, password)
            .then(result => {
                setLoading(true);
                history.push(redirect_uri);
            }).catch(error => {
                setError(error.message);
            }).finally(() => {
                setLoading(false);
            });

    }


    return (
        <div>

            <div className="login container text-center  mx-auto border border-1 mt-5 rounded-3 ">

                <h2 className="mt-3 mb-3  fs-3 ">Please Login (admin/user)</h2>
                <p className="text-danger">***Admin login: email=admin@gmail.com <br /> pass: adminadmin</p>
                <form className="text-start " onSubmit={handleSignIn}>
                    <label htmlFor="inputEmail4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Email</label>
                    <input type="email" onBlur={handleEmailChange} className="form-control border border-secondary" id="inputEmail4" required />

                    <label htmlFor="inputPassword4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Password</label>
                    <input type="password" onBlur={handlePasswordChange} className="form-control border border-secondary" id="inputPassword4" required />

                    <label htmlFor="inputPassword4" style={{ fontSize: "15px" }} className="form-label fw-bold text-danger ">{error}</label>

                    <button type="submit" style={{ backgroundColor: "goldenrod", color: "black" }} className="btn fw-bold col-xl-12 col-12 col-md-12 mt-3 shadow-lg mb-1">Sign in</button>
                </form>
                <p className="text-start" style={{ fontSize: "13px" }}>NewUser? <NavLink className="text-decoration-none fw-bold" to="/register">Register</NavLink></p>
                <button onClick={handleGoogleLogin} className="btn btn-secondary fw-bold mb-5 shadow-lg" style={{ backgroundColor: "#c29d59", color: "white", border: "none" }}>Google Signin</button>
            </div>

        </div>
    );
};

export default Login;