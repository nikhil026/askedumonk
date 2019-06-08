import React, { Component } from "react";
import { Link } from "react-router-dom";
class IIM_RAIPUR extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/iimr.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Indian Institute of Management Raipur</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  under Goverment of India
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 20 in Management
                </h6>
              </div>
              <div className="col-md-4 col-xs-12 mt-15 blockbtn">
                <Link to="/ManagementandBusiness" className="crssidebtn">
                  Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="content-wrapper coursebodypa">
          <div className="container">
            <div className="col-md-12 crstextstyle crsdetailscnt" role="main">
              <div className=" detail-content-wrapper">
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Overview</span>
                  </h2>
                  <div className="container">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                      Indian Institute of Management Raipur (IIM Raipur) is a public business school established by the Government of Raipur. IIM Raipur is tenth IIM after IIM Ranchi. This year NIRF ranked IIM Raipur on the 14th. It offers various PG and Doctoral Programs in Management. IIM Raipur Admission to PG Programs is done through CAT Exam.
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                    <h2 className="heading-new">
                        <span>IIM Raipur Courses </span>
                    </h2>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>Post Graduate Programme in Management (PGP)</span>
                        </h2>
                        <div className="container">
                            <p>
                            It is a  two-year full-time residential course for graduates who wish to choose a career in management. Candidates seeking admission to the two-year PGP at Raipur campus of IIM Raipur have to appear in the Common Admission Test (CAT).
                            </p>
                        </div>
                    </div>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>Executive Post Graduate Programme in Management (EPGP)</span>
                        </h2>
                        <div className="container">
                            <p>
                            EPGP is an intensive one-year residential program of IIM Raipur. The candidate is required to have 50% in Bachelor’s degree or an equivalent discipline. A valid GMAT score. The GMAT score should be within 05 years on the date of submission of application. Minimum 5 years of managerial/ entrepreneurial/ professional experience after graduation as on the date of submission of application.
                            </p>
                            <p>
                                <ul className="lister">
                                    <li>Fellow Programme in Management (FPM)</li>
                                    <li>Post Graduate Programme in Management-MX, Mumbai (PGPMX-Mumbai)</li>
                                    <li>Fellow Programme in Management-Industry (FPM Industry)</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>FPM (Fellowship Programme in Management) </span>
                        </h2>
                        <div className="container">
                            <p>
                            Eligibility- The candidate is required to have a Master’s degree in a relevant discipline from a recognized university. Selection for FPM program is based on the previous academic and CAT, GMAT, GRE, GATE, or UGC / CSIR JRF exam (As per the area of specialization). 
                            </p>
                            <p>
                            Other programmes include-
                            </p>
                        </div>
                        <div className="container">
                            <p>
                                <ul className="lister">
                                    <li>Management Development Programme (MDP)</li>
                                    <li><b>FDP</b> (Faculty Development Programme)</li>
                                </ul>
                            </p>
                            
                        </div>
                    </div>
                </div>
              </div>

                
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIM_RAIPUR Ranking</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                        <ul className="lister">
                            <li><b>NIRF Ranking</b>- IIM Raipur is ranked 13th in the Management category and 1st among the second generation IIMs.</li>
                            <li><b>UT Dallas Ranking</b>- IIMU is now rated 3rd among Indian business schools based on research published in leading global journals.</li>
                            <li><b>AACSB Accredition</b>- IIM Raipur is the youngest AACSB-accredited B-school in India.</li>
                        </ul>
                    </p>
                  </div>
                </div>
                
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIM_RAIPUR Placements</span>
                  </h2>
                  <div className="container">
                    <p>
                    IIM Raipur provides excellent placement in various areas. More than 109 companies showed interest in the final placement process.
                    </p> 
                    <p>
                        <img className="fit_center" src="/images/iimr1.png" alt="placement"/>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIM Raipur Centre Of Excellence</span>
                  </h2>
                  <div className="container">
                    <p>
                    <b>IIM Raipur is planning to establish centers of excellence in the fields of:</b><br/>
                    </p> 
                    <p>
                        <ul className="lister">
                            <li>Centre for Health Management</li>
                            <li>Centre of Energy Management</li>
                            <li>Centre of Supply Chain Management</li>
                            <li>Centre of Innovation and Entrepreneurship</li>
                        </ul>
                    </p>
                  </div>
                </div>
              </div>  
          </div>
        </div>
      </div>
    );
  }
}
export default IIM_RAIPUR;
