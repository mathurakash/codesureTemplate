import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light  rounded" aria-label="Eleventh navbar example" style={{borderBottom:"2px solid black"}}>
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">CodeSure</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarsExample09">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{ marginLeft: "auto" }}>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/" >Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;