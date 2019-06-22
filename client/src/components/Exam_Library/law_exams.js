import React, { Component } from "react";
import { Link } from "react-router-dom";
class Lawexams extends Component {
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
                <h3>Law Exams</h3>
              </div>
              <div class="col-md-2 col-xs-12 mt-5 blockbtn">
                <Link
                  to="all-entrance-compititive-exams.php"
                  class="crssidebtn"
                >
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
                      <span>Law Exams Exams</span>
                    </h2>

                    <div class="col-md-2">
                      <Link to="/ap_lawcet" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/ap-lawcet-2018.ap lawcet.jpg")}
                            alt=""
                          />
                          <h4>AP LAWCET 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/clat" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/clat-2018.clat.jpg")}
                            alt=""
                          />
                          <h4>CLAT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/ailet" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/ailet-2018.ailet.jpg")}
                            alt=""
                          />
                          <h4>AILET 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/lsat" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/lsat.lsat.jpg")}
                            alt=""
                          />
                          <h4>LSAT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/mht_cet" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/mh-cet-2018.mh cet.jpg")}
                            alt=""
                          />
                          <h4>MHT CET 2018</h4>
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
export default Lawexams;
