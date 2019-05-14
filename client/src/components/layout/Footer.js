import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <footer className="copyrights footerall">
      <div className="container1">
        <div className="row">
          <div className="col-md-3 col-sm-12 footerabt">
            <img src={require("../.././images/logo-edumonk1.png")} alt="" />
            <br />
            <br />

            <p>
              <Link to="/" alt="">
                <b>AskEdumonk</b>
              </Link>{" "}
              is a one stop solution for all your career oriented issues. Take
              in the first step with us and we will lead you in your path until
              and unless you reach the final step. Beginning from picking your
              stream to helping you get ready for your entrance tests. We here
              at AskEdumonk go about analyzing your skills and help you choose
              the stream that’s better for you.{" "}
            </p>
          </div>
          <div className="col-md-2 col-sm-12 ">
            <h4>Important Links</h4>
            <div className="small-border" />
            <ul className="check">
              <li>
                <Link to="/termsandconditions">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="termsandconditions.php#privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund">Refund Policy</Link>
              </li>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/login">Counsellor Login</Link>
              </li>
              <li>
                <Link to="/registration">Counsellor Registration</Link>
              </li>
              <li>
                <Link to="/pricing-career-assesment">Pricing</Link>
              </li>
              <li>
                <Link to="/blog">Edumonk Blogs</Link>
              </li>
              <li>
                <Link to="/latest-news">Success Stories</Link>
              </li>
              <Link to="/latest-news" />
              <li>
                <Link to="/latest-news" />
                <Link to="/career-assessment-test">Career Assessment</Link>
              </li>
              <Link to="career-assessment-test" />
            </ul>
          </div>
          <Link to="/career-assessment-test" />
          <div className="col-md-2 col-sm-12">
            <Link to="/career-assessment-test">
              <h4>Popular Courses</h4>
              <div className="small-border" />
            </Link>
            <ul className="check">
              <Link to="/career-assessment-test" />
              <li>
                <Link to="/career-assessment-test" />
                <Link to="/travel_tourism">Tourism Management</Link>
              </li>

              <li>
                <Link to="/metallurgical">Metallurgical Engineering</Link>
              </li>

              <li>
                <Link to="/bachelor_ayurveda">
                  Bachelor of Ayurveda, Medicine and Surgery
                </Link>
              </li>

              <li>
                <Link to="/mechanical">Mechanical Engineering</Link>
              </li>

              <li>
                <Link to="/mining">Mining engineering</Link>
              </li>

              <li>
                <Link to="/media_mass">Media Mass</Link>
              </li>

              <li>
                <Link to="/aeronautical">
                  Masters in Aeronautical Engineering
                </Link>
              </li>

              <li>
                <Link to="/bachelor_computer">
                  Computer Science Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2 col-sm-12">
            <h4>Popular Exams</h4>
            <div className="small-border" />
            <ul className="check">
              <li>
                <Link to="/mat">MAT</Link>
              </li>

              <li>
                <Link to="/snap">SNAP</Link>
              </li>

              <li>
                <Link to="/sbi-clerk">SBI Clerk</Link>
              </li>

              <li>
                <Link to="/tancet">TANCET</Link>
              </li>

              <li>
                <Link to="/ies">IES</Link>
              </li>

              <li>
                <Link to="/gate">PSU Through GATE</Link>
              </li>

              <li>
                <Link to="/mah_cet">MAH-CET</Link>
              </li>

              <li>
                <Link to="/lsat">LSAT</Link>
              </li>

              <li>
                <Link to="/upsc_ias">UPSC IAS</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4>Contact</h4>
            <div className="small-border" />

            <ul className="footercont">
              <li>
                <Link to="/">
                  <i className="fa fa-bulding" />
                  1st Floor, E-41, Panchsheel Park North, Panchsheel Park,New
                  Delhi, Delhi 110049
                </Link>
              </li>

              <li>
                <Link to="">
                  <i className="fa fa-phone" />
                  +91-8287233233
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-paper-plane" />
                  support@edumonk.com
                </Link>
              </li>
            </ul>
            <ul className="socialmediaftr">
              <li>
                <a
                  href="https://www.facebook.com/edumonk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebookft"
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/edumonk"
                  className="twitterft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://plus.google.com/105472053192066996623"
                  className="googleft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/edumonk"
                  className="linkedinft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="col-md-12 col-sm-12">
          <div className="copylinks">
            <p>
              Copyrights © 2019{" "}
              <a
                href="https://edumonk.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                edumonk.org.
              </a>{" "}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};