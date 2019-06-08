import React, { Component } from "react";
import { Link } from "react-router-dom";
class IIM_TRICHY extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/iimt.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Indian Institute of Management Tiruchirapplli</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  under Goverment of India
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 15 in Management
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
                      Indian Institute Of Management Tiruchirappalli or IIM T or IIM, Trichy is the 11th franchise of IIM. 
                      IIMs are known for excellent teaching of management and IIM Trichy is no exception. IIM Trichy was founded in 2011 and operated in NIT Trichy campus temporarily until 2017.
                       IIM Trichy believes in the idea of “celebration of learning”. Situated in the peaceful city of Tiruchirappalli in Tamil Nadu, the southern-most state of India is the perfect institute to grab your glowing MBA degree from.
                        IIM Trichy is ranked 15th best business school in India by NIRF rankings. 
                      IIM Trichy campus stretches over 175 acres of land, hosting all the facilities of hostels, library, canteen, laboratories, and auditorium. Many guest lectures are arranged to bank up the student’s knowledge.
                       IIM Trichy also organizes student exchange program and faculty exchange program
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                    <h2 className="heading-new">
                        <span>IIM Trichy Courses & IIM Trichy Admission </span>
                    </h2>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>Post Graduate Programme in Management (PGP)</span>
                        </h2>
                        <div className="container">
                            <p>
                            It is a  two-year full-time residential course for graduates who wish to choose a career in management. Candidates seeking admission to the two-year PGP at Udaipur campus of IIM Udaipur have to appear in the Common Admission Test (CAT).
                            </p>
                        </div>
                    </div>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>Executive Post Graduate Programme in Management (EPGP)</span>
                        </h2>
                        <div className="container">
                            <p>
                            EPGP is an intensive one-year residential program of IIM Udaipur. The candidate is required to have 50% in Bachelor’s degree or an equivalent discipline. A valid GMAT score. The GMAT score should be within 05 years on the date of submission of application. Minimum 5 years of managerial/ entrepreneurial/ professional experience after graduation as on the date of submission of application.
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
                    <span>IIM_TRICHY Placements</span>
                  </h2>
                  <div className="container">
                    <p>
                    IIM Trichy Placement Cell is known for its whopping placement statistics result. Not only domestic but international companies are attracted to IIMT due to its rigorous education and training system. Let us have a quick review on placement data.
                    </p> 
                    <p>
                        <img className="fit_center" src="/images/iitt1.webp" alt="placement"/>
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
export default IIM_TRICHY;
