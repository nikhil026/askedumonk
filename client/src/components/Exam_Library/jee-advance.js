import React, { Component } from "react";
import { Link } from "react-router-dom";
class JEEMain extends Component {
  render() {
    return (
      <div className="wrapper">
        <section class="coursedetauilstop examdetails">
          <div class="container">
            <div class="row">
              <div class="col-md-2 col-xs-2">
                <img
                  src={require("../.././images/jee-advance.jee adv.jpg")}
                  alt=""
                />
              </div>
              <div class="col-md-7 col-xs-10 clgprofiledes">
                <h3>JEE Advance</h3>
                <h6 class="locationclg">Joint Entrance Examination Advance</h6>
                <h6 class="locationclg">
                  <i class="fa fa-edit" />
                  Online
                </h6>
                <h6 class="locationclg">
                  <i class="fa fa-book" />
                  Eligibility : Applicants who have passed JEE Mains exam.
                </h6>
                <h6 class="locationclg">
                  <i class="fa fa-globe" />
                  <Link
                    to
                    class="examlinkk"
                    href="https://www.jeeadv.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.jeeadv.ac.in/
                  </Link>
                </h6>
              </div>
              <div class="col-md-3 col-xs-12 mt-15 blockbtn examssidebar">
                <h4>
                  <img
                    src={require("../.././images/examdate-calender.png")}
                    alt=""
                  />
                  19<sup>th</sup>May 2019{" "}
                </h4>
              </div>
            </div>
          </div>
        </section>
        <div class="content-wrapper ">
          <div class="container">
            <div class="row">
              <div class="col-md-12" role="main">
                <div class=" detail-content-wrapper examdetailsd">
                  <div id="section-2" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>About Exam</span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        <span style={{ "font-size": "14px" }}>
                          <strong>
                            Joint Entrance Examination (JEE) Advance is held by
                            the seven zonal IITs with guidance from the Joint
                            Admission Board (JAB). This exam is organized for
                            admission to the undergraduate courses leading to a
                            UG, Integrated PG or UG-PG Dual Degree. This is a
                            national level entrance exam managed by the IIT,
                            Kanpur. via this exam, applicants can get admission
                            into IITs &amp; ISM. This IIT JEE exam is the second
                            phase of JEE Main (Joint Entrance Examination).
                          </strong>
                        </span>
                        <br />
                        &nbsp;
                      </p>{" "}
                    </div>
                  </div>
                  <div id="section-4" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>Application Fees</span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        <strong>
                          <span
                            style={{
                              "font-size": "14px",
                              "font-family": "Tahoma, Geneva, sans-serif"
                            }}
                          >
                            <u>
                              Fees structure of the exam is given below
                              according to their categories:-
                            </u>
                          </span>
                        </strong>
                      </p>
                      <table border="1" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              style={{
                                "text-align": "center",
                                "background-color": "rgb(209, 213, 216)"
                              }}
                            >
                              <u>
                                <span
                                  style={{
                                    "font-size": "14px",
                                    "font-family": "Tahoma, Geneva, sans-serif"
                                  }}
                                >
                                  Category
                                </span>
                              </u>
                            </th>
                            <th
                              scope="col"
                              style={{
                                "text-align": "center",
                                "background-color": "rgb(209, 213, 216)"
                              }}
                            >
                              <u>
                                <span
                                  style={{
                                    "font-family":
                                      " Tahoma, Geneva, sans-serif",
                                    "font-size": "14px"
                                  }}
                                >
                                  Male
                                </span>
                              </u>
                            </th>
                            <th
                              scope="col"
                              style={{
                                "text-align": "center",
                                "background-color": "rgb(209, 213, 216)"
                              }}
                            >
                              <span
                                style={{
                                  "font-family": "Tahoma,Geneva,sans-serif"
                                }}
                              >
                                <strong>
                                  <span style={{ "font-size": "14px" }}>
                                    <u>Female</u>
                                  </span>
                                </strong>
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>GENERAL</td>
                            <td>&nbsp; Rs. 2,600 + GST</td>
                            <td>&nbsp; Rs. 1,300 + GST &nbsp;</td>
                          </tr>
                          <tr>
                            <td>SC&nbsp;</td>
                            <td>&nbsp; Rs. 1,300 + GST</td>
                            <td>&nbsp; Rs. 1,300 + GST</td>
                          </tr>
                          <tr>
                            <td>ST</td>
                            <td>&nbsp; Rs. 1,300 + GST &nbsp;</td>
                            <td>&nbsp; Rs. 1,300 + GST</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>&nbsp;</p>{" "}
                    </div>
                  </div>
                  <div id="section-5" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>Application Procedure</span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        <strong>
                          <span
                            style={{
                              "font-family": "Tahoma,Geneva,sans-serif"
                            }}
                          >
                            <u>
                              Procedure for how to apply for this exam is
                              explained strp by step here:-
                            </u>
                          </span>
                        </strong>
                      </p>
                      <ul>
                        <li>
                          &nbsp;The applicants should visit the official website
                          of the JEE.
                        </li>
                        <li>
                          &nbsp;It is a 3 stage Process: Registration, Filling
                          the Application form and paying the application
                          fee.&nbsp;
                        </li>
                        <li>
                          &nbsp;A applicant should get registered with his/ her
                          basic details- Name, Address, Mobile number and valid
                          Email id.
                        </li>
                        <li>
                          The registration will create the applicant’s account
                          on the JEE portal, which should be retained by the
                          candidate until the completion of the selection
                          process.
                        </li>
                        <li>
                          The login ID and password will be sent to the
                          applicant’s Email id. By entering login credentials
                          the candidate can access the Application form.
                        </li>
                        <li>
                          A applicant should fill all necessary columns in the
                          application form.
                        </li>
                        <li>
                          A applicant should also pay the Registration fee for
                          the JEE Advanced 2019 exam. &nbsp;
                        </li>
                      </ul>
                      <p>
                        <br />
                      </p>{" "}
                    </div>
                  </div>
                  <div id="section-14" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>Cut-Offs</span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        <u>
                          <strong>
                            <span
                              style={{
                                "font-family": "Tahoma,Geneva,sans-serif"
                              }}
                            >
                              Cut off of JEE Advance exam 2018 are given in
                              detail according to their categories:-
                            </span>
                          </strong>
                        </u>
                      </p>
                      <table border="1" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              style={{
                                "background-color": "rgb(239, 239, 239)"
                              }}
                            >
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      "font-family":
                                        " Tahoma, Geneva, sans-serif",
                                      "font-size": "14px"
                                    }}
                                  >
                                    Category
                                  </span>
                                </u>
                              </strong>{" "}
                              &nbsp;
                            </th>
                            <th
                              scope="col"
                              style={{
                                "background-color": "rgb(239, 239, 239)"
                              }}
                            >
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      "font-family":
                                        " Tahoma, Geneva, sans-serif",
                                      "font-size": "14px"
                                    }}
                                  >
                                    Minimum Marks in Each Subject
                                  </span>
                                </u>
                              </strong>
                            </th>
                            <th
                              scope="col"
                              style={{
                                "background-color": "rgb(239, 239, 239)"
                              }}
                            >
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      "font-family":
                                        " Tahoma, Geneva, sans-serif",
                                      "font-size": "14px"
                                    }}
                                  >
                                    Minimum Aggregate Marks
                                  </span>
                                </u>
                              </strong>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Common rank list &nbsp;(CRL) &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp;12
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 126
                            </td>
                          </tr>
                          <tr>
                            <td>OBC-NCL</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp;11
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 114
                            </td>
                          </tr>
                          <tr>
                            <td>SC</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp;06
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;63
                            </td>
                          </tr>
                          <tr>
                            <td>ST</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp;06
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;63
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Common-PwD rank list (CRL) &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp;
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp;06
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;63
                            </td>
                          </tr>
                          <tr>
                            <td>OBC-NCL-PwD rank list</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp;06
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;64
                            </td>
                          </tr>
                          <tr>
                            <td>SC-PwD rank list</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp;06
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;64
                            </td>
                          </tr>
                          <tr>
                            <td>ST-PwD rank list</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp;06
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;64
                            </td>
                          </tr>
                          <tr>
                            <td>Preparatory course rank lists</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp;03
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;32
                            </td>
                          </tr>
                        </tbody>
                      </table>{" "}
                    </div>
                  </div>
                  <div id="section-16" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>Documents to be Carried</span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        <u>
                          <strong>
                            <span
                              style={{
                                "font-family": " Tahoma, Geneva, sans-serif",
                                "font-size": "14px"
                              }}
                            >
                              Necessary documents that students needs to carry
                              it to the examination hall:-
                            </span>
                          </strong>
                        </u>
                      </p>
                      <ul>
                        <li>Seat Allotment letter from JOCSAP gateway</li>
                        <li>Original Admit card</li>
                        <li>(Duly filled) Application Form of the Brochure</li>
                        <li>Duly filled Medical Examination Report</li>
                        <li>Verification of date of birth Certificate</li>
                        <li>
                          Certificate of passing &nbsp;Class XII/SSC/Equivalent
                          exam Mark sheet.
                        </li>
                        <li>
                          Category Certificate (OBC (NCL)/SC/ST/PwD/DS) issued
                          by the competent authority according to the
                          configuration in the JEE Advanced 2018 Brochure
                        </li>
                        <li>
                          For the foreign national applicants: Attested
                          photocopy of the page in the passport containing
                          &nbsp;the name, photo and nationality
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                  <div id="section-3" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>Eligibility</span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        <strong>
                          All applicants neet to read the JEE Advanced 2018
                          eligibility criteria before filling the online
                          application form as ineligible applicants will not be
                          allowed to attempt the entrance examination.
                        </strong>
                      </p>
                      <ul>
                        <li>
                          Only those students are allowed to appear for JEE
                          Advanced exams, those who have given their board exam
                          in 2017- 2018 for the first time and those who have
                          appeared for JEE Mains online or offline 2018 exam.
                        </li>
                        <li>
                          Applicant should have been born on or after October 1,
                          1993, if belonging to the GEN or OBC-NCL category and
                          on or after October 1, 1988, if belonging to the SC,
                          ST or PwD category.
                        </li>
                        <li>
                          The applicant should be among the top 2,24,000 rankers
                          (all categories included) in JEE Main 2018.
                          Percentages of the total number of candidates for
                          various categories is as follows: 50.5% for GEN (from
                          the common rank list), 27% for OBC-NCL, 15% for SC and
                          7.5% for ST. in where each of these four categories,
                          5% horizontal reservation is available for PwD
                          candidates.
                        </li>
                        <li>
                          A applicant can apply for JEE (Advanced) a maximum of
                          two times and that too in consecutive years.
                          Therefore, this should be either the applicants FIRST
                          attempt OR the SECOND consecutive attempt.
                        </li>
                        <li>
                          The applicant should have not taken admission
                          (irrespective of whether or not he/she continued in
                          the program) OR even accepted admission by paying the
                          admission fee at any of the IITs or ISM in the past;
                          even applicant &nbsp;whose admission was canceled are
                          NOT eligible. However, applicants who have been
                          admitted to a preparatory course in any of the IITs in
                          2017 can appear for JEE Advanced 2018.
                        </li>
                      </ul>
                      <p>
                        <br />
                      </p>{" "}
                    </div>
                  </div>
                  <div id="section-6" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>Exam Pattern</span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        Exam pattern of the exam contains of two papers that is
                        given in detail below:-
                      </p>
                      <ul>
                        <li>
                          There are 3 separate sections in both the papers,
                          namely Physics, Chemistry and Mathematics.
                        </li>
                        <li>
                          The question papers will contain objective type that
                          includes MCQ as well as numerical answer type
                          questions.
                        </li>
                        <li>
                          Total 3 hours will be provided to each paper. Timings
                          for papaer-1 will be 10:00 a.m. to 12:00 p.m. and for
                          paper-2, the timings will be 2:00 p.m. to 5:00 p.m.
                        </li>
                        <li>
                          There is a procedure of negative marking for some of
                          the questions.
                        </li>
                      </ul>
                      <p>
                        <strong>
                          <u>
                            <span
                              style={{
                                "font-family": "Tahoma,Geneva,sans-serif"
                              }}
                            >
                              JEE Advanced Paper 1
                            </span>
                          </u>
                        </strong>
                      </p>
                      <table border="1" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th scope="col">Section</th>
                            <th scope="col">No. of Questions</th>
                            <th scope="col">Marks per questions</th>
                            <th scope="col">Negative marking</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Section 1</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;5
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; 3
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -1
                            </td>
                          </tr>
                          <tr>
                            <td>Section 2</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;8
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; 4
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -2
                            </td>
                          </tr>
                          <tr>
                            <td>Section 3</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;5
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; 3
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <strong>
                          <u>
                            <span
                              style={{
                                "font-family": "Tahoma,Geneva,sans-serif"
                              }}
                            >
                              JEE Advanced Paper 2
                            </span>
                          </u>
                        </strong>
                      </p>
                      <table border="1" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th scope="col">Section</th>
                            <th scope="col">No. of Questions</th>
                            <th scope="col">Marks per questions</th>
                            <th scope="col">Negative marking</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Section 1</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;6
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; 3
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -1
                            </td>
                          </tr>
                          <tr>
                            <td>Section 2</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;8
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; 4
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -2
                            </td>
                          </tr>
                          <tr>
                            <td>Section 3</td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;4
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; 3
                            </td>
                            <td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0
                            </td>
                          </tr>
                        </tbody>
                      </table>{" "}
                    </div>
                  </div>
                  <div id="section-10" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>FAQs</span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        <strong>
                          <span style={{ color: "rgb(41, 105, 176)" }}>
                            Q. How is the exam pattern for JEE Advanced Paper 1
                            &amp; 2 different?
                          </span>
                        </strong>
                        <br />
                        <strong>Ans:</strong> Applicants appearing in JEE
                        Advanced 2018 have to attempt both Paper I and Paper II
                        to be considered for admission. Both the papers will be
                        of 3 hours duration each and include questions from –
                        Physics, Chemistry and Mathematics.
                      </p>
                      <p>
                        <strong>
                          <span style={{ color: "rgb(41, 105, 176)" }}>
                            Q. Which languages in the JEE Advanced available in?
                          </span>
                        </strong>
                        <br />
                        <strong>Ans:</strong> The JEE Advanced entrance exam
                        will be available in both English and Hindu languages.
                      </p>
                      <p>
                        <strong>
                          <span style={{ color: "rgb(41, 105, 176)" }}>
                            Q. I made mistakes in my application. Will there be
                            correction dates for JEE Advanced?
                          </span>
                        </strong>
                        <br />
                        <strong>Ans:</strong> Applicants can make changes to the
                        application form of JEE Advanced until it is submitted.
                        Afterwards, there is no option to make corrections to
                        the JEE Advanced application form.
                      </p>
                      <p>
                        <strong>
                          <span style={{ color: "rgb(41, 105, 176)" }}>
                            Q. How many mobile number are required in the JEE
                            Advanced 2017 Application Form?
                          </span>
                        </strong>
                        <br />
                        <strong>Ans.</strong> You have to provide at least two
                        mobile numbers in the application form.
                      </p>
                      <p>
                        <strong>
                          <span style={{ color: "rgb(41, 105, 176)" }}>
                            Q. If I made a mistake in mentioning my category,
                            would I be able to amend it?
                          </span>
                        </strong>
                        <br />
                        <strong>Ans:</strong> Category once submitted is not
                        subject to change.
                      </p>
                      <p>
                        <strong>
                          <span style={{ color: "rgb(41, 105, 176)" }}>
                            Q. If I don’t appear in one paper, will my result be
                            declared?
                          </span>
                        </strong>
                        <br />
                        <strong>Ans:</strong> It is obligatory to appear in both
                        papers, absenteeism in one paper would disqualify you.
                        <br />
                        &nbsp;
                      </p>{" "}
                    </div>
                  </div>
                  <div id="section-7" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>Study Material</span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        <u>
                          <span
                            style={{
                              "font-family": "Tahoma,Geneva,sans-serif"
                            }}
                          >
                            <strong>
                              <span style={{ "font-size": "14px" }}>
                                Reference books for the prepration of the exam:-
                              </span>
                            </strong>
                          </span>
                        </u>
                      </p>
                      <ul>
                        <li>
                          Concept of Physics - By HC Verma (Volume 1 and 2)
                        </li>
                        <li>Physical Chemistry – O.P Tondon</li>
                        <li>Numerical Chemistry – P Bahadur</li>
                        <li>Mathematics – Cengage</li>
                        <li>Trigonometry, Coordinate Geometry – SL Loney</li>
                        <li>Algebra – Hall and Knight</li>
                        <li>&nbsp;Calculus – Thomas and Finney</li>
                      </ul>{" "}
                    </div>
                  </div>
                  <div id="section-13" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>Syllabus</span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Syllabus for the exam given above is in details as
                            follow:-
                          </span>
                        </strong>
                      </p>
                      <p>
                        <br />
                      </p>
                      <table
                        style={{ width: "99%", "margin-right": "calc(1%)" }}
                      >
                        <thead>
                          <tr>
                            <th
                              colspan="3"
                              style={{
                                "text-align": " center",
                                width: "68.9189%",
                                "background-color": "rgb(84, 172, 210)"
                              }}
                            >
                              <span style={{ color: "rgb(255, 255, 255)" }}>
                                <strong>
                                  <span
                                    style={{
                                      "font-family": "Tahoma,Geneva,sans-serif"
                                    }}
                                  >
                                    <u>
                                      <span style={{ "font-size": "14px" }}>
                                        Chemistry
                                      </span>
                                    </u>
                                  </span>
                                </strong>
                              </span>
                              <br />
                            </th>
                            <th
                              style={{
                                "text-align": "center",
                                width: "16.5165%",
                                "background-color": "rgb(147, 101, 184)"
                              }}
                            >
                              <span style={{ color: "rgb(255, 255, 255)" }}>
                                <strong>
                                  <span
                                    style={{
                                      "font-family": "Tahoma,Geneva,sans-serif"
                                    }}
                                  >
                                    <u>
                                      <span style={{ "font-size": "14px" }}>
                                        Mathematics
                                      </span>
                                    </u>
                                  </span>
                                </strong>
                              </span>
                              <br />
                            </th>
                            <th
                              style={{
                                "text-align": "center",
                                width: " 14.2643%",
                                "background-color": "rgb(251, 160, 38)"
                              }}
                            >
                              <span style={{ color: "rgb(255, 255, 255)" }}>
                                <strong>
                                  <span
                                    style={{
                                      "font-family":
                                        " Tahoma, Geneva, sans-serif",
                                      "font-size": "14px"
                                    }}
                                  >
                                    <u>Physics</u>
                                  </span>
                                </strong>
                              </span>
                              <br />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                width: "17.042%",
                                "text-align": "center",
                                "vertical-align": "top"
                              }}
                            >
                              <div
                                data-empty="true"
                                style={{ "text-align": "left" }}
                              >
                                <br />
                              </div>
                              <ol>
                                <li style={{ "text-align": "left" }}>
                                  Atoms and Molecules
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Gaseous and liquid states
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Atomic structure and &nbsp; &nbsp; chemical
                                  bonding
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  &nbsp;Energetics
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  &nbsp;Chemical equilibrium
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  &nbsp;Electrochemistry
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  &nbsp;Chemical kinetics
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  &nbsp;Solid state
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  &nbsp;Solutions
                                </li>
                              </ol>
                              <div style={{ "text-align": "left" }}>&nbsp;</div>
                              <div data-empty="true">
                                <br />
                              </div>
                            </td>
                            <td
                              style={{
                                width: "21.1712%",
                                "text-align": "center",
                                "vertical-align": "top"
                              }}
                            >
                              &nbsp;
                              <ol>
                                <li style={{ "text-align": "left" }}>
                                  Surface chemistry
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Nuclear chemistry
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Principles of qualitative analysis: Groups I
                                  to V (only Ag+, Hg2+, Cu2+, Pb2+, Bi3+, Fe3+,
                                  Cr3+, Al3+, Ca2+, Ba2+, Zn2+, Mn2+ and Mg2+)
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Concepts: Hybridisation of carbon; σ and
                                  π-bonds
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Preparation, properties, and reactions of
                                  alkanes
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Preparation, properties, and reactions of
                                  alkenes and alkynes
                                </li>
                              </ol>
                              <div style={{ "text-align": "left" }}>&nbsp;</div>
                            </td>
                            <td
                              style={{
                                width: "31.006%",
                                "text-align": "center",
                                "vertical-align": "top"
                              }}
                            >
                              <div data-empty="true">
                                <br />
                              </div>
                              <ol>
                                <li style={{ "text-align": "left" }}>
                                  Reactions of benzene
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Phenols
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Carbohydrates
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Amino acids and peptides
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Properties and uses of some important polymers
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Practical organic chemistry
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Isolation/preparation and properties of the
                                  following non-metals
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Preparation and properties of the following
                                  compounds
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Transition elements (3d series)
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Preparation and properties of the following
                                  compounds
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Ores and minerals
                                </li>
                                <li style={{ "text-align": "left" }}>
                                  Extractive metallurgy
                                </li>
                              </ol>
                            </td>
                            <td
                              style={{
                                width: "16.5165%",
                                "text-align": "center",
                                "vertical-align": "top"
                              }}
                            >
                              <div
                                data-empty="true"
                                style={{ "text-align": "left" }}
                              >
                                <br />
                              </div>
                              <ol>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Algebra
                                  </div>
                                </li>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Trigonometry
                                  </div>
                                </li>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Analytical Geometry
                                  </div>
                                </li>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Differential Calculus
                                  </div>
                                </li>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Integral Calculus
                                  </div>
                                </li>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Vectors
                                  </div>
                                </li>
                              </ol>
                              <div
                                data-empty="true"
                                style={{ "text-align": "left" }}
                              >
                                <br />
                              </div>
                            </td>
                            <td
                              style={{
                                width: "14.2643%",
                                "text-align": "center",
                                "vertical-align": "top"
                              }}
                            >
                              <div style={{ "text-align": "left" }}>
                                <br />
                              </div>
                              <ol>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    General
                                  </div>
                                </li>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Mechanics
                                  </div>
                                </li>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Thermal Physics
                                  </div>
                                </li>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Electricity and Magnetism
                                  </div>
                                </li>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Optics
                                  </div>
                                </li>
                                <li>
                                  <div style={{ "text-align": "left" }}>
                                    Modern Physics
                                  </div>
                                </li>
                              </ol>
                              <div
                                data-empty="true"
                                style={{ "text-align": "left" }}
                              >
                                <br />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <br />
                      </p>{" "}
                    </div>
                  </div>
                  <div id="section-9" class="detail-content coursedessside">
                    <h2 class="heading-new">
                      <span>Test Centres </span>
                    </h2>
                    <div class="examsdetailscnt">
                      <p>
                        <strong>
                          Some exam centers of the exam are as follows:-
                        </strong>
                      </p>
                      <table
                        style={{ width: "94%", "margin-right": "calc(6%)" }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                width: "24.9199%",
                                "text-align": "center",
                                "vertical-align": "top"
                              }}
                            >
                              <strong>
                                <span
                                  style={{
                                    "font-size": "14px",
                                    "font-family": "Tahoma, Geneva, sans-serif",
                                    color: "rgb(40, 50, 78)"
                                  }}
                                >
                                  <u>IIT BOMBAY ZONE</u>
                                </span>
                              </strong>
                              <div data-empty="true">
                                <br />
                              </div>
                              <div>
                                &nbsp;<strong> Panaji</strong>
                              </div>
                              <div>
                                <strong>Ahmedabad</strong>
                              </div>
                              <div>
                                <strong>&nbsp;Rajkot</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Surat</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Vadodara</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Mumbai</strong>
                              </div>
                              <div>
                                <strong>&nbsp;Nagpur</strong>
                              </div>
                              <div>
                                <strong>Navi Mumbai</strong>
                              </div>
                              <div>
                                <strong>&nbsp;Pune</strong>
                              </div>
                              <div>
                                <strong>&nbsp;Ajmer</strong>
                              </div>
                              <div>
                                <strong>Jaipur</strong>
                              </div>
                              <div>
                                <strong>Jodhpur</strong>
                              </div>
                              <div data-empty="true">
                                <br />
                              </div>
                            </td>
                            <td
                              style={{
                                width: "24.8199%",
                                "text-align": "center",
                                "vertical-align": "top"
                              }}
                            >
                              <span style={{ color: "rgb(226, 80, 65)" }}>
                                <strong>
                                  <span style={{ "font-size": "14px" }}>
                                    <u>
                                      <span
                                        style={{
                                          "font-family":
                                            "Tahoma,Geneva,sans-serif"
                                        }}
                                      >
                                        IIT DELHI ZONE
                                      </span>
                                    </u>
                                  </span>
                                </strong>
                              </span>
                              <div data-empty="true">
                                <br />
                              </div>
                              <div>
                                <strong>&nbsp; Delhi ( East )</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Delhi ( West )</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Delhi ( North )</strong>
                              </div>
                              <div>
                                <strong>&nbsp;Delhi ( South )</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Faridabad</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Gurgaon</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Jammu</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Indore</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Sikar</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Udaipur</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Aligarh</strong>
                              </div>
                              <div>
                                <strong>Mathura</strong>
                              </div>
                              <div data-empty="true">
                                <br />
                              </div>
                            </td>
                            <td
                              style={{
                                width: "24.8199%",
                                "text-align": "center",
                                "vertical-align": "top"
                              }}
                            >
                              <span style={{ color: "rgb(41, 105, 176)" }}>
                                <strong>
                                  <span style={{ "font-size": "14px" }}>
                                    <u>
                                      <span
                                        style={{
                                          "font-family":
                                            "Tahoma,Geneva,sans-serif"
                                        }}
                                      >
                                        IIT GUWAHATI ZONE
                                      </span>
                                    </u>
                                  </span>
                                </strong>
                              </span>
                              <div data-empty="true">
                                <br />
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Itanagar</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Guwahati</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Jorhat</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Silchar</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Gaya</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Katihar</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Muzaffarpur</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Patna</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Imphal</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Shillong</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Siliguri</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Dubai</strong>
                              </div>
                              <div data-empty="true">
                                <br />
                              </div>
                            </td>
                            <td
                              style={{
                                width: "25.02%",
                                "text-align": "center",
                                "vertical-align": "top"
                              }}
                            >
                              <span style={{ color: "rgb(184, 49, 47)" }}>
                                <strong>
                                  <u>
                                    <span style={{ "font-size": "14px" }}>
                                      <span
                                        style={{
                                          "font-family":
                                            "Tahoma, Geneva, sans-serif"
                                        }}
                                      >
                                        IIT KANPUR ZONE
                                      </span>
                                    </span>
                                  </u>
                                </strong>
                              </span>
                              <div data-empty="true">
                                <br />
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Bhopal</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Gwalior</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Jabalpur</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Haldwani</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Agra</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Allahabad</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Gorakhpur</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Jhansi</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Kanpur</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Lucknow</strong>
                              </div>
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
                      <table
                        style={{ width: "94%", "margin-right": "calc(6%)" }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                width: "33.3333%",
                                "vertical-align": "top",
                                "text-align": "center"
                              }}
                            >
                              <span
                                style={{
                                  color: "rgb(85, 57, 130)",
                                  "font-family": "Tahoma, Geneva, sans-serif"
                                }}
                              >
                                <strong>
                                  <u>
                                    <span style={{ "font-size": "14px" }}>
                                      IIT KHARAGPUR ZONE
                                    </span>
                                  </u>
                                </strong>
                              </span>
                              <div data-empty="true">
                                <br />
                              </div>
                              <div>
                                <strong> Port Blair</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Visakhapatnam</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Bhilai</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Bilaspur</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Raipur</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Bokaro</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Dhanbad</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Jamshedpur</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Ranchi</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Bhubaneswar</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Durgapur</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Kolkata ( North )</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Kolkata ( South )</strong>
                              </div>
                              <div data-empty="true">
                                <br />
                              </div>
                            </td>
                            <td
                              style={{
                                width: "33.3333%",
                                "vertical-align": "top",
                                "text-align": "center"
                              }}
                            >
                              <span style={{ color: "rgb(243, 121, 52)" }}>
                                <strong>
                                  <u>
                                    <span
                                      style={{
                                        "font-family":
                                          " Tahoma, Geneva, sans-serif",
                                        "font-size": "14px"
                                      }}
                                    >
                                      IIT MADRAS ZONE
                                    </span>
                                  </u>
                                </strong>
                              </span>
                              <div data-empty="true">
                                <br />
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Nellore</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Vijayawada</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Hyderabad</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Warangal</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Bangalore</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Mangalore</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Kochi</strong>
                              </div>
                              <div>
                                <strong>
                                  &nbsp; &nbsp; Thiruvananthapuram
                                </strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Chennai</strong>
                              </div>
                            </td>
                            <td
                              style={{
                                width: "33.3333%",
                                "vertical-align": "top",
                                "text-align": "center"
                              }}
                            >
                              <span style={{ color: "rgb(40, 50, 78)" }}>
                                <strong>
                                  <u>
                                    <span
                                      style={{
                                        "font-size": "14px",
                                        "font-family":
                                          "Tahoma, Geneva, sans-serif"
                                      }}
                                    >
                                      IIT ROORKEE ZONE
                                    </span>
                                  </u>
                                </strong>
                              </span>
                              <div data-empty="true">
                                <br />
                              </div>
                              <div>
                                <strong>&nbsp; Chandigarh</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Ambala</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Panipat</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Shimla</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Amritsar</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Jalandhar</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Ludhiana</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Dehradun</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp; Haridwar</strong>
                              </div>
                              <div>
                                <strong>&nbsp; &nbsp;Moradabad</strong>
                              </div>
                              <div>
                                <strong>&nbsp; Varanasi</strong>
                              </div>
                              &nbsp;
                              <br />
                            </td>
                          </tr>
                        </tbody>
                      </table>{" "}
                    </div>
                  </div>
                  <div
                    id="section-latest"
                    class="detail-content coursedessside"
                  >
                    <h2 class="heading-new">
                      <span>Latest News</span>
                    </h2>
                    <div class="latestnewsexam row" />
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
export default JEEMain;
