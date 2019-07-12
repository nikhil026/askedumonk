import React, { Component } from "react";
import { Link } from "react-router-dom";
class Computer extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  alt="Computer engineering"
                  src={require("../.././images/computer-science-engineering.computer-science-engineering.jpg")}
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Computer Engineering</h3>
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
                        <strong>
                          Bachelor of Technology in Computer Science and
                          Engineering
                        </strong>{" "}
                        is an undergraduate degree. It manages the field of
                        science or innovation and spreads one of the primary
                        subjects Computer Science and Engineering. It is the
                        study of the hypothetical establishments of data and
                        calculation and of reasonable procedures for their
                        execution and application in computer systems. The{" "}
                        <strong>Bachelor of Technology degree programs</strong>{" "}
                        shall extend over a period of eight consecutive
                        semesters spread more than four academic years – two
                        semesters constituting one academic year. The length of
                        every semester will typically be fifteen weeks barring
                        examinations. The course is very valuable and important
                        one that offers a lot of jobs as it is career orienting
                        in nature.
                      </span>
                    </p>
                    <p dir="ltr">
                      <span style={{ "font-size": "14px" }}>
                        <strong>Computer Science Engineering (CSE)</strong> is
                        an engineering subject totally related to computers. It
                        involves variety of computer related topic. CSE focuses
                        on the basic elements of computer programming and also
                        networking. There are two types of computer
                        engineers:&nbsp;
                      </span>
                    </p>
                    <ul>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Hardware Engineers
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Software Engineers
                        </span>
                      </li>
                    </ul>
                    <p dir="ltr">
                      <span style={{ "font-size": "14px" }}>
                        Hardware engineers build laptops, PCs or tablets and
                        also develop systems which are computer based. Software
                        engineers design the software program. Students pursuing{" "}
                        <strong>computer science</strong> courses will get
                        knowledge of both.
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
                        The eligibility for pursuing &nbsp;
                        <strong>Computer Science Engineering</strong> is to pass
                        12th with physics, chemistry and maths as the main
                        subjects. There is another option to get entrance to the
                        IIT's is through{" "}
                        <Link
                          to="/jeemain"
                          rel="noopener noreferrer"
                          target="-blank"
                        >
                          JEE (Joint Enterance Exam)
                        </Link>
                        .
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        Four years path in engineering from an IIT will cost
                        about<strong>&nbsp;INR 2 to 10 Lacs.</strong> There are
                        some of scholarships, fee waivers and loans available
                        for individuals who are not able to fund the schooling.
                        aside from this, in maximum colleges the scholars can
                        earn a small quantity even as working on a studies
                        assignment with the professors in their
                        university.&nbsp;
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
                      <span style={{ "font-size": "14px" }}>
                        This is a <strong>4 years</strong> long Undergraduate
                        Level Degree program. The 4 years duration is divided
                        into 8 semesters, with each semester lasting a period of{" "}
                        <strong>6 months</strong>. Topics covered under each
                        semester are as follows:
                      </span>
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
                              Mathematics &nbsp; I<br />
                              Computers &nbsp; and Information Technology
                              <br />
                              Network &nbsp; Theory
                              <br />
                              Engineering &nbsp; Drawing Practice
                              <br />
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
                              Semiconductor &nbsp; Devices and Circuits Lab
                              <br />
                              English
                              <br />
                              Applied &nbsp; Physics
                              <br />C Data Structures
                              <br />
                              Semiconductor &nbsp; Devices and circuits
                              <br />
                              Computer &nbsp; Programming Lab
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
                              Mathematics &nbsp; II
                              <br />
                              Data Processing and File Organization
                              <br />
                              Switching theory and Logic design
                              <br />
                              COBOL Lab
                              <br />
                              Discrete &nbsp; Structures and Graph Theory
                              <br />
                              Linear and Digital ICs Applications
                              <br />
                              Managerial Economics and Accountancy
                              <br />
                              IC &nbsp; Applications Lab
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
                              Probability and Statistics
                              <br />
                              Computer Organization
                              <br />
                              Operating Systems
                              <br />
                              Operating Systems Lab
                              <br />
                              Electrical Technology
                              <br />
                              Design and Analysis of Algorithms
                              <br />
                              Object Oriented Programming
                              <br />
                              Object Oriented Programming Lab
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
                              Interfacing through Microprocessors
                              <br />
                              Data Communications
                              <br />
                              Principles of Programming Languages
                              <br />
                              Interfacing through microprocessor lab
                              <br />
                              Operations Research
                              <br />
                              Theory of Computation
                              <br />
                              System Programming
                              <br />
                              Systems Programming LabI
                              <br />
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
                              Management Science
                              <br />
                              Computer Networks
                              <br />
                              Irrigation &nbsp;Engg. and Hydrology
                              <br />
                              Artificial Intelligence
                              <br />
                              Database management Systems
                              <br />
                              DBMS Lab <br />
                              Language &nbsp; Processor Lab
                              <br />
                              Computer &nbsp; graphics
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
                              Software Engineering
                              <br />
                              Visual Programming TechniquesI
                              <br />
                              (Elective I) Advanced Computer Architecture &nbsp;
                              <br />
                              (Elective I) Fault Tolerant Systems
                              <br />
                              (Elective II) Neural Networks
                              <br />
                              (Elective II) Digital Speech and Image processing
                              <br />
                              <br />
                              Java Lab
                              <br />
                              Visual Programming Lab
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
                              (Elective III) Robotics
                              <br />
                              (Elective III) Simulation and Modelling
                              <br />
                              (Elective IV) Advanced Databases.
                              <br />
                              (Elective IV) Data Mining and Ware Housing
                              <br />
                              Major Project &nbsp;
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
                    <p dir="ltr">
                      <span style={{ "font-size": "14px" }}>
                        Increasing number of software companies and IT hubs will
                        result in an increasing demand for Computer Science
                        Engineering &nbsp;(CSE) experts.
                      </span>
                    </p>
                    <p dir="ltr">
                      <span style={{ "font-size": "14px" }}>
                        <strong>Computer Science Engineer </strong>&nbsp;can get
                        many <strong>job opportunities</strong> like:
                      </span>
                    </p>
                    <ul>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Applications developer
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Data analyst
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Games developer
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Information systems manager
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          IT consultant
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Multimedia programmer
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          SEO specialist
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Software engineer
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Systems analyst
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Web designer
                        </span>
                      </li>
                      <li dir="ltr">
                        <span style={{ "font-size": "14px" }}>
                          Web developer
                        </span>
                      </li>
                    </ul>
                    <p />
                  </div>
                </div>
                <div id="section-9" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Pay &amp; Remuneration</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        Starting salary (depends on different factors) is
                        generally between{" "}
                        <strong>Rs. 35,000 - 50,000/- per month</strong> , in
                        case of Graduates. Paying amount depends on your overall
                        performance and any additional talents you obtain.&nbsp;
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        <strong>Computer science engineer</strong> with 7 to 9
                        years experience will get more than a fresher get. The
                        more experience you have the more pay you will get.
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
                          field of Computer Science Engineering. Some of the
                          Famous Personalities are:
                        </span>
                      </strong>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Bill Gates, 28 October 1955 (age 62 years)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Steve Job (24 February 1955 - 5 October 2011)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Tim Berners-Lee, 8 June 1955 (age 63 years)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Brendan Eich, 4 July 1961 (age 57 years)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Bill Joy, 8 November 1954 (age 63 years)
                        </span>
                        <strong>
                          <br />
                        </strong>
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
                    <table style={{ width: "100%" }}>
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
                                    IIT's Which Provides Computer Engineering
                                    Course are
                                  </strong>
                                </span>
                              </u>
                            </span>

                            <span style={{ "font-size": "14px" }}>
                              <br />
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
                                  NIT's Which Provides Computer Engineering
                                  Course are
                                </strong>
                              </u>
                            </span>
                            <div data-empty="true">
                              <br />
                            </div>
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
                            <div data-empty="true">
                              <br />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <br />
                    </p>
                    <p>SOME OTHER REPUTED COLLEGES :</p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong />
                    </p>
                    <p dir="ltr">
                      <strong>1. BITS Pilani</strong>
                    </p>
                    <p dir="ltr">
                      <strong>2. NIT Trichy</strong>
                    </p>
                    <p dir="ltr">
                      <strong>3. IIIT Hyderabad</strong>
                    </p>
                    <p dir="ltr">
                      <strong>4. IIIT Allahabad&nbsp;</strong>
                    </p>
                    <p dir="ltr">
                      <strong>5. DTU</strong>
                    </p>
                    <p dir="ltr">
                      <strong>6. NIT Surathkal&nbsp;</strong>
                    </p>
                    <p dir="ltr">
                      <strong>7. NIT Allahabad</strong>
                    </p>
                    <p dir="ltr">
                      <strong>8. BITS Goa</strong>
                    </p>
                    <p dir="ltr">
                      <strong>9. NSIT Delhi</strong>
                    </p>
                    <p dir="ltr">
                      <strong>10. BIT Mesra</strong>
                    </p>
                    <p />
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                  </div>
                </div>{" "}
                <div id="section-12" class="detail-content coursedessside">
                  <h2 class="heading-new">
                    <span>Other Details</span>
                  </h2>
                  <div class="coursecontdes">
                    <p>
                      <strong>
                        <span style={{ "font-size": "14px" }}>
                          Advance courses that can be applied for, after the
                          course of
                        </span>
                      </strong>
                      <span style={{ "font-size": "14px" }}>
                        <strong>
                          <strong>
                            &nbsp;Computer &nbsp;Science Engineering.
                          </strong>
                        </strong>
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        After the course of{" "}
                        <strong>Computer Science Engineering,&nbsp;</strong>one
                        can apply for the following advance courses:
                      </span>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>
                            M.Tech. in Computer Science and Engineering
                          </strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>
                            M.Phil. in Computer Science and Engineering
                          </strong>
                        </span>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Ph.D. &nbsp;in Computer Science and Engineering
                          </span>
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="section-15" class="detail-content coursedessside">
                  <h2 class="heading-new">
                    <span>More Information</span>
                  </h2>
                  <div class="coursecontdes">
                    <p>
                      <strong>
                        <span style={{ "font-size": "14px" }}>
                          For whom&nbsp;
                        </span>
                      </strong>
                      <span style={{ "font-size": "14px" }}>
                        <strong>
                          B.Tech. Computer Science and Engineering Course
                        </strong>
                        <strong>&nbsp;Suitable ??</strong>
                      </span>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Who know about programming and computer
                          equipment/programming are appropriate for it.
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Competitors have good analytical skills, an eye for
                          detail; managed consideration and the capacity to
                          tackle issues likewise is good match for it.
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Who have good communication skills, be capable in
                          breaking down and assessing information and have the
                          aptitude to decide, to work in groups and to express
                          their thoughts both orally and in writing also are
                          suitable.
                          <br />
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          The individuals who will go for teaching fields at
                          higher degree level both college and university level
                          aiming to become lecturer/professor is also good suit
                          for it.
                        </span>
                      </li>
                    </ul>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        <br />
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        <strong>What are the benefits of&nbsp;</strong>
                        <strong>
                          B.Tech. Computer Science and Engineering
                        </strong>
                        <strong>&nbsp;??</strong>
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        The benefits of{" "}
                        <strong>
                          Diploma in B.Tech. Computer Science and
                          Engineering&nbsp;
                        </strong>
                        course are:
                      </span>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Computer engineers create computer programs for
                          enterprises and their work includes the plan,
                          advancement and support of programming. They are
                          engaged in analysing problems for solutions, planning
                          and testing, using advanced communications or
                          multi-media gear or working in groups for item
                          advancement. Accordingly, it multi-valuable for them.
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Applicant can likewise discover job opportunities in
                          an assortment of situations in college, research,
                          private and public enterprises, government
                          departments, business associations, business
                          associations the manufacturing sector and so on.
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
                      to="https://www.flipkart.com/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/flipkart.jpg"
                        alt=""
                      />
                      <p>Flipkart</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.microsoft.com/en-in"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/microsoft-corporation.jpg"
                        alt=""
                      />
                      <p>Microsoft Corporation</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.oracle.com/in/index.html"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/oracle-corporation.jpg"
                        alt=""
                      />
                      <p>Oracle Corporation</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www2.deloitte.com/us/en.html"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/deloitte.jpg"
                        alt=""
                      />
                      <p>Deloitte</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.ibm.com/in-en/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/ibm.jpg"
                        alt=""
                      />
                      <p>IBM</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="http://www.intel.com/http://www.nvidia.com/content/global/global.php"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/intel.jpg"
                        alt=""
                      />
                      <p>Intel</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="http://www1.ap.dell.com/content/default.aspx?c=in&amp;l=en&amp;s=gen&amp;~ck=cr"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/dell.jpg"
                        alt=""
                      />
                      <p>Dell</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.cognizant.com/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/cognizant.jpg"
                        alt=""
                      />
                      <p>Cognizant</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://in.yahoo.com/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/yahoo.png"
                        alt=""
                      />
                      <p>Yahoo</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.google.com/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/google.jpg"
                        alt=""
                      />
                      <p>Google</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.infosys.com/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/infosys.jpg"
                        alt=""
                      />
                      <p>Infosys</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.hcltech.com/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/hcl-technologies.jpg"
                        alt=""
                      />
                      <p>HCL Technologies</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.tcs.com/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/tcs.png"
                        alt=""
                      />
                      <p>Tata Consultancy Services Ltd.</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.amazon.in/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/amazon.jpg"
                        alt=""
                      />
                      <p>Amazon India</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.asus.com/in/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/asus.jpg"
                        alt=""
                      />
                      <p>ASUS</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.techmahindra.com"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/tech-mahindra.jpg"
                        alt=""
                      />
                      <p>Tech Mahindra</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.wipro.com/"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/wipro-technologies-limited.jpg"
                        alt=""
                      />
                      <p>Wipro Technologies Limited</p>
                    </Link>
                  </div>
                  <div class="col-md-3">
                    <Link
                      to="https://www.accenture.com"
                      target="-blank"
                      class="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/accenture.jpg"
                        alt=""
                      />
                      <p>Accenture</p>
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
export default Computer;
