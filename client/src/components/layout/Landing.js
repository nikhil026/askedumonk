import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Coverflows from "./coverflows";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="homepagem">
        <div id="wrapper">
          <div
            className="demo-parallax parallax section looking-photo hero-wrapper blackshadow1"
            data-stellar-background-ratio="0.5"
          >
            <div className="container1">
              <div className="hero-title text-center">
                <div className="dir-ho-t-tit wavetextbanner">
                  <h3 className="tsrtextt" style={{ color: "white" }}>
                    <br />
                    <br />
                  </h3>
                  <p />
                </div>
              </div>
              <div className="search-bar">
                <div
                  className="text-center"
                  style={{ width: "-moz-fit-content" }}
                ><div className="flex-container-search">
                <div className="flex-itemer" >
                    <ul className="nav nav-pills text-center form-tabs">
                      <li className="searchtype active">
                        <a data-toggle="tab" href="#colleges">
                          <div className="colleges" />
                          &nbsp;Colleges
                        </a>
                      </li>
                      </ul>
                      </div>
                      <div className="flex-itemer" >
                    <ul className="nav nav-pills text-center form-tabs">  
                      <li className="searchtype active">
                        <a data-toggle="tab" href="#exams">
                          <div className="exams" />
                          &nbsp; Exams
                        </a>
                      </li>
                      </ul>
                      </div>
                      <div className="flex-itemer" >
                    <ul className="nav nav-pills text-center form-tabs">
                      <li className="searchtype active">
                        <a data-toggle="tab" href="#courses">
                          <div className="courses" />
                          &nbsp;Courses
                        </a>
                      </li>
                      </ul>
                      </div>
                </div>
                </div>
                <div >
                  <div >
                    <div id="hero-search-input">
                      <div className="input-group">
                        <input
                          type="text"
                          className=""
                          id="prosearch"
                          name="s"
                          placeholder="Search for Course, Exams..."
                          autoComplete="off"
                        />
                        <div className="sea-drop-com sea-drop-1" />
                        <span className="input-group-btn">
                          <button className="btn btn-info btn-lg" type="submit">
                            <i className="glyphicon glyphicon-search" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            <div>
              <Coverflows />
            </div>
        
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
                      <Link to="/">
                        <img src={require("../.././images/e1.png")} alt="" />
                        <h3>Course Library</h3>
                      </Link>
                    </div>
                  </div>
                  </div>
                  <div className="flex-item-logo">
                  <div className="col-lg-2">
                    <div className="box_feat">
                      {" "}
                      <Link to="/">
                        <img src={require("../.././images/e2.png")} alt="" />
                        <h3>Exam Library</h3>
                      </Link>
                    </div>
                  </div>
                  </div>
                  <div className="flex-item-logo">
                  <div className="col-lg-2">
                    <div className="box_feat">
                      {" "}
                      <Link to="/">
                        <img src={require("../.././images/e3.png")} alt="" />
                        <h3>College Admission</h3>
                      </Link>
                    </div>
                  </div>
                  </div>
                  <div className="flex-item-logo">
                  <div className="col-lg-2">
                    <div className="box_feat">
                      {" "}
                      <Link to="/">
                        <img src={require("../.././images/e4.png")} alt="" />
                        <h3> SIDCAT Test</h3>
                      </Link>
                    </div>
                  </div>
                  </div>
                  <div className="flex-item-logo">
                  <div className="col-lg-2">
                    <div className="box_feat">
                      {" "}
                      <Link to="/">
                        <img src={require("../.././images/e5.png")} alt="" />
                        <h3>Events & Webinar</h3>
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
                    <strong>#AskEdumonk</strong>&nbsp;&nbsp;
                  </span>
                  <b>
                    <span style={{ "fontSize": "18px" }}>
                      is an intiative taken by Edumonk Foundation to address the
                      growing needs of <br />
                      sustainable guidance effective process of self
                      intelligence Discovery.
                    </span>
                  </b>
                </p>
                <br />
                <p align="center">
                  <span style={{ color: "gray", "fontSize": "18px" }}>
                    <i>
                      "Nothing in This World is Greater Than The Desire Line Of
                      indviduals And Wisdom of the Crowd"
                    </i>
                  </span>
                </p>
                <br />
                <p align="center">
                  <span style={{ "fontSize": "18px" }}>
                    <b>
                      Align the intelligence of your mind with study habits for
                      defining learning path to have a greater
                      <br /> sense of self achievement and higher posibilites of
                      employability.
                    </b>
                  </span>
                </p>
              </div>
            </div>
          </section>
          <br />
          <br />
          <section className="assessment-ex-area">
            <div className="container">
              <div className="row">
                <div className="col-md-6 info">
                  <h3>
                    <b>Discover Your Inborn Potential</b>
                  </h3>
                  <p>
                    <span style={{ "fontSize": "18px" }}>
                      Tap into the inner intelligence of your mind to choose the
                      best career for yourself and choose course as well as
                      colleges accordingly to reach towards your planned career
                      most efficiently
                    </span>
                  </p>
                  <br />
                  <a
                    href={process.env.PUBLIC_URL + '/SIDCAT Career Report(2).pdf'}
                    download
                    className="purchsetestbtnfrree1"
                    target="_blank"
                    type="application/pdf"
                  >
                    Get SIDCAT Sample Career Report
                  </a>
                </div>
                <div className="col-md-6">
                  <img
                    src={require("../.././images/discover2.jpg")}
                    className="homestressbox"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="testexplainboxh assessment-ex-area">
            <div className="container">
              <div className="col-md-12 info">
                <h3 align="center">
                  <b>
                    Self Intelligence Discovery Certification And
                    Training(SIDCAT)
                  </b>
                </h3>

                <p align="center">
                  <span style={{ "fontSize": "18px" }}>
                    Tap into the inner intelligence of your mind to choose the
                    best career for yourself and choose course as well as
                    colleges accordingly to reach towards your planned career of
                    life goals most efficiently
                  </span>
                </p>
                <br />
              </div>
            </div>
          </section>
          <section className="forwhomcp">
            <div className="container">
              <div className="1 margin_120_95">
                <div className="row">
                  <div className="col-lg-1">
                    <div className="box_feat" />
                  </div>
                  <div className="flex-container-logo-again">
                    <div className="flex-item-logo">
                  <div className="col-lg-2">
                    <div className="box_feat">
                      <Link to="/">
                        <img src="/images/thinking.png" alt="online" />
                        <h3>Take the Online Assessment</h3>
                      </Link>
                    </div>
                  </div>
                  </div>
                  <div className="flex-item-logo">
                  <div className="col-lg-2">
                    <div className="box_feat">
                      {" "}
                      <Link to="/">
                        <img src="/images/our.png" alt="find" />
                        <h3>Find Out Who You Really Are</h3>
                      </Link>
                    </div>
                  </div>
                  </div>
                  <div className="flex-item-logo">
                  <div className="col-lg-2">
                    <div className="box_feat">
                      {" "}
                      <Link to="/">
                        <img src="/images/guidance.png" alt="guidence" />
                        <h3>Get Personalized Guidence from Experts</h3>
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
          <section className=" assessment-ex-area">
            <div className="container">
              <div className="row">
                <div className=" testexplainboxh col-md-6 info">
                  <h3 className="heading">Take the Online Assessment</h3>
                  <p>
                    <span style={{ "fontSize": "16px" }}>
                      Our <strong>SIDCAT Career Report</strong> is a map of the
                      8 dimensional intellegence of your mind. Its analysis is
                      conducted by identifying the shape of fingerprint patterns
                      and counting the number of ridges. Its just like the
                      sacnning we having during our{" "}
                      <strong>Aadhar Card Registration</strong> in India.
                      Thereafter, the scan are analyzed our success factors.
                    </span>
                  </p>
                  <br />
                  
                  <div className="flex-container-text">
                  <div className="flex-item-text">
                  <br />
                  <a
                    href={process.env.PUBLIC_URL + '/SIDCAT Career Report(2).pdf'}
                    download
                    className="purchsetestbtnfrree1"
                    target="_blank"
                    type="application/pdf"
                  >
                    Get SIDCAT Sample Career Report
                  </a>
                  </div>
                  </div>
                  &nbsp;
                  <br />
                  <p>
                    <span style={{ "fontSize": "16px" }}>
                      Book your free slots with the nearest
                      <strong> #AskEdumonk Career Lab</strong> near your
                      location from the list of centers mentaioned in the list
                      below.
                    </span>
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="/images/thinking.png"
                    className="homestressbox"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>{" "}
          <section className=" assessment-ex-area">
            <div className="container">
              <div className="row">
              <div className="col-md-6 imp-image">
                  <img
                    src="/images/our.png"
                    className="homestressbox lower"
                    alt=""
                  />
                </div>
                <div className=" testexplainboxh col-md-6 info lowernew">
                  <h3 className="heading">
                  Find Out Who You Really Are
                  </h3>
                  <p>
                    <span style={{ "fontSize": "16px" }}>
                      We conduct public as well as private Webinars for School
                      Students. College Students as well as Working
                      professionals. These Counselling Event & Webinars are
                      meant for discussing and addressing most of the queries
                      people face in choosing their career, deciding which study
                      stream to opt for or which colleges they should take
                      adimission.
                    </span>
                  </p>
                  <br />
                   
                  <div className="flex-container-text">
                  <div className="flex-item-text">
                  <br />
                  <a
                    href={process.env.PUBLIC_URL + '/SIDCAT Career Report(2).pdf'}
                    download
                    className="purchsetestbtnfrree1"
                    target="_blank"
                    type="application/pdf"
                  >
                    Get SIDCAT Sample Career Report
                  </a>
                  </div>
                  </div>
                  &nbsp;
                  <br />
                  <p>
                    <span style={{ "fontSize": "16px" }}>
                      Book your free slots with the nearest
                      <strong> #AskEdumonk Career Lab</strong> near your
                      location from the list of centers mentaioned in the list
                      below.
                    </span>
                  </p>
                </div>
                <div className="col-md-6 imp-image1">
                  <img
                    src="/images/our.png"
                    className="homestressbox lower"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>{" "}
          <section className=" assessment-ex-area">
            <div className="container">
              <div className="row">
                <div className=" testexplainboxh col-md-6 info">
                  <h3 className="heading">
                  Get Personalized Guidence from Experts
                  </h3>
                  <p>
                    <span style={{ "fontSize": "16px" }}>
                      We conduct public as well as private Webinars for School
                      Students. College Students as well as Working
                      professionals. These Counselling Event & Webinars are
                      meant for discussing and addressing most of the queries
                      people face in choosing their career, deciding which study
                      stream to opt for or which colleges they should take
                      adimission.
                    </span>
                  </p>
                  <br />
                   
                  <div className="flex-container-text">
                  <div className="flex-item-text">
                  <br />
                  <a
                    href={process.env.PUBLIC_URL + '/SIDCAT Career Report(2).pdf'}
                    download
                    className="purchsetestbtnfrree1"
                    target="_blank"
                    type="application/pdf"
                  >
                    Get SIDCAT Sample Career Report
                  </a>
                  </div>
                  </div>
                  &nbsp;
                  <br />
                  <p>
                    <span style={{ "fontSize": "16px" }}>
                      Book your free slots with the nearest
                      <strong> #AskEdumonk Career Lab</strong> near your
                      location from the list of centers mentaioned in the list
                      below.
                    </span>
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="/images/guidance.png"
                    className="homestressbox"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="testexplainboxh assessment-ex-area">
            <div className="container">
              <div className="col-md-12 info">
                <h3 className="heading" align="center" style={{ "color":"white" }} >
                  <b>
                    Study Abroad
                  </b>
                </h3>
                <h3 align="center" style={{ "fontSize": "25px" }}><hr />
                  <b>A Edumonk Initiative</b>
                </h3>

                <p align="center">
                  <span style={{ "fontSize": "18px" }}>
                  Study Abroad information on Colleges, Courses Exams for USA, UK, Canada, Australia and other countries
                  </span>
                </p>
                <br />
                <p align="center">
                  <Link to="/abroad_study" className="purchsetestbtnfrree1">
                    Get More Information</Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
