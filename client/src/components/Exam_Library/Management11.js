import React, { Component } from "react";
import { Link } from "react-router-dom";
class JEEMain extends Component {
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
                <h3>Management</h3>
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
                      <span>Management Exams</span>
                    </h2>

                    <div class="col-md-2">
                      <Link to="/cat" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/cat.cat.jpg")}
                            alt=""
                          />

                          <h4>CAT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/mat" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/mat.mat.jpg")}
                            alt=""
                          />

                          <h4>MAT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/xat" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/xat.xat.jpg")}
                            alt=""
                          />

                          <h4>XAT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/snap" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/snap.snap.jpg")}
                            alt=""
                          />

                          <h4>SNAP 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/nmat" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/nmat.nmat.jpg")}
                            alt=""
                          />

                          <h4>NMAT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/ibsat" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/ibsat.ibsat.jpg")}
                            alt=""
                          />

                          <h4>IBSAT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/cmat" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/cmat.cmat.jpg")}
                            alt=""
                          />

                          <h4>CMAT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/atma" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/atma.atma.jpg")}
                            alt=""
                          />

                          <h4>ATMA 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/iift" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/iift.iift.jpg")}
                            alt=""
                          />

                          <h4>IIFT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/tancet" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/tancet.tancet.jpg")}
                            alt=""
                          />

                          <h4>TANCET 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/mah-cet" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/mah-cet.mah cet.jpg")}
                            alt=""
                          />

                          <h4>MAH-CET 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/irma" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/irma.irma.jpg")}
                            alt=""
                          />

                          <h4>IRMA 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/kiitee-management" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/kiitee-mgt.kiitee mgt.jpg")}
                            alt=""
                          />

                          <h4>KIITEE MANAGEMENT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/kmat" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/kmat.kmat.jpg")}
                            alt=""
                          />

                          <h4>KMAT 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/tsicet" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/tsicet.ts icet.jpg")}
                            alt=""
                          />

                          <h4>TSICET 2018</h4>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-2">
                      <Link to="/hpu-mat" target="_blank">
                        <div class="singleexamp">
                          <img
                            src={require("../.././images/hpu-mat.hpu mat.jpg")}
                            alt=""
                          />
                          <h4>HPU MAT 2018</h4>
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
export default JEEMain;
