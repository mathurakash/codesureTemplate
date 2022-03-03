import React from "react";
import { NavLink } from 'react-router-dom';
import Common from "./Common";
import web from "../src/img/ProductsBackground.png";

const About = () => {
    return (
        <>
<Common name="Welcome to About page" imgsrc={web} visit='/contact' btname="Contact Now"  />


<div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <h3 className="text-center">CodeSure is a Software cum Web development company with an expertise in building machine learning models. We are a team of young and ambitious people based out in Sector-3 , Noida , India. We offer the best services to our clients at the least market price. We have a very unique approach to enhance our customers’ revenues. Our machine learning models will ensure that our clients get the best solution to their problem.</h3>
                </div>
            </div>
        </div>



        </>
    );
}

export default About;