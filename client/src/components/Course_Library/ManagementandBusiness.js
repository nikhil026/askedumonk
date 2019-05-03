import React, { Component } from "react";
import { Link } from "react-router-dom";
class ManagementAndBusiness extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  src={require("../.././images/management--business.management--business.jpg")}
                  alt=""
                />
              </div>
              <div className="col-md-7 col-xs-10 clgprofiledes">
                <h3>Management &amp; Business</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Courses After 12
                </h6>
              </div>
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
                      <span>About Management &amp; Business</span>
                    </h2>
                    <div className="coursecontdes">
                      <p />
                      <p>
                        <strong>
                          A business and administration examines degree sets you
                          up for a profession in business, which may extend over
                          any part or industry. Your career alternatives are in
                          this manner shifted. Endeavor to settle on the region
                          you need to work in and intend to get applicable work
                          involvement. Basically it focuses on how business is
                          done and the management. It’s for the people who have
                          a proper knowledge about the core commercial field and
                          can work upon to handle the crucial business chores.
                        </strong>
                      </p>
                      <p />
                    </div>
                  </div>

                  <div id="section-1" className="detail-content clearfix">
                    <h2 className="heading-new">
                      <span>Courses</span>
                    </h2>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="https://www.careerpotli.com/course-details/bachelor-of-business-administration">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bachelor of Business
                          Administration
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="https://www.careerpotli.com/course-details/bachelor-of-business-management">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bachelor of Business
                          Management
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
export default ManagementAndBusiness;
