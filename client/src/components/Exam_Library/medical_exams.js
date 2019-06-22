import React, { Component } from "react";
import { Link } from "react-router-dom";
class MedicalEXAM extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="exmcatbk">
          <div className="container">
            <div className="row examcateg">
              <div className="col-md-1 col-xs-2">
                <i className="fa fa-gears" />
              </div>
              <div className="col-md-9 col-xs-10 clgprofiledes">
                <h3>Medical Exams</h3>
              </div>
              <div className="col-md-2 col-xs-12 mt-5 blockbtn">
                <Link
                  to="/all-entrance-compititive-exams"
                  className="crssidebtn"
                >
                  View All Exams
                </Link>
              </div>
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
                      <span>Medical Exams Exams</span>
                    </h2>

                    <div className="col-md-2">
                      <Link to="/aiims">
                        <div className="singleexamp">
                          <img
                            src={require("../.././images/aiims.aiims.jpg")}
                            alt=""
                          />
                          <h4>AIIMS 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div className="col-md-2">
                      <Link to="/neet" target="_blank" rel="">
                        <div className="singleexamp">
                          <img
                            src={require("../.././images/neet.neet.jpg")}
                            alt=""
                          />
                          <h4>NEET 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div className="col-md-2">
                      <Link to="/jipmer" target="_blank" rel="">
                        <div className="singleexamp">
                          <img
                            src={require("../.././images/jipmer.jipmer.jpg")}
                            alt=""
                          />
                          <h4>JIPMER 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div className="col-md-4 mrgn-branches">
                      <Link to="exam-details/jipmer">
                        <p className="brnchname">
                          <i className="fa fa-database" /> JIPMER (Jawaharlal
                          Institute of Postgraduate Medical Education &
                          Research)
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>

                    <div className="col-md-2">
                      <Link to="/gujcet" target="_blank" rel="">
                        <div className="singleexamp">
                          <img
                            src={require("../.././images/gujet.gujet.jpg")}
                            alt=""
                          />
                          <h4>GUJCET 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div className="col-md-2">
                      <Link to="/bhu-pmt" target="_blank" rel="">
                        <div className="singleexamp">
                          <img
                            src={require("../.././images/bhu-pmt.bhu pmt.jpg")}
                            alt=""
                          />

                          <h4>BHU PMT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div className="col-md-2">
                      <Link to="/pmet" target="_blank" rel="">
                        <div className="singleexamp">
                          <img
                            src={require("../.././images/pmet-2018.pmet.jpg")}
                            alt=""
                          />

                          <h4>PMET 2018</h4>
                        </div>
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
export default MedicalEXAM;
