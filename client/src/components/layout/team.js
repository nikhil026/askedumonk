import React, { Component } from "react";
import { Link } from "react-router-dom";
class Team extends Component {
  render() {
    return (
      <div className="homepagem">
        <div id="wrapper">
          <section className="professional-doctor-area pt-30 pb-60 clearfix ">
            <div className="container">
              <div className="row">
                <div className="heading_s1 text-center">
                  <h2>
                    Most Active{" "}
                    <span className="specialatt">Our Team Counsellors</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="doctor-testimonial cctesttt owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "tanslate3d(-1140px, 0px, 0px)",
                          transition: " all 0s ease 0s",
                          width: "3420px"
                        }}
                      >
                        <div
                          className="owl-item cloned"
                          style={{ width: "285px" }}
                        >
                          <div className="client-testimonial-box text-center">
                            <div className="client-img">
                              <img
                                src={require("../.././images/manish_pic.png")}
                                alt="Team member "
                              />
                            </div>
                            <h4 className="m-15">Manish Patel</h4>
                            <h5>Founder and CEO</h5>
                            <p />
                            <div className="social-list m-15">
                              <ul className="socialmediaftr">
                                <li>
                                  <Link
                                    to="https://www.facebook.com/careerpotli/"
                                    target="_blank"
                                    className="facebookft"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-facebook" />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="https://twitter.com/careerpotli"
                                    className="twitterft"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-twitter" />
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    to="https://www.linkedin.com/in/careerpotli/"
                                    className="linkedinft"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-linkedin" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "285px" }}
                        >
                          <div className="client-testimonial-box text-center">
                            <div className="client-img">
                              <img
                                src={require("../.././images/kumar_pic.png")}
                                alt="Team member"
                              />
                            </div>
                            <h4 className="m-15">Dr. Kumar Gautam</h4>
                            <h5>Cheif Research Officer</h5>
                            <p />
                            <div className="social-list m-15">
                              <ul className="socialmediaftr">
                                <li>
                                  <Link
                                    to="https://www.facebook.com/careerpotli/"
                                    target="_blank"
                                    className="facebookft"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-facebook" />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="https://twitter.com/careerpotli"
                                    className="twitterft"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-twitter" />
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    to="https://www.linkedin.com/in/careerpotli/"
                                    className="linkedinft"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-linkedin" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "285px" }}
                        >
                          <div className="client-testimonial-box text-center">
                            <div className="client-img">
                              <img
                                src={require("../.././images/prashant_pic.png")}
                                alt="Team member"
                              />
                            </div>
                            <h4 className="m-15">Prashant Agrawal</h4>
                            <h5>Cheif Marketing Officer</h5>
                            <p>
                              1422 seminars across the globe on various
                              education and corporate issues with leading media
                              houses a{" "}
                            </p>
                            <div className="social-list m-15">
                              <ul className="socialmediaftr">
                                <li>
                                  <Link
                                    to="https://www.facebook.com/careerpotli/"
                                    target="_blank"
                                    className="facebookft"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-facebook" />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="https://twitter.com/careerpotli"
                                    className="twitterft"
                                    target="_blank"
                                  >
                                    <i className="fa fa-twitter" />
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    to="https://www.linkedin.com/in/careerpotli/"
                                    className="linkedinft"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-linkedin" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "285px" }}
                        >
                          <div className="client-testimonial-box text-center">
                            <div className="client-img">
                              <img
                                src={require("../.././images/Navneet_pic.png")}
                                alt="Team member"
                              />
                            </div>
                            <h4 className="m-15">Dr. Navneet Sharma</h4>
                            <h5>Cheif Technical officier</h5>
                            <p>
                              I am an Educational and Work Psychologist,
                              specialized in Career and Child Counseling, with a
                              profou{" "}
                            </p>
                            <div className="social-list m-15">
                              <ul className="socialmediaftr">
                                <li>
                                  <Link
                                    to="https://www.facebook.com/careerpotli/"
                                    target="_blank"
                                    className="facebookft"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-facebook" />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="https://twitter.com/careerpotli"
                                    className="twitterft"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-twitter" />
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    to="https://www.linkedin.com/in/careerpotli/"
                                    className="linkedinft"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <i className="fa fa-linkedin" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <Link
                        to="career-counselling-experts-in-india.php"
                        className="viewallbuttonc"
                      >
                        <i className="fa fa-play" />
                        View all Counsellors
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Team;
