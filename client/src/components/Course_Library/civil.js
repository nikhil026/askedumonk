import React, { Component } from "react";
import { Link } from "react-router-dom";
class Civil extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  alt="Civil engineering"
                  src={require("../.././images/civil-engineering.civil-engineering.jpg")}
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Civil Engineering</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Engineering
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Degree Type : Pcm, 12,
                </h6>
              </div>
              <div className="col-md-4 col-xs-12 mt-15 blockbtn">
                <Link to="/Engineering" className="crssidebtn">
                  All Engineering Courses
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
                        Bachelor of Technology in{" "}
                        <strong>Civil Engineering</strong> is an undergraduate
                        Engineering course.
                        <strong>&nbsp;Civil engineering</strong> is a
                        professional engineering program that deals with the
                        design and making plans, production, supervision,
                        excellent control and upkeep of bodily systems,
                        including homes, roads, bridges, dams, canals, seaports,
                        electricity plants, and airports. Specializations
                        consist of shape, transportation, geotechnical and
                        geo-environmental, and water resources engineering.
                        Employers include Municipal Bodies, The Defence Forces,
                        National Highway Authority of India, government
                        improvement hands like the DDA and Noida Authority,
                        BHEL, Larsen &amp; Toubro, and so forth.
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        A career as a <strong>Civil Engineer</strong> opens up a
                        big world of imagination and goals for the incumbent.
                        The field of <strong>civil engineering</strong> is so
                        enormous that it will restrict oneself to any specific
                        discipline and excel while not having a right expertise
                        in other related fields.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                  </div>
                </div>
                <div id="section-6" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Courses &amp; Eligibility</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        The eligibility for pursuing B. Tech in Civil
                        Engineering is to pass class{" "}
                        <strong>12th with physics, chemistry, and maths</strong>{" "}
                        as the major subjects and clearing the entrance
                        examination. The AMIE (Associate Memberships of the
                        Institution of Engineers) offers guides, which might be
                        also equal to BE and B.Tech.
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        <strong>Four years</strong> course in engineering from
                        an IIT will <strong>cost about 2 lakhs</strong>. There
                        are a number of scholarships, fees waivers, and loans to
                        be had for folks that are unable to fund the education.
                        &nbsp;The costs of private colleges start from about
                        40,000 per year to approximately 70,000 in a year. It is
                        necessary to give an entrance exam for IIT's, you must
                        give
                        <Link
                          to="http://careerpotli.com/exam-details/jee-mains"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          &nbsp;JEE Mains
                        </Link>
                        .&nbsp;
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-7" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Course Curriculum</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      This is a <strong>4 years</strong> long Undergraduate
                      level Degree program. The <strong>4 year's</strong>{" "}
                      duration is divided into <strong>8 semesters</strong>,
                      each lasting a period of <strong>6 months</strong>.
                      Students will have to deal with separate sets of
                      theoretical subjects as well as practical sessions. Topics
                      covered under each semester are as follows:
                    </p>
                    <table style={{ width: "96%", marginright: "calc(4%)" }}>
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
                                    Semester &nbsp;I
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Engineering &nbsp; Chemistry
                              <br />
                              Engineering &nbsp; Maths I<br />
                              Basic &nbsp; Electronics
                              <br />
                              Material &nbsp; Science
                              <br />
                              Engineering &nbsp; Graphics
                              <br />
                              Basic &nbsp; Thermodynamics
                              <br />
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
                                <u>Semester-II</u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              <br />
                              Engineering &nbsp; Maths II
                              <br />
                              Engineering &nbsp; Physics
                              <br />
                              Basic Electrical Engg
                              <br />
                              Engineering &nbsp; Mechanics
                              <br />
                              Communication &nbsp; Skills
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
                                    Semester-III
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Engineering &nbsp; Economics
                              <br />
                              Strength of &nbsp; Material
                              <br />
                              Fluid Mechanics
                              <br />
                              Civil Engineering Materials and Building
                              Construction
                              <br />
                              Differential Equations, Probability, and
                              Statistics
                              <br />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <br />
                    </p>
                    <table style={{ width: " 96%", marginright: "calc(4%)" }}>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: " 33.3333%",
                              verticalalign: " top",
                              textalign: "center"
                            }}
                          >
                            <span style={{ color: " rgb(133, 20, 75)" }}>
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      fontfamily:
                                        "                                          Tahoma, Geneva, sans-serif",
                                      fontsize: " 18px"
                                    }}
                                  >
                                    Semester-IV
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Theory of &nbsp;Structure
                              <br />
                              Numerical &nbsp;Analysis
                              <br />
                              Surveying
                              <br />
                              Soil Mechanics
                              <br />
                              Engineering &nbsp;Geology
                              <br />
                            </span>
                          </td>
                          <td
                            style={{
                              width: " 33.3333%",
                              verticalalign: " top",
                              textalign: "center ",
                              backgroundcolor: "rgb(239, 239, 239)"
                            }}
                          >
                            <span style={{ color: " rgb(0, 31, 63)" }}>
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      fontfamily:
                                        "                                      Tahoma, Geneva, sans-serif",
                                      fontsize: "18px"
                                    }}
                                  >
                                    Semester-V
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Open elective I<br />
                              Dynamics of Behavioural &nbsp; Science in &nbsp;
                              Industries
                              <br />
                              Transportation &nbsp;Engg. I<br />
                              Survey Camp
                              <br />
                              Production Technology I<br />
                            </span>
                          </td>
                          <td
                            style={{
                              width: " 33.3333%",
                              verticalalign: " top",
                              textalign: "center"
                            }}
                          >
                            <span style={{ color: " rgb(255, 127, 15)" }}>
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      fontfamily:
                                        "                                        Tahoma, Geneva, sans-serif",
                                      fontsize: " 18px"
                                    }}
                                  >
                                    Semester-VI
                                    <br />
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Steel &nbsp;Structure Design
                              <br />
                              Environment &nbsp;Engg. I<br />
                              Irrigation &nbsp;Engg. and Hydrology
                              <br />
                              Transportation &nbsp; Engg. II
                              <br />
                              Structural &nbsp;Drawing
                              <br />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <br />
                    </p>
                    <table style={{ width: " 96%", marginright: "calc(4%)" }}>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: " 33.3333%",
                              verticalalign: " top",
                              textalign: "center"
                            }}
                          >
                            <span style={{ color: " rgb(133, 20, 75)" }}>
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      fontfamily:
                                        "                                          Tahoma, Geneva, sans-serif",
                                      fontsize: " 18px"
                                    }}
                                  >
                                    Semester-VII
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Foundation &nbsp; Engineering
                              <br />
                              Departmental &nbsp;Elective I<br />
                              Solid Wastes and Environmental &nbsp; Pollution
                              <br />
                              Project Management and Quantity Surveying
                              <br />
                              Industrial &nbsp; training Viva
                              <br />
                              Major Project &nbsp; 1
                              <br />
                            </span>
                          </td>
                          <td
                            style={{
                              width: " 33.3333%",
                              verticalalign: " top",
                              textalign: "center ",
                              backgroundcolor: "rgb(239, 239, 239)"
                            }}
                          >
                            <span style={{ color: " rgb(0, 31, 63)" }}>
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      fontfamily:
                                        "                                      Tahoma, Geneva, sans-serif",
                                      fontsize: "18px"
                                    }}
                                  >
                                    Semester-VIII
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Departmental &nbsp;Elective II
                              <br />
                              Departmental &nbsp; Elective III
                              <br />
                              Departmental &nbsp; Elective IV
                              <br />
                              Design of &nbsp; Hydraulic Structure
                              <br />
                              Major Project &nbsp; II
                              <br />
                              <br />
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
                      <span style={{ "font-size": "14px" }}>
                        Job opportunities are available for{" "}
                        <strong>B.E./B.Tech. Civil Engineering</strong>{" "}
                        graduates in <strong>Governments</strong> well as{" "}
                        <strong>Private sectors</strong>.
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        Talking about the private sector, main recruiters are
                        <strong>&nbsp;Construction firms</strong>. One can take
                        up following job position in such firms-
                      </span>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Project Manager
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Assistant Project Manager
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Site Engineer
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Civil Engineer
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Assistant Civil Engineer
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Purchase and Quality control Executive
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Planning and Design Officer
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
                        A fresher holding a{" "}
                        <strong>B.Tech Civil Engineering degree</strong> can
                        expect a{" "}
                        <strong>
                          salary between Rs.25000 - Rs.40000 for every month
                        </strong>
                        . Paying amount depends on your overall performance and
                        any additional talents you obtain.&nbsp;
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        <strong>Civil Engineer&nbsp;</strong>with 5 to 9 years
                        experience&nbsp;
                      </span>
                      <strong>
                        <span style={{ "font-size": "14px" }}>
                          earning will be Rs.10 Lakhs per Annum.
                        </span>
                      </strong>
                    </p>
                  </div>
                </div>
                <div id="section-10" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Famous Personalities</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        Famous personalities who have done{" "}
                        <span style={{ "font-size": "14px" }}>
                          <strong>Civil Engineering</strong>
                        </span>{" "}
                        are as follows:
                      </span>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Henry Petroski, 6 February 1942 (age 76 years)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          E. Shreedharan,12 June 1932 &nbsp;(age 86 years)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          George Stephenson ( 9 June 1781 - &nbsp;12 August
                          1848)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Thomas Telford (9 August 1757 - 2 September 1834)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          John Monash (27 June 1865 - 8 October 1931)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          M. Visvesvaraya (15 September 1860 - 14 April 1962)
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
                        <span style={{ "font-size": "14px" }}>
                          In India, there are many Universities and colleges
                          that offer B.Tech./ B.E. and M.Tech. Some of the top
                          colleges offering the course are as follows:
                        </span>
                      </strong>
                    </p>
                    <br />
                    <table style={{ width: "98%", marginright: "calc(2%)" }}>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "50%",
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
                                    IIT's Which Provides Civil Engineering
                                    Course are
                                  </strong>
                                </span>
                              </u>
                            </span>
                            <div data-empty="true">
                              <br />
                            </div>
                            <div data-empty="true">
                              <span style={{ "font-size": "14px" }}>
                                Indian Institute of Technology (BHU) Varanasi
                              </span>
                            </div>
                            <span style={{ "font-size": "14px" }}>
                              Indian Institute of Technology (ISM) Dhanbad
                              <br />
                              Indian Institute of Technology Bhilai
                              <br />
                              Indian Institute of Technology Bhubaneswar
                              <br />
                              Indian Institute of Technology Bombay
                              <br />
                              Indian Institute of Technology Delhi
                              <br />
                              Indian Institute of Technology Dharwad
                              <br />
                              Indian Institute of Technology Gandhinagar
                              <br />
                              Indian Institute of Technology Goa
                              <br />
                              Indian Institute of Technology Hyderabad
                              <br />
                              Indian Institute of Technology Indore
                              <br />
                              Indian Institute of Technology Jammu
                              <br />
                              Indian Institute of Technology Jodhpur
                              <br />
                              Indian Institute of Technology Kanpur
                              <br />
                              Indian Institute of Technology Kharagpur
                              <br />
                              Indian Institute of Technology Madras
                              <br />
                              Indian Institute of Technology Mandi
                              <br />
                              Indian Institute of Technology Palakkad
                              <br />
                              Indian Institute of Technology Patna
                              <br />
                              Indian Institute of Technology Roorkee
                              <br />
                              Indian Institute of Technology Ropar
                              <br />
                              Indian Institute of Technology Tirupati
                            </span>
                            <div data-empty="true">
                              <br />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              verticalalign: "top",
                              textalign: " center"
                            }}
                          >
                            <span
                              style={{
                                color: "rgb(226, 8, 65)",
                                "font-size": "18px",
                                "font-family": "Tahoma, Geneva, sans-serif"
                              }}
                            >
                              <u>
                                <strong>
                                  NIT's Which Provides Civil Engineering Course
                                  are
                                </strong>
                              </u>
                            </span>
                            <div data-empty="true">
                              <br />
                            </div>
                            <span style={{ "font-size": "14px" }}>
                              Malaviya National Institute of Technology Jaipur
                              <br />
                              Maulana Azad National Institute of Technology
                              Bhopal
                              <br />
                              Motilal Nehru National Institute of Technology,
                              Allahabad
                              <br />
                              National Institute of Technology, Agartala
                              <br />
                              National Institute of Technology, Arunachal
                              Pradesh
                              <br />
                              National Institute of Technology, Durgapur
                              <br />
                              National Institute of Technology, Hamirpur
                              <br />
                              National Institute of Technology Patna
                              <br />
                              National Institute of Technology Raipur
                              <br />
                              National Institute of Technology Kurukshetra
                              <br />
                              National Institute of Technology, Manipur
                              <br />
                              National Institute of Technology, Rourkela
                              <br />
                              National Institute of Technology, Silchar
                              <br />
                              National Institute of Technology, Srinagar
                              <br />
                              Sardar Vallabhbhai National Institute of
                              Technology, Surat
                            </span>
                            <div data-empty="true">
                              <br />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <strong>
                        <span
                          style={{
                            "font-size": "18px",
                            "font-family": "Tahoma, Geneva, sans-serif"
                          }}
                        >
                          OTHER REPUTED COLLEGES
                        </span>
                      </strong>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong />
                    </p>
                    <ul>
                      <li dir="ltr">
                        <strong>Indian School of Mines</strong>
                      </li>
                      <li dir="ltr">
                        <strong>Jadavpur University</strong>
                      </li>
                      <li dir="ltr">
                        <strong>Motilal Nehru Institute of Technology</strong>
                      </li>
                      <li dir="ltr">
                        <strong>PEC University of Technology,Chandigarh</strong>
                      </li>
                      <li dir="ltr">
                        <strong>
                          Bengal Engineering and Science University&nbsp;
                        </strong>
                      </li>
                      <li dir="ltr">
                        <strong>Thapar University</strong>
                      </li>
                      <li dir="ltr">
                        <strong>College of Engineering Pune</strong>
                      </li>
                      <li dir="ltr">
                        <strong>
                          Veermata Jijabai Technological Institute
                        </strong>
                      </li>
                      <li dir="ltr">
                        <strong>College of Engineering, Trivandrum</strong>
                      </li>
                    </ul>
                    <p />
                    <br />
                  </div>
                </div>{" "}
                <div
                  id="section-recruit"
                  className="detail-conten recruiterscrs clearfix coursedessside"
                >
                  <h2 className="heading-new">
                    <span>Top Recruiters</span>
                  </h2>
                  <div class="col-md-3">
                    <Link
                      rel=""
                      to="http://www.larsentoubro.com/"
                      target="_blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/larsen--toubro-ltd.jpg"
                        alt=""
                      />
                      <p>Larsen &amp; Toubro Ltd.</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      rel=""
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
                  <div class="col-md-3">
                    <Link
                      rel=""
                      to="http://www.gammonindia.com/home/gammon-india.htm"
                      target="_blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/gammon-india-ltd.jpg"
                        alt=""
                      />
                      <p>Gammon India Ltd.</p>
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
export default Civil;
