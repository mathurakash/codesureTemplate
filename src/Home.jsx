import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/156-1569877_custom-software-development-graphic-design1.png";
import whyus from "../src/img/about-img.jpg";
import Common from "./Common";

const Home = () => {
    return (
        <>

            <Common name="Grow Your Business" imgsrc={web} visit='/service' btname="Get Start" />

            {/* <div className="container-fluid nav_bg bg-blue">
                <div className="row mb-5">
                    <div className="col-10 mx-auto">
                        <h1 className="text-center">Why choose <strong className="brand-name" style={{color:"#3498db"}}>CodeSure</strong>?</h1>
                    
                        <p className="text-center">We build Software that are scalable & reliable .<br />
                            Build affordable, Easy- to-use & feature-rich Applications for your business.</p>

                        <div className="row">
                            <div className="col-md-6">
                                <img src={whyus} alt="Why US" style={{ height: "295px", width: "600px" }} />
                            </div>
                            <div className="col-md-6">

                                <h4 className="d-flex justify-content-center align-itens-center">Discuss your Software requirements with our team & get the finest fit for your business.<br />
                                    <br />
                                    Codesure has developers that are subject matter experts of their respective technologies. They leverage their experience & experts to deliver top-notch software development solutions.</h4>

                                <ul>
                                    <li>Outsource projects</li>
                                    <li>Augment team</li>
                                    <li> Upscale development capabilities</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container-fluid nav_bg mt-5 mb-4">
                <div className="row mb-5">
                    <div className="col-10 mx-auto">
                        <h1 className="text-center my-2"> Our <strong className="brand-name" style={{color:"#3498db"}}>Mission</strong> and<strong className="brand-name" style={{color:"#3498db"}}> Values </strong></h1>
                        <span class="section-divider"></span>
                        <h2 className="text-center">We have only one aim i.e. <strong className="brand-name">GRATIFIED CLIENTS ARE THE KEY TO A THRIVING ORGANIZATION. </strong>Our services can open all the doors despite of language barriers. We provide a robust solution keeping in mind all the factors that might affect the project in future. Our methodology also focuses on retaining our clients rather than gathering new ones every time. We aim at building both professional and personal relations with our clients.</h2>
                        <h2 className="text-center">In this agile world, we focus on amplifying our clients’ returns by providing them the best services at a nominal price. Our goal is to link each and every technology with machine learning algorithms so that we can give the most accurate results.</h2>


                    </div>
                </div>
            </div> */}

        </>
    );
}

export default Home;