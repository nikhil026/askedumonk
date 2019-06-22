import React, { Component } from "react";
import { Link } from "react-router-dom";
class ExamsSearch extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  src="/images/engineering.engineering1.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-7 col-xs-10 clgprofiledes">
                <h3> Search Top Exams in India </h3>
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

                  <div id="section-1" className="detail-content clearfix">
                    <h2 className="heading-new">
                      <span>Top Exams Related to Following Field</span>
                    </h2>
                   
                   
                    <div className="col-md-4 mrgn-branches"> 
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/Engineering1">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Engineering Exams
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/Management11">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Management Exams
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/cpmititive_exam">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Compitive Exams
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/medical_exams">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Medical Exams
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                   
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/law_exams">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Law Exams
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/other_exams">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Other Exams
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
      </div>
        </section>
      </div>
    );
  }
}
export default ExamsSearch;
