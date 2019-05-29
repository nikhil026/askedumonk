import React, { Component } from "react";
import { Link } from "react-router-dom";
class XAVIER extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/iimi.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Indian Institute of Management Indore</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  under Goverment of India
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 6 in Management
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
                      IIM Indore is a self-governing public business school located in Indore, Madhya Pradesh.  IIM Indore was established in 1996. It is the sixth expansion to the Indian Institute of Management group of business schools. The 193 acre campus has a picturesque view as it is situated atop a scenic hill. It provides an ideal space for contemplative learning. The campus is beautiful with all the modern facilities which provide an enriching atmosphere for student learning.<br />

                        IIM Indore has been accredited by the Association of MBAs (AMBA, a UK-based accreditation agency) for four full time programs- Two Year Post Graduate Programme in Management (both at Indore and Mumbai), One Year Full Time Executive Post Graduate Programme in Management (EPGP) and Five Year Integrated Programme in Management (IPM, 4th and 5th Year).
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                    <h2 className="heading-new">
                        <span>IIM Indore Courses </span>
                    </h2>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>Post Graduate Programme in Management (PGP)</span>
                        </h2>
                        <div className="container">
                            <p>
                            It is a  two-year full-time residential course for graduates who wish to choose a career in management. Candidates seeking admission to the two-year PGP at Indore campus of IIM Indore have to appear in the Common Admission Test (CAT).
                            </p>
                        </div>
                    </div>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>Executive Post Graduate Programme in Management (EPGP)</span>
                        </h2>
                        <div className="container">
                            <p>
                            EPGP is an intensive one-year residential program of IIM Indore. The candidate is required to have 50% in Bachelor’s degree or an equivalent discipline. A valid GMAT score. The GMAT score should be within 05 years on the date of submission of application. Minimum 5 years of managerial/ entrepreneurial/ professional experience after graduation as on the date of submission of application.
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
                            <span>IIM Indore EXECUTIVE PROGRAMMES</span>
                        </h2>
                        <div className="container">
                            <p>
                                <ul className="lister">
                                    <li>Management Development Programme (MDP)</li>
                                    <li>Post Graduate Programme in Management-MX, Mumbai (PGPMX-Mumbai)</li>
                                </ul>
                            </p>
                            <p>
                            At IIM Indore it is possible to gain expertise in various fields such as Operations, Finance, Marketing, etc.  Various Management Development programmes (MDP’s) and certificate programmes are also offered.
                            </p>
                        </div>
                    </div>
                </div>
              </div>

                
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>XAVIER Ranking</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    <table class="thead-dark">
                      <thead>
                        <tr>
                        <th scope="col">Magazine/ Body</th>
                          <th scope="col">Rank</th>
                          <th scope="col">Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>NIRF</td>
                          <td>6</td>
                          <td>2019</td>
                        </tr>
                        
                      </tbody>
                    </table>
                    </p>
                  </div>
                </div>
                
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>XAVIER Placements</span>
                  </h2>
                  <div className="container">
                    <p>
                    The highest international package offered this year was 63.45 LPA while the highest domestic package stood at 33.04 LPA. The average CTC for the batch was 18.17 LPA, which is a 12% increase from the previous year. The gender diversity during placement could be seen as the placement was 39% for females and 61% for males. More than 200 companies came for recruitment for the batch 2016-2018. The institute is a preferred recruitment destination for the corporate world as shown below-
                    </p>
                    <p className="align-middle">
                   <img src="/images/iimi1.png" alt="placements"/>
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
export default XAVIER;
