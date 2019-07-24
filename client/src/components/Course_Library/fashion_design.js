import React, { Component } from "react";
import { Link } from "react-router-dom";
class FashionD extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  src={require("../.././images/fashion--design.fashion-design.jpg")}
                  alt=""
                />
              </div>
              <div className="col-md-7 col-xs-10 clgprofiledes">
                <h3>Fashion &amp; Design</h3>
                <h6 class="locationclg">
                  <i class="fa fa-graduation-cap" />Courses After 12
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
                    <h2 class="heading-new">
                      <span>About Fashion &amp; Design</span>
                    </h2>
                    <div className="coursecontdes" />
                  </div>

                  <div id="section-1" className="detail-content clearfix">
                    <h2 className="heading-new">
                      <span>Courses</span>
                    </h2>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/bachelor-design">
                        <p className="brnchname">
                          <i className="fa fa-database" />
                          Bachelor of Design
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/bachelor-design">
                        <p className="brnchname">
                          <i className="fa fa-database" />
                          Fashion Design Courses{" "}
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
export default FashionD;
