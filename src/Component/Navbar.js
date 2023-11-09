import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (

            <div>
                <div >
                    <ul className="nav justify-content-end mb-1 nav1" >
                        <li className="nav-item">
                            <a href="/" className="nav-link text-white mail" ><i className="fa-solid fa-envelope fa-xl"></i>
                                &nbsp; patelganesh470@gmail.com</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link text-white mail1"><i className="fa-solid fa-phone fa-lg"></i> +91 8169139366</a>
                        </li>
                    </ul>
                </div>


                <nav className="navbar navbar-default mb-2">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand company_logo" href="/">COMPANY LOGO</a>
                        </div>

                        <div className="nav justify-content-end nav2">
                            <button type="button" className="btn btn-default border p-2.5" id="signin">Signup as a tutor</button> &nbsp;
                            &nbsp;
                            <button type="button" className="btn btn-primary p-2.5" id="login">Login</button> &nbsp;
                            <div className="dropdown">
                                <a className="btn btn-outline-default dropdown-toggle" href="/" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-bars fa-2xl mt-3 p-0.5" style={{ color: "rgb(34, 29, 123)" }}></i>
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><Link className="dropdown-item link1" area-current="page" to="/">Home</Link></li>
                                    <li><Link className="dropdown-item link2" area-current="page" to="/aboutus">About Us</Link></li>
                                    <li><Link className="dropdown-item link3" area-current="page" to="/service">Service</Link></li>
                                    <li><Link className="dropdown-item link4" area-current="page" to="/contactus">Contct Us</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Navbar;