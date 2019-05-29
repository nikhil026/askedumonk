import React, { Component } from "react";
import { Link } from "react-router-dom";
class IIT_DELHI extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/col27802.jpeg"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Indian Institute of Technology Delhi</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Under Goverment of India
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 2
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
                      IIT Delhi is an Autonomous and Finest University was established in the year 1961.
                       IIT Delhi is one of the best institutes in the country, ranked 1st consecutively for 
                       3 years by Outlook which is one of the prestigious ranking magazines in India.
                        IIT Delhi conducts various programs including undergraduate, postgraduate and Ph.D. programs.
                         Admissions are taken through entrance exams such as JEE, GATE, and JAM. Indian Institute of Technology 
                         Delhi is situated at 325 acres land in Hauz Khas, South Delhi and is well connected by public transports.
                          It is just 10 km from Delhi airport and 14 km from New Delhi railway station.
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Delhi Courses</span>
                  </h2>
                  <div className="container">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        The list of Courses offered by IIT Delhi includes B.Tech, B.Tech+M.Tech
                        , M.Tech, M.Des, M.Sc, M.Sc (Research), MBA, PG Diploma and Ph.D. 
                        The institutes offer these courses in many specializations such as
                         Engineering, Technology, Management etc.
                      </span>
                    </p>
                    <p>
                    <img className="fit_center" src="/images/IITD 1.png" alt="course img" />
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Delhi Admission Criteria</span>
                  </h2>
                  <div className="container">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                      The institute offers the variety of undergraduate, postgraduate and doctoral courses in multiple disciplines. 
                      IIT Delhi Admission is done through national level entrance exam scores.
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
                          <td>B.Tech</td>
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
                    <span>IIT Delhi Reservation Criteria</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    <table class="thead-dark">
                      <thead>
                        <tr>
                          <th scope="col">Category</th>
                          <th scope="col">Reservation Criteria</th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr>
                          <td>SC</td>
                          <td>15%</td>
                        </tr>
                        <tr>
                          <td>ST</td>
                          <td>7.5%</td>
                        </tr>
                        <tr>
                          <td>OBC (Non-creamy layer)</td>
                          <td>27%</td>
                        </tr>
                       
                      </tbody>
                    </table>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Delhi Ranking</span>
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
                         <td>World University Ranking</td>
                          <td>172</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                         <td>Brics Ranking</td>
                          <td>18</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                          <td>Asian University Ranking</td>
                          <td>40</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                          <td>NIRF</td>
                          <td>2</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                          <td>OUTLOOK</td>
                          <td>1</td>
                          <td>2019</td>
                        </tr>
                      </tbody>
                    </table>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Delhi Ranking on Various Parameters by NIRF</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    <table class="thead-dark">
                      <thead>
                        <tr>
                          <th scope="col">Parameters</th>
                          <th scope="col">Marks</th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr>
                          <td>TLR (Teaching, Learning & Resources)</td>
                          <td>55.45  </td>
                        </tr>
                        <tr>
                          <td>RP (Research and Professional Practice)</td>
                          <td>68.48</td>
                        </tr>
                        <tr>
                          <td>GO (Graduation Outcome)</td>
                          <td>65.92</td>
                        </tr>
                        <tr>
                          <td>OI (Outreach and Inclusivity)</td>
                          <td>68.69</td>
                        </tr>
                        <tr>
                          <td>PR (Perception)</td>
                          <td>69.53</td>
                        </tr>
                      </tbody>
                    </table>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Delhi Placements</span>
                  </h2>
                  <div className="container">
                    <p>
                      <img className="fit_center" src="/images/IITD 3.png" alt="placement statictics" />
                    </p>
                  </div>
                </div>
              </div>
              <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Delhi Stream-wise Placement</span>
                  </h2>
                  <div className="container">
                    <p>
                      <img className="fit_center" src="/images/IITD 4.png" alt="stream wise placement statictics" />
                    </p>
                  </div>
              </div>
              <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIT Delhi Scholarship</span>
                  </h2>
                  <div className="container">
                    <p>
                    IIT Delhi provides different scholarships for undergraduate and postgraduate students. The institute offers the variety of scholarships under different categories.
                    </p>
                  </div>
                  <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading_res">
                    <span>IIT Delhi Undergraduate Scholarship</span>
                  </h2>
                  <div className="container">
                    <p>
                    <ul className="lister">
                      <li>Institute Free Studentship-U.G</li>
                      <li>Institute Merit-cum-Means (MCM) Scholarships</li>
                      <li>Institute Merit Prizes and Certi­ficates</li>
                      <li>Scholarship provision for SC/ST students</li>
                      <li>Donor Scholarship</li>
                      <li>IIT Delhi Alumni Sponsored Scholarships (Loan Scholarship)</li>
                    </ul>
                    </p>
                  </div>
              </div>
              <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading_res">
                    <span>IIT Delhi Postgraduate Scholarship</span>
                  </h2>
                  <div className="container">
                  <p>
                    <ul className="lister">
                      <li>For M.Sc Program - Merit-cum-Means (MCM) Scholarships</li>
                      <li>For M.Tech., M.S. (Research) and M.Des. Students</li>
                      <li>For Ph.D candidates </li>
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
export default IIT_DELHI;
