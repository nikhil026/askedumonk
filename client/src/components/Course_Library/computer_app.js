import React, { Component } from "react";
import { Link } from "react-router-dom";
class ComputerApp extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  src={require("../.././images/computers--it.computers-and-it.jpg")}
                  alt=""
                />
              </div>
              <div className="col-md-7 col-xs-10 clgprofiledes">
                <h3>Computers &amp; IT</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Courses After 12
                </h6>
              </div>
              <div className="col-md-3 col-xs-12 mt-15 blockbtn" />
            </div>
          </div>
        </section>
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-md-12" role="main">
                <div className="coursedessside detail-content-wrapper">
                  <div id="section-0" className="detail-content">
                    <h2 className="heading-new">
                      <span>About Computers &amp; IT</span>
                    </h2>
                    <div className="coursecontdes">
                      <p dir="ltr">
                        <strong>
                          The career choices in the field computer and IT is
                          expanding quickly both in India and abroad on account
                          of the blasting in this industry. Framework think
                          about, examination, outline and writing computer
                          programs are the principle zones which give different
                          probabilities to this particular field and build
                          graduates to shape themselves in their
                          profession.&nbsp;
                        </strong>
                      </p>
                      <p dir="ltr">
                        <strong>
                          Programming and IT organizations are the fundamental
                          bosses of these graduates. They can likewise discover
                          openings for work in a variety of conditions in
                          college, research, private and open ventures,
                          government divisions, business associations, business
                          associations and the assembling segment and so on.
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div id="section-1" className="detail-content clearfix">
                    <h2 className="heading-new">
                      <span>Courses</span>
                    </h2>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/bachelor-computer">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bachelor of Computer
                          Applications
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
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
export default ComputerApp;
