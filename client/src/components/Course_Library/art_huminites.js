import React, { Component } from "react";
import { Link } from "react-router-dom";
class ArtHuminities extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  src={require("../.././images/arts--humanities.arts.jpg")}
                  alt=""
                />
              </div>
              <div className="col-md-7 col-xs-10 clgprofiledes">
                <h3>Arts &amp; Humanities</h3>
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
                      <span>>About Arts &amp; Humanities </span>
                    </h2>
                    <div className="coursecontdes">
                      <p />
                      <p>
                        <strong />
                      </p>
                      <p dir="ltr">
                        <strong />
                      </p>
                      <p />
                      <p>
                        <br />
                      </p>
                      <p />
                    </div>
                  </div>

                  <div id="section-1" className="detail-content clearfix">
                    <h2 className="heading-new">
                      <span>Courses</span>
                    </h2>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/bachelor-arts">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bachelor of Arts
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/bachelor-fineart">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bachelor of Fine Arts
                          (BFA)
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/diploma-fineArts">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Diploma in Fine Arts
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
export default ArtHuminities;
