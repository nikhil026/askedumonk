import React, { Component } from "react";
import { Link } from "react-router-dom";
class OtherExams extends Component {
  render() {
    return (
      <div className="wrapper">
        <section class="exmcatbk">
          <div class="container">
            <div class="row examcateg">
              <div class="col-md-1 col-xs-2">
                <i class="fa fa-gears" />
              </div>
              <div class="col-md-9 col-xs-10 clgprofiledes">
                <h3>Other Exams</h3>
              </div>
              <div class="col-md-2 col-xs-12 mt-5 blockbtn">
                <Link to="/all-entrance-compititive-exams" class="crssidebtn">
                  View All Exams
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section class="">
          <div class="container">
            <div class="row">
              <div class="col-md-12" role="main">
                <div class="coursedessside detail-content-wrapper">
                  <div id="section-1" class="detail-content clearfix">
                    <h2 class="heading-new">
                      <span>Other Exams Exams</span>
                    </h2>

                    <div class="col-md-2">
                      <Link to="/comedk_uget" target="_blank" rel="">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/comedk---uget.comedk uget.jpg")}
                            alt=""
                          />

                          <h4>COMEDK - UGET 2018</h4>
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
export default OtherExams;
