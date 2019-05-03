import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

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
                >
                  <div
                    className=" col-md-6 col-md-offset-3 col-sm-12 col-xs-12"
                    style={{ align: "center" }}
                  >
                    <ul className="nav nav-pills text-center form-tabs">
                      <li className="searchtype active">
                        <a data-toggle="tab" href="#colleges">
                          <div className="colleges" />
                          &nbsp;Colleges
                        </a>
                      </li>
                      <li className="searchtype ">
                        <a data-toggle="tab" href="#exams">
                          <div className="exams" />
                          &nbsp; Exams
                        </a>
                      </li>
                      <li className="searchtype ">
                        <a data-toggle="tab" href="#courses">
                          <div className="courses" />
                          &nbsp;Courses
                        </a>
                      </li>
                      <li className="searchtype">
                        <a data-toggle="tab" href="#courses">
                          <div className="courses" />
                          &nbsp;Scholarships
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-5 col-md-offset-3 col-sm-10 col-xs-10">
                    <div id="hero-search-input">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control input-lg ui-autocomplete-input"
                          id="prosearch"
                          name="s"
                          placeholder="Search for Course, Exams..."
                          autocomplete="off"
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
          <section className="forwhomcp">
            <div className="container">
              <div className="1 margin_120_95">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="box_feat">
                      <p
                        className="purchsetestbtnfrree"
                        style={{ "margin-top": "30px", padding: "10px" }}
                      >
                        Recognized By
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/1.jpg")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r1.jpg")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r4.png")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r3.jpg")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r2.jpg")} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="forwhomcp">
            <div className="container">
              <div className="1 margin_120_95">
                <div className="row">
                  <div className="heading_s1 text-center">
                    <h2>Explore Everything You Need</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-1">
                    <div className="box_feat" />
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat">
                      <Link to="/">
                        <img src={require("../.././images/e1.png")} alt="" />
                        <h3>Course Library</h3>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat">
                      {" "}
                      <Link to="/">
                        <img src={require("../.././images/e2.png")} alt="" />
                        <h3>Exam Library</h3>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat">
                      {" "}
                      <Link to="/">
                        <img src={require("../.././images/e3.png")} alt="" />
                        <h3>College Admission</h3>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat">
                      {" "}
                      <Link to="/">
                        <img src={require("../.././images/e4.png")} alt="" />
                        <h3> SIDCAT Test</h3>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat">
                      {" "}
                      <Link to="/">
                        <img src={require("../.././images/e5.png")} alt="" />
                        <h3>Events & Webinar</h3>
                      </Link>
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

                      "font-size": "20px"
                    }}
                  >
                    <strong>#AskEdumonk</strong>&nbsp;&nbsp;
                  </span>
                  <b>
                    <span style={{ "font-size": "18px" }}>
                      is an intiative taken by Edumonk Foundation to address the
                      growing needs of <br />
                      sustainable guidance effective process of self
                      intelligence Discovery.
                    </span>
                  </b>
                </p>
                <br />
                <p align="center">
                  <span style={{ color: "gray", "font-size": "18px" }}>
                    <i>
                      "Nothing in This World is Greater Than The Desire Line Of
                      indviduals And Wisdom of the Crowd"
                    </i>
                  </span>
                </p>
                <br />
                <p align="center">
                  <span style={{ "font-size": "18px" }}>
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
                    <span style={{ "font-size": "18px" }}>
                      Tap into the inner intelligence of your mind to choose the
                      best career for yourself and choose course as well as
                      colleges accordingly to reach towards your planned career
                      most efficiently
                    </span>
                  </p>
                  <br />
                  <a
                    href="free-online-stress-test.php"
                    className="purchsetestbtnfrree1"
                  >
                    Book 15 Mins Free Call
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
          <section className="forwhomcp">
            <div className="container">
              <div className="1 margin_120_95">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="box_feat">
                      <p
                        className="purchsetestbtnfrree"
                        style={{ "margin-top": "30px", padding: "10px" }}
                      >
                        Academic Partners
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/1.jpg")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r1.jpg")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r4.png")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r3.jpg")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r2.jpg")} alt="" />
                    </div>
                  </div>
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
                  <span style={{ "font-size": "18px" }}>
                    Tap into the inner intelligence of your mind to choose the
                    best career for yourself and choose course as well as
                    colleges accordingly to reach towards your planned career of
                    life goals most efficiently
                  </span>
                </p>
                <br />
              </div>
              <div className="1 margin_120_95">
                <div className="row">
                  <div className="col-lg-1">
                    <div className="box_feat" />
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat">
                      <img src={require("../.././images/e1.png")} alt="" />
                      <h3>Course Library</h3>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat" />
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat">
                      <img src={require("../.././images/e2.png")} alt="" />

                      <h3>Exam Library</h3>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat" />
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat">
                      <img src={require("../.././images/e3.png")} alt="" />
                      <h3>College Admission</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" assessment-ex-area">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={require("../.././images/prepare_yourself.png")}
                    className="homestressbox"
                    alt=""
                  />
                </div>
                <div className=" testexplainboxh col-md-6 info">
                  <h3>Prepare Yourself For the Future With Confidence</h3>
                  <p>
                    <span style={{ "font-size": "16px" }}>
                      Our <strong>SIDCAT Career Report</strong> is a map of the
                      8 dimensional intellegence of your mind. Its analysis is
                      conducted by identifying the shape of fingerprint patterns
                      and counting the number of ridges. Its just like the
                      sacnning we having during our{" "}
                      <strong>Aadhar Card Registration</strong> in India.
                      THereafter, the scan are analyzed our proprietary software
                      which generates a 78 page detailed career report
                      predicting the succes factor in different fields.
                    </span>
                  </p>
                  <br />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="box_feat">
                        <a
                          href="free-online-stress-test.php"
                          className="purchsetestbtnfrree1"
                        >
                          Get Sample Report
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="box_feat1">
                        <a
                          href="free-online-stress-test.php"
                          className="purchsetestbtnfrree1"
                        >
                          Book 15 Mins Free Call
                        </a>
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <br />
                  <p>
                    <span style={{ "font-size": "16px" }}>
                      Book your free slots with the nearest
                      <strong> #AskEdumonk Career Lab</strong> near your
                      location from the list of centers mentaioned in the list
                      below.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="forwhomcp">
            <div className="container">
              <div className="1 margin_120_95">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="box_feat">
                      <p
                        className="purchsetestbtnfrree"
                        style={{ "margin-top": "30px", padding: "10px" }}
                      >
                        Industry Partners
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/1.jpg")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r1.jpg")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r4.png")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r3.jpg")} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="box_feat1">
                      <img src={require("../.././images/r2.jpg")} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
          <section className=" assessment-ex-area">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={require("../.././images/webinar.png")}
                    className="homestressbox"
                    alt=""
                  />
                </div>
                <div className=" testexplainboxh col-md-6 info">
                  <h3>
                    Attend <span style={{ color: "red" }}>Live Webinars</span>
                    To Ask & Discuss Career Queries With Edumonk
                  </h3>
                  <p>
                    <span style={{ "font-size": "16px" }}>
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
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="box_feat">
                        <a
                          href="free-online-stress-test.php"
                          className="purchsetestbtnfrree1"
                        >
                          Upcoming Webinars
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="box_feat1">
                        <a
                          href="free-online-stress-test.php"
                          className="purchsetestbtnfrree1"
                        >
                          Book 15 Mins Free Call
                        </a>
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <br />
                  <p>
                    <span style={{ "font-size": "16px" }}>
                      Book your free slots with the nearest
                      <strong> #AskEdumonk Career Lab</strong> near your
                      location from the list of centers mentaioned in the list
                      below.
                    </span>
                  </p>
                </div>
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
