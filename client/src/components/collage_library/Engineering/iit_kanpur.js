import React, { Component } from "react";
import { Link } from "react-router-dom";
class IIT_KANPUR extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/iitm.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Indian Institute of Technology Kanpur</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Under Goverment of India
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 4
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
                      Indian Institute of Technology, Kanpur, popularly known as IIT Kanpur,
                       was established in the year 1959. It offers various undergraduate, postgraduate,
                        integrated and research programs in the field of Engineering, Science, Management, and Design. 
                        IIT Kanpur Admissions to B.Tech, B.S, and dual degree courses are offered through 
                        JEE Advanced, and for M.Sc programs admission is offered through JAM.
                        A valid GATE score is required for admission to the M.Tech./ MS program and for M.Des.
                         course it is offered on the basis of CEED score.
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Kanpur Courses</span>
                  </h2>
                  <div className="container">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                      IIT Kanpur offers Undergraduate, Postgraduate and 
                      Research programs in streams like Engineering, Sciences, 
                      Humanities, and Management.
                      </span>
                    </p>
                    <p>
                    <img className="fit_center" src="/images/IITD 1.png" alt="course img" />
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Kanpur Admission Criteria</span>
                  </h2>
                  <div className="container">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                      The institute offers the variety of undergraduate, postgraduate and doctoral courses in multiple disciplines. 
                      IIT Kanpur Admission is done through national level entrance exam scores.
                      </span>
                    </p>
                    <p className="align-middle">
                    <table class="thead-dark">
                      <thead>
                        <tr>
                          <th scope="col">Program</th>
                          <th scope="col">Minimum Eligibility</th>
                          <th scope="col">Selection Criteria</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <tr>
                              <td>B.Tech</td>
                              <td>B.Tech+M.Tech</td>
                            </tr>
                          </td>
                          <td>10+2 in Science Stream with minimum required marks from a reputed board</td>
                          <td>JEE Main and JEE Advanced Score</td>
                        </tr>
                        <tr>
                          <td>M.Tech</td>
                          <td>B.Tech/ M.Sc degree with minimum 60% marks <br/> OR <br />B.Tech. from IITs with CGPA of 8.00 without GATE are also eligible for admission</td>
                          <td>GATE Score followed by Written Test and/or Interview</td>
                        </tr>
                        <tr>
                          <td>M.Sc</td>
                          <td>Bachelor’s degree in relevant stream with at least 55% marks from a recognized University/ Institute</td>
                          <td>IIT JAM</td>
                        </tr>
                        <tr>
                          <td>M.Des</td>
                          <td>B.Tech/ M.Sc degree with minimum 60% marks</td>
                          <td>CEED followed by Written Test and/or Interview</td>
                        </tr>
                        <tr>
                          <td>MBA</td>
                          <td>	
                            Bachelor’s degree in Engineering /Technology/ Architecture /Pharmacy / B.Sc.
                            <br />
                            Agri. Engg. (Minimum 4 year after 10+2) with at least 60% marks
                            <br />
                            OR
                            <br />
                            Master’s degree in any branch of Chemistry/ Computer Application, Physics/ Mathematics/ Statistics/ Environmental Science or Computational/ Information Sciences/ Electronics Sciences/ Agriculture/ Economics/ Commerce with minimum 60% marls
                            </td>
                          <td>CAT, Group Discussion and Interview Round</td>
                        </tr>
                        <tr>
                          <td>Ph.D</td>
                          <td>Master’s degree in Engineering/ Technology/ Sciences/ Humanities <br />or <br/>equivalent degree with at least 60% marks from a recognized Institute or University</td>
                          <td>GATE/ UGC-NET/ CSIR-NET/ ICAR or ICMR score
                            <br />
                              OR
                              <br />

                              Written Test and Interview
                              </td>
                        </tr>
                      </tbody>
                    </table>
                    </p>
                  </div>
                </div>
                
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Kanpur Ranking</span>
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
                         <td>Brics Ranking</td>
                          <td>25</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                          <td>Asian University Ranking</td>
                          <td>61</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                          <td>NIRF</td>
                          <td>5</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                          <td>OUTLOOK</td>
                          <td>5</td>
                          <td>2019</td>
                        </tr>
                      </tbody>
                    </table>
                    </p>
                  </div>
                </div>

                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Kanpur Placements</span>
                  </h2>
                  <div className="container">
                    <p>
                    IIT Kanpur has been the ‘first stop’ choice for a large number of organizations and industries. 
                    Over the years IIT Kanpur Placements has witnessed tremendous response from the top-notch companies in India. 
                    The students’ placement office (SPO) takes care of the placement process at the Institute. 
                    Several Guest lectures, Mock tests, pre-placement talks, seminars are organized by the Placement team 
                    before the candidates appear for their final interviews.
                    </p>
                  </div>
                  
                </div>
              </div>
              
              <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Kanpur Scholarship</span>
                  </h2>
                
                  
                  
                  
                  <div className="container">
                    <p>
                    <ul className="lister">
                      <li>Merit-cum-Means Scholarships for Undergraduate Students (full tuition waiver/ INR1000 pm)</li>
                      <li>Merit-cum-Means Scholarships given by alumni of IIT Kanpur (INR 2000 pm)</li>
                      <li>National Prizes for UG and PG Students & up to INR 400</li>
                      <li>Sports Scholarships and prizes (Up to INR 2000)</li>
                     </ul>
                    </p>
                 
              </div>
              
              </div>
              </div>
            </div>
          </div>
    );
  }
}
export default IIT_KANPUR;
