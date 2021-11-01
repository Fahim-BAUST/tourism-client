
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import '../Services/Service/Service.js'

const Login = () => {
    const { signInUsingGoogle, signInUsingEamilAndPass, error, user } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

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
                history.push(redirect_uri);
            })

    }

    const handleClickedChange = e => {
        e.target.checked ? setIsAdmin(true) : setIsAdmin(false);
    }

    return (
        <div>

            <div className="login container text-center  mx-auto border border-1 mt-5 rounded-3 ">
                <h2 className="mt-3 mb-3  fs-3 ">{isAdmin ? 'User Login' : 'Admin Login'}</h2>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check text-start ">
                            <input style={{ border: "2px solid blue" }} onChange={handleClickedChange} className="form-check-input " type="checkbox" id="gridCheck1" />
                            <label className="form-check-label fw-bold text-warning" htmlFor="gridCheck1">
                                If you are user please check is box
                            </label>
                        </div>
                    </div>
                </div>

                {isAdmin == false && <form className="text-start " onSubmit={handleSignIn}>
                    <label htmlFor="inputEmail4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Email</label>
                    <input type="email" onBlur={handleEmailChange} className="form-control border border-secondary" id="inputEmail4" required />

                    <label htmlFor="inputPassword4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Password</label>
                    <input type="password" onBlur={handlePasswordChange} className="form-control border border-secondary" id="inputPassword4" required />

                    <label htmlFor="inputPassword4" style={{ fontSize: "15px" }} className="form-label fw-bold text-danger ">{error}</label>

                    <button type="submit" style={{ backgroundColor: "goldenrod", color: "black" }} className="btn fw-bold col-xl-12 col-12 col-md-12 mt-3 shadow-lg mb-5">Sign in</button>
                </form>}
                {isAdmin && <button onClick={handleGoogleLogin} className="btn btn-secondary fw-bold mb-5 shadow-lg" style={{ backgroundColor: "#c29d59", color: "white", border: "none" }}>Google Signin</button>}
            </div>

        </div>
    );
};

export default Login;