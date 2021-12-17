// Joa
import{Link} from "react-router-dom";
import React from 'react';
import Signin from "./Signin";
import Signup from "./Signup";


const NavNav = () => {
    

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <a className="navbar-brand" href="/">Ciclo 5</a>
            <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home<span className="sr-only"></span> </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/service" className="nav-link">Service</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="/transport" className="nav-link">Transport</Link>
                </li>
            </ul>			    
            <ul className="navbar-nav ml-auto">


                <Signin/>

                
                <Signup/>
            </ul>
        </nav>

 )};

export default NavNav;