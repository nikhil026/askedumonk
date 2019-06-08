import React, { Component } from "react";
import { Link } from "react-router-dom";
class IIM_LUCKNOW extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/iimluck.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Indian Institute of Management Lucknow</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  under Goverment of India
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 5 in Management
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
                      Indian Institute of Management Lucknow, an autonomous public business school, is fourth in the prestigious IIM family to be established after IIM Calcutta, IIM Ahmedabad, and IIM Bangalore. IIM Lucknow also serves as the mentor institution for the newly established IIM Rohtak and IIM Kashipur. It is recognized as an "Institution of Excellence" by India's Ministry of Human Resource Development. It is ranked among the Top 5 B-Schools in India. IIM Lucknow provides PG Diploma, Executive and fellowship programs in management stream. The management programs of IIM Lucknow are accredited by the London-based Association of MBA (AMBA).
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                    <h2 className="heading-new">
                        <span>IIM Lucknow Courses </span>
                    </h2>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>IIM Lucknow PGPM Program</span>
                        </h2>
                        <div className="container">
                            <p>
                            IIM Lucknow offers two years of full-time Post Graduation Program in Management, Agribusiness Management (PGP-ABM), and Sustainable Management (PGP-SM). Admission is done through CAT and Performance in Academic Writing Test (WAT) & Personal Interview (PI).
                            </p>
                        </div>
                    </div>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>IIM Lucknow Executive Programs</span>
                        </h2>
                        <div className="container">
                            <p>
                            IIM Lucknow offers Executive Diploma Programs in management for working professionals. Selection is done through GMAT and Performance in Academic Writing Test (WAT) & Personal Interview (PI).
                            </p>
                        </div>
                    </div>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>IIM Lucknow Fellowship Program</span>
                        </h2>
                        <div className="container">
                            <p>
                            IIM Lucknow provides four years of Fellowship programs in Management. Candidates are shortlisted on the basis of GRE/GMAT/ GATE or JRF/SRF(UGC/CSIR/ICAR) score/certificate can also apply in the relevant area of specialization.
                            </p>
                        </div>
                    </div>
                </div>
              </div>

                
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIM_LUCKNOW Ranking</span>
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
                          <td>5</td>
                          <td>2019</td>
                        </tr>
                        
                      </tbody>
                    </table>
                    </p>
                  </div>
                </div>
                
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIM_LUCKNOW Placements</span>
                  </h2>
                  <div className="container">
                    <p>
                    IIM Lucknow 2015-17 batch with a great improvement in the roles and compensation. One of the main highlights is the increase in the International roles offered on campus. 
                    </p>
                    <p className="align-middle">
                        <ul className="lister">
                            <li>High Entry Placement Program (HEPP) is formulated for candidates with work experience prior to joining IIML. The process extends from the beginning of December to the beginning of February.</li>
                            <li>Final placements are tentatively scheduled for the first week of February.</li>
                        </ul>
                     </p>
                     <p>
                     In 2017, IIM Lucknow has achieved 100 % Placement record. Almost 435 students have been placed. More than 70 domestic and international companies have participated in campus placement. 
                     </p>
                     <p>
                         <img className="fit_center" src="/images/iimluck1.png" alt="placement"/>
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
export default IIM_LUCKNOW;
