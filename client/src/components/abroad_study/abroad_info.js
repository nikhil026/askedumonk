import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Slideshow from './Slideshow'

class AbroadInfo extends Component {
    render() {
        return (
            <div>
                <section className="testexplainboxh assessment-ex-area">
                    <div className="container">
                    <div className="col-md-12 info">
                        <h3 className="heading" align="center" style={{ "color":"white" }} >
                        <b>
                            Study Abroad 
                        </b>
                        </h3>
                        <h3 align="center" style={{ "fontSize": "25px" }}><hr />
                        <b>Study & Work Abroad</b>
                        </h3>
                        <h3 align="center" style={{ "fontSize": "25px" }}>
                        <b>United Kids Of The World </b>
                        </h3>

                        <p align="center">
                        <span style={{ "fontSize": "18px" }}>
                        Study Abroad information on Colleges, Courses Exams for USA, UK, Canada, Australia and other countries
                        </span>
                        </p>
                        <br />
                    </div>
                </div>
            </section>
                <div>
                 <Slideshow />
                </div>  
                <section className="testexplainboxh assessment-ex-area">
                    <div className="container">
                        <div className="col-md-12 info">
                            <p align="center">
                            <span
                                style={{
                                color: "#e21a37",

                                "fontSize": "20px"
                                }}
                            >
                                <strong>United Kids Of The World</strong>&nbsp;&nbsp;
                            </span>
                            <b>
                                <span style={{ "fontSize": "18px" }}>
                                is an initiative by Edumonk Foundation to establish the pillar of cultural
                                  exchange between the individuals of different geographies studying and working<br />
                                   together in abroad countries. Our self tailored study and work abroad<br />
                                    programs which are delivered by the Career Planners at Edumonk improves your<br /> 
                                    selection procedure in Top Colleges for different courses all across the world
                                </span>
                            </b>
                            </p>
                            <br />
                            <p align="center">
                            <span style={{ color: "gray", "fontSize": "18px" }}>
                                <i>
                                “It is better to travel well than to arrive” – Buddha.
                                </i>
                            </span>
                            </p>
                            <br />
                            <p align="center">
                            <span style={{ color: "gray", "fontSize": "18px" }}>
                                <i>
                                “CHANGE YOUR LANGUAGE AND YOU CHANGE YOUR THOUGHTS.” — KARL ALBRECHT
                                </i>
                            </span>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="forwhomcp">
                    <div className="container">
                        <div className="1 margin_120_95">
                            <div className="row">
                            <div className="heading_s1">
                                <h2>Explore Everything You Need</h2>
                            </div>
                            </div>

                            <div className="row">
                            <div className="col-lg-1">
                                <div className="box_feat" />
                            </div>
                            <div className="flex-container-logo">
                                <div className="flex-item-logo">
                            <div className="col-lg-2">
                                <div className="box_feat">
                                <Link to="/usa">
                                    <img src="/images/usa.jpg" alt="usa" />
                                    <h3>USA</h3>
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="flex-item-logo">
                            <div className="col-lg-2">
                                <div className="box_feat">
                                {" "}
                                <Link to="/france">
                                    <img src="/images/france.jpg" alt="france"/>
                                    <h3>FRANCE</h3>
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="flex-item-logo">
                            <div className="col-lg-2">
                                <div className="box_feat">
                                {" "}
                                <Link to="/canada">
                                    <img src="/images/canada.jpg" alt="canada"/>
                                    <h3>CANADA</h3>
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="flex-item-logo">
                            <div className="col-lg-2">
                                <div className="box_feat">
                                {" "}
                                <Link to="/austrlia">
                                    <img src="/images/austrlia.jpg" alt="austrlia"/>
                                    <h3> AUSTRLIA </h3>
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="flex-item-logo">
                            <div className="col-lg-2">
                                <div className="box_feat">
                                {" "}
                                <Link to="/new_zealand">
                                    <img src="/images/new_zealland.jpg" alt="new_zealand"/>
                                    <h3>NEW ZEALAND</h3>
                                </Link>
                                </div>
                            </div>
                            </div>
                            </div>
                            <div className="col-lg-1">
                                <div className="box_feat" />
                            </div>
                            </div>
                        </div>
                    </div>
            </section>             
            </div>

        )
    }
}

export default AbroadInfo
