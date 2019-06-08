import React, { Component } from "react";
import { Link } from "react-router-dom";
class IIT_BHU extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/iitbhu.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Indian Institute of Technology BHU</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Under Goverment of India
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 11
                </h6>
              </div>
              <div className="col-md-4 col-xs-12 mt-15 blockbtn">
                <Link to="/Engineering" className="crssidebtn">
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
                      Indian Institute of Technology (Banaras Hindu University) Varanasi (abbreviated IIT (BHU)) is a public engineering institution located in Varanasi, Uttar Pradesh.
                       Founded in 1919 as the Banaras Engineering College, it became the Institute of Technology, Banaras Hindu University in 1968.
                        IIT (BHU) Varanasi has 14 departments and three inter-disciplinary schools. Admission to IIT (BHU) is entirely based on the ranks obtained in JEE Advanced, 
                        GATE or GPAT. IIT (BHU) has collaborated with University of Cambridge (UK), University of Oxford (UK), University of Sheffield (UK).
                       It provides Undergraduate, Postgraduate and Doctoral programs in Engineering and Pharmacy
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT BHU Courses</span>
                  </h2>
                  <div className="container">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                      IIT BHU offers Undergraduate, Postgraduate and 
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
                    <span>IIT BHU Admission Criteria</span>
                  </h2>
                  <div className="container">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                      The institute offers the variety of undergraduate, postgraduate and doctoral courses in multiple disciplines. 
                      IIT BHU Admission is done through national level entrance exam scores.
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
                    <span>IIT BHU Ranking</span>
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
                          <td>11</td>
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
                    <span>IIT BHU Scholarship</span>
                  </h2> 
                  <div className="container">
                    <p>
                    IIT (BHU) offers Merit-cum-Means scholarships to 25% undergraduate students. Besides, there are several endowment scholarships 
                    offered by the Institute. All the students (non-sponsored)
                     admitted to M.Tech./ M.Pharm. programs are provided financial Assistance equivalent to the Junior Research Fellowships.
                    </p>
                  </div>
                  <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading_res">
                    <span>International Scholarship</span>
                  </h2>
                  <div className="container">
                    <p>
                    <ul className="lister">
                      <li>Chinese Govt. Scholarship</li>
                      <li>Korean Govt. Scholarship</li>
                      <li>Japanese Govt Scholarship</li>
                    </ul>
                    </p>
                  </div>
              </div>
              <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading_res">
                    <span>B.Tech/ B.Pharm/ IDD and IMD</span>
                  </h2>
                  <div className="container">
                    <p>
                    <ul className="lister">
                      <li>Merit-cum-Means Scholarship</li>
                      <li>Top Class education scheme for SC students</li>
                      <li>National Fellowship and Scholarship for Higher Education of ST Students - Scholarship (Formally Rajiv Gandhi National Fellowship for ST Students)</li>
                      <li>State Scholarships</li>
                      <li>Endowment Scholarships</li>
                    </ul>
                    </p>
                  </div>
              </div>
              </div>
              </div>
            </div>
            </div>
            </div>
      );
  }
}
export default IIT_BHU;
