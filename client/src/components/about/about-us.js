import React, { Component } from "react";
import { Link } from "react-router-dom";
class Aboutus extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="abtback layer-overlay">
          <div className="container pt-20 pb-20">
            <div className="section-content">
              <div className="row">
                <div className="col-md-12 xs-text-center">
                  <h3>About Us</h3>
                  <ol className="breadcrumb">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">About</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="aptitest ptb-40">
          <div className="1">
            <div className="row">
              <div className="col-md-6">
                <p>
                  World has created several career choices today, dislike days
                  of yore when one needs to pick just in the middle of the set
                  number of decisions, surely the significance of achievement
                  has been changed these days. Understudy are more mindful when
                  contrasted with more seasoned days still we are neglecting to
                  limit the hole between understudies graduating each year and
                  getting utilized.{" "}
                  <Link to="/">
                    <strong>Edumonk</strong>
                  </Link>{" "}
                  trusts that "Career choices are a standout amongst the most
                  imperative choices in an understudy's scholarly and expert
                  adventure. “
                </p>
                <p>
                  Each understudy points diversely in his/her life yet he/she
                  crosses a similar way i.e. picking the stream after tenth,
                  picking vocation choices after twelfth. A few understudies
                  goes for higher investigations after graduations , a few
                  understudies points substantially higher and join Doctorship
                  program to get the{" "}
                  <Link to="https://en.wikipedia.org/wiki/Doctor_of_Philosophy">
                    <b>PHD</b>
                  </Link>
                  . Relatively every understudies after Graduation/Post
                  graduation join the race to land the position of wanted
                  profile coordinate, a few people succeed that on the double,
                  some may need to battle more to succeed, some are as yet
                  battling.{" "}
                </p>
                <p>
                  <Link to="/">
                    <strong>Edumonk</strong>
                  </Link>{" "}
                  fills in as “One Stop Destination" in career working of an
                  understudy from the early period of school to landing the
                  coveted position in his work field.
                </p>
              </div>
              <div className="col-md-6 abtusimg">
                <img
                  src={require("../.././images/career-counselling-advice-development-assessment-in-raipur-india.png")}
                  alt="career evaluation test"
                  title="career interest test free"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        <section className="team-section">
          <div className="1">
            <div className="row">
              <div className="heading_s1 text-center">
                <h2>
                  Our <span className="specialatt">Team</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-3 col-sm-6">
                <div
                  className="team-item-one"
                  style={{
                    "background-image": "url(../.././images/manish_pic.png)"
                  }}
                >
                  <div className="team-text-area">
                    <div className="team-text">
                      <div className="image-box">
                        <figure>
                          <img
                            src={require("../.././images/manish_pic.png")}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="image-content">
                        <h4 className="m-15">Manish Patel</h4>
                        <span>Founder and CEO</span>
                      </div>
                    </div>
                    <ul className="social-links">
                      <li>
                        <Link
                          to="https://www.facebook.com/gaganmittal.mittal"
                          target="_blank"
                        >
                          <i className="fa fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://twitter.com/gaganmittal258"
                          target="_blank"
                        >
                          <i className="fa fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.linkedin.com/in/gaganmittal258/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-sm-6">
                <div
                  className="team-item-one"
                  style={{ background: "url(../.././images/manish_pic.png)" }}
                >
                  <div className="team-text-area">
                    <div className="team-text">
                      <div className="image-box">
                        <figure>
                          <img
                            src={require("../.././images/prashant_pic.png")}
                            alt="Team member"
                          />
                        </figure>
                      </div>
                      <div className="image-content">
                        <h4 className="m-15">Prashant Agrawal</h4>
                        <span>Cheif Marketing Officer</span>
                      </div>
                    </div>
                    <ul className="social-links">
                      <li>
                        <Link
                          to="https://www.facebook.com/harsh.agrawal.566"
                          target="_blank"
                        >
                          <i className="fa fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://twitter.com/agrawal5561"
                          target="_blank"
                        >
                          <i className="fa fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.linkedin.com/in/harsh-vardhan-agrawal-58836aa5/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-sm-6">
                <div
                  className="team-item-one"
                  style={{ background: "url(../.././images/manish_pic.png)" }}
                >
                  <div className="team-text-area">
                    <div className="team-text">
                      <div className="image-box">
                        <figure>
                          <img
                            src={require("../.././images/Navneet_pic.png")}
                            alt="Team member"
                          />
                        </figure>
                      </div>
                      <div className="image-content">
                        <h4 className="m-15">Dr. Navneet Sharma</h4>
                        <span>Cheif Technical officier</span>
                      </div>
                    </div>
                    <ul className="social-links">
                      <li>
                        <Link
                          to="https://www.facebook.com/JawaharSurisetti/"
                          target="_blank"
                        >
                          <i className="fa fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://twitter.com/jawahar4" target="_blank">
                          <i className="fa fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.linkedin.com/in/jawaharsurisetti/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-sm-6">
                <div
                  className="team-item-one"
                  style={{ background: "url(../.././images/manish_pic.png)" }}
                >
                  <div className="team-text-area">
                    <div className="team-text">
                      <div className="image-box">
                        <figure>
                          <img
                            src={require("../.././images/kumar_pic.png")}
                            alt="Team member"
                          />
                        </figure>
                      </div>
                      <div className="image-content">
                        <h4 className="m-15">Dr. Kumar Gautam</h4>
                        <span>Cheif Research Officer</span>
                      </div>
                    </div>
                    <ul className="social-links">
                      <li>
                        <Link
                          to="https://www.facebook.com/vikkysarsawat"
                          target="_blank"
                        >
                          <i className="fa fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="" target="_blank">
                          <i className="fa fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="" target="_blank">
                          <i className="fa fa-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Aboutus;
