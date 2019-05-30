import React, { Component } from "react";
import { Link } from "react-router-dom";
class GLIM extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/glm.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Great Lakes Institute of Management</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  under Goverment of India
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 19 in Management
                </h6>
              </div>
              <div className="col-md-4 col-xs-12 mt-15 blockbtn">
                <Link to="/computr_app" className="crssidebtn">
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
                      Great Lakes Institute Of Management, Chennai a top-flight business school and one of the best institutes in southern states. It was founded in 2004. The Chennai campus in a short span of time emerged as a premier business school in India. Great Lakes has consistently been among the most innovative b-schools in responding to the business needs of the future. Great Lakes has 50+ full time faculty and 130+ visiting faculty including over 25 international faculty from top schools like Yale, Kellogg and Stanford ensuring that students have global perspectives.<br />
                      Established in 2010, Great Lakes Institute Of Management, Gurgaon is the second campus of Great Lakes and offers the same high quality education as the first campus in Chennai.<br />
                      The Institute offers two full time and many corporate courses and is approved by AICTE. The PGPM Course at Great Lakes is the only One-year management course and PGDM is of two years. Great Lakes Institute of Management Admissions takes place on the basis of Entrance like CAT/XAT/GMAT and on merit-basis.
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                    <h2 className="heading-new">
                        <span>GLIM Courses </span>
                    </h2>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>Post Graduate Programme in Management (PGP)</span>
                        </h2>
                        <div className="container">
                            <p>
                            It is a  two-year full-time residential course for graduates who wish to choose a career in management. Candidates seeking admission to the two-year PGP at Udaipur campus of GLIM have to appear in the Common Admission Test (CAT).
                            </p>
                        </div>
                    </div>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>Executive Post Graduate Programme in Management (EPGP)</span>
                        </h2>
                        <div className="container">
                            <p>
                            EPGP is an intensive one-year residential program of GLIM. The candidate is required to have 50% in Bachelor’s degree or an equivalent discipline. A valid GMAT score. The GMAT score should be within 05 years on the date of submission of application. Minimum 5 years of managerial/ entrepreneurial/ professional experience after graduation as on the date of submission of application.
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
                    <span>GLIM Ranking</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                        <ul className="lister">
                            <li><b>NIRF Ranking</b>-Ranked 16th Overall, 4th among non-IIM/IITs and 2nd among private B-schools. Great Lakes was ranked 6th in overall teaching & learning quality.</li>
                            <li>Ranked 3rd by Outlook India & 4th  by Businessworld in One year MBAs</li>
                            <li>9th by Business India & 14th by Business Today among top Indian B-Schools</li>
                            <li>1st among top Indian B-schools in Analytics by Analytics India Magazine</li>
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
export default GLIM;
