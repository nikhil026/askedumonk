import React, { Component } from "react";
import { Link } from "react-router-dom";
class DCivil extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  alt="Diploma in Civil"
                  src={require("../.././images/diploma-in-civil-engineering.civil-engineering.jpg")}
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Diploma in Civil Engineering</h3>
                <h6 class="locationclg">
                  <i class="fa fa-graduation-cap" />
                  Diploma in Engineering
                </h6>
                <h6 class="locationclg">
                  <i class="fa fa-book" />
                  Degree Type : Pcm, 12,{" "}
                </h6>
              </div>
              <div className="col-md-4 col-xs-12 mt-15 blockbtn">
                <Link to="/diploma" class="crssidebtn">
                  All Diploma in Engineering Courses
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
                  <div className="coursecontdes">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        Diploma in Civil Engineering is a Diploma level course.
                        Civil Engineering manages the design, development and
                        support of the physical and normally constructed
                        condition, including works like roads, bridges, canals,
                        dams and buildings. During the study, the understudy is
                        presented to different subjects of Civil Engineering,
                        for example, planning, drafting (both manual and
                        computer-aided), surveying, estimation costing,
                        construction technology, basics of the highway, railway,
                        bridge, airport, tunnel and harbour engineering. The
                        course additionally offers satisfactory presentation to
                        fortified solid structures, quality control, material
                        testing, development administration enterprise,
                        proficient practice and office systems. Understudies
                        likewise figure out a broad overview, building drawing,
                        water system connect drawing and auxiliary designing
                        illustration. Understudies are likewise presented to
                        programming like AUTOCAD, STAAD.
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-6" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Courses &amp; Eligibility</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <strong>
                        <span style={{ "font-size": "14px" }}>
                          The Eligibility Criteria for Pursuing Diploma in Civil
                          Engineering are as follows:
                        </span>
                      </strong>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Applicant should have pass in Class X or its
                          equivalent examination with 45% in each of the
                          subjects with Science and Mathematics student should
                          have studied English as one of the subjects in Class
                          X.
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Students who have passed 10+2 (vocational) pass
                          students/ITI pass can get admission in the second
                          year.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="section-7" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Course Curriculum</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <strong>
                        <span style={{ "font-size": "14px" }}>
                          Diploma in Civil Engineering is a 3 years
                          &nbsp;program. Course curriculum is on the basis of
                          various universities &amp; Institutes, that are as
                          follows:
                        </span>
                      </strong>
                    </p>
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "33.3333%",
                              textalign: "center",
                              verticalalign: "top",
                              backgroundcolor: "rgb(239, 239, 239)"
                            }}
                          >
                            <span style={{ color: "rgb(85, 57, 130)" }}>
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      fontsize: "18px",
                                      fontfamily: "Tahoma, Geneva, sans-serif"
                                    }}
                                  >
                                    Year I
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />

                            <span style={{ "font-size": "14px" }}>
                              <span style={{ "font-size": "14px" }}>
                                Applied Physics
                                <br />
                                Applied Chemistry
                                <br />
                                Applied Mechanics
                              </span>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Professional Communication
                              <br />
                              Applied Mathematics I<br />
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; Engineering Drawing &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp;
                              <br />
                              Computer Application for Engineering
                              <br />
                              Workshop Practice
                              <br />
                              Building Material
                            </span>
                          </td>
                          <td
                            style={{
                              width: "33.3333%",
                              verticalalign: "top",
                              textalign: "center"
                            }}
                          >
                            <span
                              style={{
                                color: "rgb(226, 8, 65)",
                                fontsize: "18px",
                                fontfamily: "Tahoma, Geneva, sans-serif"
                              }}
                            >
                              <strong>
                                <u>Year-II</u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              <br />
                              Thermal Engineering
                              <br />
                              Building const. &amp; Maintenance Engineering
                              <br />
                              Concrete Technology
                              <br />
                              Civil Engineering Drawing
                              <br />
                              Surveying
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Elec. Electrical &amp; Mechanical Engineering
                              <br />
                              Strength of Material
                              <br />
                              Hydraulics
                              <br />
                              Public Health Engineering
                            </span>
                          </td>
                          <td
                            style={{
                              width: "33.3333%",
                              verticalalign: "top",
                              textalign: " center",
                              backgroundcolor: " rgb(239, 239, 239)"
                            }}
                          >
                            <span style={{ color: "rgb(41, 105, 176)" }}>
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      fontfamily: "Tahoma, Geneva, sans-serif",
                                      fontsize: "18px"
                                    }}
                                  >
                                    Year III
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Surveying II
                              <br />
                              Civil Engineering Drawing II
                              <br />
                              Irrigation Engineering
                              <br />
                              Environmental Pollution &amp; Control
                              <br />
                              Earthquake Engineering
                              <br />
                              Civil Lab-III (RCC &amp; Highway)
                              <br />
                              Project Work
                              <br />
                              Field Exposure <br />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <br />
                    </p>
                  </div>
                </div>
                <div id="section-8" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Career Prospect</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <strong>
                        <span style={{ "font-size": "14px" }}>
                          After completing Diploma in Civil Engineering, one can
                          become:
                        </span>
                      </strong>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Assistant Manager
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Assistant Field Inspector
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Construction Site Assistant Supervisor
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Assist. Faculty Member
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Executive Engineer
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Project Engineer Co-ordinator
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Quality Control Engineer
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>Researcher</span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Chief Engineer
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Division Head
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Project Manager
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Senior Engineer
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Supervisory Engineer
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Professor and Teachers
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Independent Consultants
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Director of Public Works
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="section-9" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Pay &amp; Remuneration</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        A fresher holding a Diploma in Civil Engineering can
                        expect a{" "}
                        <strong>
                          salary between Rs. 15000 to Rs. 20000 every month
                        </strong>
                        . Paying amount depends on your overall performance and
                        any additional talents you obtain.&nbsp;
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        An information technology engineer with 5 to 9 years
                        experience will get more &nbsp;salary then a fresher
                        get. The more experience you have the more pay you will
                        get.
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-10" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Famous Personalities</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <strong>
                        <span style={{ "font-size": "14px" }}>
                          There are many Persons who have made a mark in the
                          field of Diploma In Civil Engineering. Some of the
                          Famous Personalities are as follows:
                        </span>
                      </strong>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          John Smeaton (8 June 1724 - 28 October 1792)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Gustave Eiffel (15 December 1832 - 27 December 1923)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Konrad Zuse (22 June 1910 - 18 December 1995)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Gustave Eiffel (15 December 1832 - 27 December 1923)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="section-11" className="detail-content coursedessside">
                  {" "}
                  <h2 className="heading-new">
                    <span>Top Colleges in India</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <strong>
                        In India there are many Universities and colleges that
                        offer Diploma in Civil Engineering, Some of the top
                        colleges offering the course are as follows:
                      </strong>
                    </p>
                    <br />
                    <table style={{ width: "98%", marginright: "calc(2%)" }}>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "49%",
                              backgroundColor: "rgb(239, 239, 239)",
                              verticalalign: "top",
                              textalign: "center"
                            }}
                          >
                            <span style={{ color: "rgb(85, 57, 130)" }}>
                              <u>
                                <span
                                  style={{
                                    "font-size": "18px",
                                    fontfamily: " Tahoma, Geneva, sans-serif"
                                  }}
                                >
                                  <strong>
                                    IIT's Which Provides Diploma In Engineering
                                    &nbsp;are
                                  </strong>
                                </span>
                              </u>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Indian Institute of Technology, Delhi
                              <br />
                              Indian Institute of Technology, Bombay
                              <br />
                              Indian Institute of Technology, Kharagpur
                              <br />
                              Indian Institute of Technology, Kanpur
                              <br />
                              Indian Institute of Technology, Madras
                              <br />
                              Indian Institute of Technology, Guwahati
                              <br />
                              Indian Institute of Technology, Roorkee
                              <br />
                              Institute of Technology, Benaras Hindu University,
                              Benaras.
                              <br />
                              Institute of Technology, Ropar
                              <br />
                              Indian Institute of Technology, Gandhi Nagar
                              <br />
                              Indian Institute of Technology, Bhubaneshwar
                              <br />
                              Indian Institute of Technology, Hyderabad
                              <br />
                              Indian Institute of Technology, Patna
                              <br />
                              Indian Institute of Technology, Mandi
                              <br />
                              Institute of Technology,Indore
                              <br />
                              Institute of Technology, Rajsthan
                            </span>
                            <br />
                            <br />
                          </td>
                          <td
                            style={{
                              width: "49%",
                              backgroundColor: "rgb(239, 239, 239)",
                              verticalalign: "top",
                              textalign: "center"
                            }}
                          >
                            <span style={{ color: "rgb(85, 57, 130)" }}>
                              <u>
                                <span
                                  style={{
                                    "font-size": "18px",
                                    fontfamily: " Tahoma, Geneva, sans-serif"
                                  }}
                                >
                                  <strong>
                                    NIT's Which Provides Diploma In Engineering
                                    are
                                  </strong>
                                </span>
                              </u>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              NIT Warangal
                              <br />
                              NIT Tiruchirappalli
                              <br />
                              MANIT Bhopal
                              <br />
                              MNIT Jaipur
                              <br />
                              MNNIT Allahabad
                              <br />
                              NIT Jamshedpur
                              <br />
                              SVNIT Surat
                              <br />
                              VNIT Nagpur
                              <br />
                              NIT Kurukshetra
                              <br />
                              NIT Calicut
                              <br />
                              Dr. B. R. Ambedkar National Institute of
                              Technology Jalandhar
                              <br />
                              NIT Rourkela
                              <br />
                              NIT Surathkal
                              <br />
                              NIT Patna
                              <br />
                              NIT Srinagar
                              <br />
                              NIT Hamirpur
                              <br />
                              &nbsp;NIT Delhi
                              <br />
                              NIT Arunachal Pradesh
                              <br />
                              NIT Agartala
                              <br />
                              NIT Durgapur
                              <br />
                              NIT Puducherry
                              <br />
                              NIT Manipur
                              <br />
                              NIT Meghalaya
                              <br />
                              NIT Mizoram
                              <br />
                              NIT Nagaland
                              <br />
                              &nbsp;NIT Sikkim
                              <br />
                              NIT Silchar
                              <br />
                              NIT Uttarakhand
                            </span>
                            <br />
                            <br />
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <p />
                    <br />
                  </div>
                </div>{" "}
                <div id="section-15" class="detail-content coursedessside">
                  <h2 class="heading-new">
                    <span>More Information</span>
                  </h2>
                  <div class="coursecontdes">
                    <p>
                      <strong>
                        <span style={{ "font-size": "14px" }}>
                          After completing Diploma in Civil Engineering you can
                          become
                        </span>
                      </strong>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>Engineer</span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Civil Engineer
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Land Surveyor
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  id="section-recruit"
                  className="detail-conten recruiterscrs clearfix coursedessside"
                >
                  <h2 className="heading-new">
                    <span>Top Recruiters</span>
                  </h2>
                  <div class="col-md-3">
                    <Link
                      to="https://www.ascent-online.com/"
                      target="_blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/ascent-consulting.jpg"
                        alt=""
                      />
                      <p>Ascent Consulting</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="http://pac.build/"
                      target="_blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/pac-constructions.jpg"
                        alt=""
                      />
                      <p>PAC Constructions</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="http://www.contromet.com/"
                      target="_blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/contromet-.jpg"
                        alt=""
                      />
                      <p>Contromet </p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.silverfalcons.co.za/"
                      target="_blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/silver-falkon.jpg"
                        alt=""
                      />
                      <p>Silver Falkon</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="http://www.blackcat.qa/"
                      target="_blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/black-cat-engineering.jpg"
                        alt=""
                      />
                      <p>Black Cat Engineering</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="http://www.rallsconstruction.com/"
                      target="_blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/ralls-contracting.jpg"
                        alt=""
                      />
                      <p>Ralls Contracting</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.emaar.com/en/"
                      target="_blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/emmar-properties.jpg"
                        alt=""
                      />
                      <p>Emmar Properties</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="http://www.hccindia.com/"
                      target="_blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/hindustan-construction-company-.jpg"
                        alt=""
                      />
                      <p>Hindustan Construction Company </p>
                    </Link>
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
export default DCivil;
