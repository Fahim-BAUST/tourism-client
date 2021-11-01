import { Typography } from '@mui/material';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result);
                history.push(redirect_uri);
            })
    }

    return (
        <div className="mt-2">
            <div className="text-center">
                <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 800, marginTop: 2, marginBottom: 5, color: "#03e12", fontSize: "60px", fontFamily: "cursive" }} variant="h3">Please Login</Typography>
                <button
                    style={{borderRadius:"20px", padding:"15px 30px",border:"none", color: "white", backgroundColor: "#c29d59", fontWeight: "bold"}}
                    className=""
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;