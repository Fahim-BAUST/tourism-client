import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div className="sticky-top">
            <nav style={{ backgroundColor: "#2B1B17" }} className="navbar navbar-expand-lg navbar-light  text-white ">
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand "
                        to="/home"
                    >
                        <img style={{ width: "90px",height:"40px" }} className="img-fluid" src="https://i.ibb.co/jGXXZyd/e2b4c47b242446a1b7f1f20d9612a76f.png" alt="" />
                    </NavLink>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link text-white"
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bolder"
                                    }}
                                >
                                    <i className="fas fa-home"></i>   Home
                                </NavLink>

                            </li>
                            <li className="nav-item">

                                <NavLink
                                    className="nav-link text-white"
                                    to="/services"

                                    activeStyle={{
                                        fontWeight: "bolder"

                                    }}
                                >
                                    <i className="fab fa-servicestack"></i>   Services
                                </NavLink>
                            </li>
                            <li className="nav-item">

                                <NavLink
                                    className="nav-link text-white"
                                    to="/about"

                                    activeStyle={{
                                        fontWeight: "bolder"
                                    }}
                                >
                                    <i className="fas fa-users"></i> About us
                                </NavLink>
                            </li>
                            {user?.email &&<li className="nav-item dropdown">
                                <NavLink  
                                 activeStyle={{
                                    fontWeight: "bolder"
                                }}
                                to="" className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <i className="fas fa-tasks"></i> Manage orders
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>    
                                         <NavLink
                                            className="nav-link text-dark"
                                            to="/myOrder"
                                            className="dropdown-item"
                                            activeStyle={{
                                                fontWeight: "bolder",

                                            }}
                                        >
                                              My order
                                        </NavLink>



                                    </li>
                                    <li>
                                     <NavLink
                                            className="nav-link text-dark "
                                            to="/allOrder"
                                            className="dropdown-item"
                                            activeStyle={{
                                                fontWeight: "bolder"

                                            }}
                                        >
                                             All order
                                        </NavLink>

                                        
                                        </li>

                                        <li>
                                     <NavLink
                                            className="nav-link text-dark "
                                            to="/addService"
                                            className="dropdown-item"
                                            activeStyle={{
                                                fontWeight: "bolder"

                                            }}
                                        >
                                             Add Service
                                        </NavLink>

                                        
                                        </li>

                                </ul>
                            </li>}
                        </ul>
                        <form className="d-flex align-items-center">
                            {user?.photoURL && <img style={{ width: "35px" }} className="img-fluid rounded-circle" src={user.photoURL} alt="" />}
                            {user?.email && <span className="me-2">{user.displayName}</span>}

                            {user?.email ? <button onClick={logOut} className="btn btn-outline-info" type="submit"><i className="fas fa-sign-out-alt"></i> Logout</button> : <NavLink to="/login"><button className="btn btn-outline-info" type="submit"><i className="fas fa-sign-in-alt"></i> Login</button></NavLink>}
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;