import React, { Component } from "react";
import { Link } from "react-router-dom";
class BOMedicine extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  alt="Agriculture course"
                  src={require("../.././images/bachelor-of-architecture.architecture.jpg")}
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Bachelor of Medicine &amp; Bachelor of Surgery </h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Medical &amp; Health Car
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Degree Type : 12,
                </h6>
              </div>
              <div className="col-md-4 col-xs-12 mt-15 blockbtn">
                <Link to="/medical" className="crssidebtn">
                  All Medical &amp; Health Care Courses
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
                      <strong />
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        <strong>
                          MBBS (Bachelor of Medicine and Bachelor of Surgery)
                        </strong>{" "}
                        is the most well known and assigned level of
                        specialists. The{" "}
                        <strong>
                          Bachelor of Medicine and Bachelor of Surgery
                        </strong>{" "}
                        degree is commonly known to as the{" "}
                        <strong>'medical degree'</strong>. <strong>MBBS</strong>{" "}
                        is <strong>five-year</strong> certifications in a single
                        space as the{" "}
                        <strong>
                          Bachelor of Medicine and the Bachelor of Surgery
                        </strong>
                        .
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        The <strong>MBBS</strong> is a college degree program in
                        the medical field. It is extremely hard to pursue the{" "}
                        <strong>MBBS</strong> course. There is a wide range of
                        specialization available in the public and private
                        sectors for{" "}
                        <span style={{ "font-size": "14px" }}>
                          <strong>
                            Bachelor of Medicine and Bachelor of Surgery.
                          </strong>
                        </span>
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
                      <span style={{ "font-size": "14px" }}>
                        The eligibility criteria for{" "}
                        <strong>MBBS course</strong> are:
                      </span>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          Students who have cleared the <strong>10+2</strong>{" "}
                          examination with{" "}
                          <strong>Physics, Chemistry, and Biology</strong> as
                          core subjects can appear for MBBS Entrance Exam i.e.{" "}
                          <span style={{ "font-size": "14px" }}>
                            <Link to="/neet">
                              <strong>
                                National Eligibility Cum Entrance Test (NEET)
                              </strong>
                            </Link>
                            <span style={{ "font-size": "14px" }}>
                              <strong>.</strong>
                            </span>
                          </span>
                        </span>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            The qualifying candidate in NEET can go for MBBS
                            course.
                          </span>
                        </strong>
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
                      <span style={{ "font-size": "14px" }}>
                        The syllabus of the course of{" "}
                        <strong>
                          MBBS (Bachelor of Medicine and Bachelor of Surgery)
                        </strong>{" "}
                        may differ from college to college, but the structure is
                        the same. A definite syllabus of the same is as per the
                        following:
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <table style={{ width: "98%", marginright: "calc(2%)" }}>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "33.3333%",
                              textalign: "center",
                              verticalalign: "top",
                              backgroundColor: "rgb(239, 239, 239)"
                            }}
                          >
                            <span style={{ color: "rgb(85, 57, 130)" }}>
                              <strong>
                                <u>
                                  <span
                                    style={{
                                      "font-size": "18px",
                                      fontfamily: "Tahoma, Geneva, sans-serif"
                                    }}
                                  >
                                    Year I
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              <br />
                              Anatomy
                              <br />
                              Physiology
                              <br />
                              Biochemistry
                              <br />
                            </span>
                            <br />
                            <br />
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
                                "font-size": "18px",
                                fontfamily: "Tahoma, Geneva, sans-serif"
                              }}
                            >
                              <strong>
                                <u>Year II</u>
                              </strong>
                            </span>
                            <br />

                            <span style={{ "font-size": "14px" }}>
                              <br />
                              Pharmacology
                              <br />
                              Pathology
                              <br />
                              Microbiology
                              <br />
                              Forensic medicine and Toxicology
                              <br />
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
                              Preventive and Social medicineOpthalmology
                              <br />
                              Ear Nose and Throat knew as&nbsp;ENT
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <br />
                    </p>
                    <table style={{ width: " 98%", marginright: "calc(2%)" }}>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: " 50%",
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
                                    Year IV
                                  </span>
                                </u>
                              </strong>
                            </span>
                            <br />
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Medicine (also includes Psychiatry and
                              Dermatology)
                              <br />
                              Surgery (includes Orthopaedics and anesthesiology)
                              <br />
                              Gynecology and Obstetrics
                              <br /> Padiatrics
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <br />
                      <span style={{ "font-size": "14px" }}>
                        And after these 4 and half years in{" "}
                        <strong>MBBS,&nbsp;</strong>then your{" "}
                        <strong>Internship or externship&nbsp;</strong>is done
                        for 1 year.
                      </span>
                    </p>
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
                        After <strong>MBBS</strong> one can go for the following
                        posts:
                      </span>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Junior doctor</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Anesthetist or Anaesthesiologist</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Bacteriologist</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Cardiologist</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Chiropodist</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Doctor</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Junior Surgeon</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Medical Professor or Lecturer</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Researcher</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Scientist</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Gynecologist</strong>
                        </span>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Hospital Administrator
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Medical Admitting Officer
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Neurologist
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Nutritionist
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Obstetrician
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Orthopaedist
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Pathologist
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Pediatrician
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Radiologist
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>Physician</span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Physiologist
                          </span>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Psychiatrist
                          </span>
                        </strong>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Resident Medical Officer</strong>
                        </span>
                      </li>
                    </ul>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        Employment areas for <strong>MMBS</strong> Graduate are
                        as follows:
                      </span>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Hospitals</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Laboratories</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Biomedical Companies</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Polyclinics</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Nursing Homes</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Medical Colleges</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Health Centres</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>
                            Pharmaceutical and Biotechnology Companies
                          </strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Medical Foundation/Trust</strong>
                        </span>
                      </li>
                      <li>
                        <strong>
                          <span style={{ "font-size": "14px" }}>
                            Non-Profit Organizations
                          </span>
                        </strong>
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
                        Employees with a{" "}
                        <strong>
                          Bachelor of Medicine and Bachelor of Surgery (MBBS)
                        </strong>{" "}
                        Degree, the average minimum salary ranges by the
                        position of job and their experience and also the
                        company and condition of the company.
                      </span>
                    </p>
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        Salary of an MBBS graduate may be{" "}
                        <strong>Rs. 20,000 - Rs. 35,000/- per month.</strong> It
                        may increase with working experience and eligibility of
                        employee.
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
                      <span style={{ "font-size": "14px" }}>
                        Famous personalities in the field of{" "}
                        <strong>
                          Bachelor of Medicine and Bachelor of Surgery (MBBS)
                        </strong>{" "}
                        are as follows:
                      </span>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Paul Ehrlich</strong> (14 March 1854 - 20
                          August 1915)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Harold E. Varmus</strong> (18 December 1939)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Karl Landsteiner</strong> (14 June 1868 - 26
                          June 1943)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Frederick Banting</strong> (14 November 1891 -
                          21 February 1941)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>David H. Hubel</strong> (27 February 1926 - 22
                          September 2013)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Henry Faulds</strong> (1 June 1843 - 19 March
                          1930)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Jules Bordet</strong> (13 June 1870 - 6 April
                          1961)
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>Frederick&nbsp;</strong>
                          <strong>Chapman Robbin</strong>
                          <strong>s</strong> (25 August 1916 - 4 August 2003)
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
                      <span style={{ "font-size": "14px" }}>
                        There are various Government as well as Private colleges
                        available for the course of <strong>MBBS</strong> across
                        India. Some of the famous and top colleges are as
                        follows:
                      </span>
                    </p>
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td
                            colspan="2"
                            style={{
                              width: "99.248%",
                              verticalalign: " top",
                              textalign: "center"
                            }}
                          >
                            <span style={{ "font-size": " 18px" }}>
                              <span style={{ color: " rgb(85, 57, 130)" }}>
                                <strong>
                                  <u>
                                    <span
                                      style={{
                                        fontfamily:
                                          "                                    Tahoma, Geneva, sans-serif"
                                      }}
                                    >
                                      Top colleges for MBBS
                                    </span>
                                  </u>
                                </strong>
                              </span>
                            </span>
                            <span style={{ "font-size": "14px" }}>
                              <br />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              verticalalign: "top",
                              textalign: "center ",
                              backgroundcolor: "rgb(239, 239, 239)"
                            }}
                          >
                            <span style={{ "font-size": "14px" }}>
                              All India Institute of Medical Sciences (AIIMS),{" "}
                              <strong>New Delhi</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Christian Medical College,{" "}
                              <strong>Vellore</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Armed Forces Medical College (AFMC),{" "}
                              <strong>Pune</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Kasturba Medical College, <strong>Manipal</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Institute of Medical Sciences Banaras Hindu
                              University, <strong>Varanasi</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Shri Ramachandra University,{" "}
                              <strong>Chennai</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Indian Veterinary Research Institute (IVRI),
                              Izzatnagar, UP
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Central Food and Technology Research Institute
                              (CFTRI), Mysore
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Maulana Azad Medical College,{" "}
                              <strong>New Delhi</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Kasturba Medical College,{" "}
                              <strong>Mangalore</strong>
                            </span>
                            <br />
                            <div data-empty="true">
                              <span style={{ "font-size": "14px" }}>
                                King George’s Medical University,{" "}
                                <strong>Lucknow</strong>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              verticalalign: "top",
                              "text-align": "center"
                            }}
                          >
                            <span style={{ "font-size": "14px" }}>
                              St Johns Medical College,{" "}
                              <strong>
                                Bangalore
                                <br />
                              </strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Jawaharlal Institute of Post Graduate Medical
                              Education and Research (JIPMER),{" "}
                              <strong>Puducherry</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Christian Medical College,{" "}
                              <strong>Ludhiana</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Indian Institute of Technology (IIT) Kanpur,
                              Madras, Mumbai and New Delhi
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              King George's Medical University,{" "}
                              <strong>Lucknow</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Sri Ramachandra Medical College and Research
                              Institute, <strong>Chennai</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              University College of Medical Sciences, University
                              of Delhi, <strong>Delhi</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              MS Ramaiah Medical Collge,{" "}
                              <strong>Bangalore</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              overnment Medical College and Hospital,{" "}
                              <strong>Chandigarh</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Institute of Post Graduate Medical Education and
                              Research, <strong>Kolkata</strong>
                            </span>
                            <br />
                            <span style={{ "font-size": "14px" }}>
                              Mahatma Gandhi Medical College and Research
                              Institute, <strong>Pondicherry</strong>
                            </span>
                            <br />
                            <br />
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
                  </div>
                </div>{" "}
                <div id="section-12" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Other Details</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                        After pursuing MBBS Degree one can also go for Post
                        Graduation courses like:
                      </span>
                    </p>
                    <ul>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>M.D (Doctor of Medicine)</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>M.S (Master of Surgery)</strong>
                        </span>
                      </li>
                      <li>
                        <span style={{ "font-size": "14px" }}>
                          <strong>
                            <Link to="M.Sc" />
                          </strong>
                          <Link to="http://careerpotli.com/course-details/master-of-science">
                            <span style={{ "font-size": "14px" }}>
                              <strong>M.Sc (Medical)</strong>
                            </span>
                          </Link>
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

                  <div className="col-md-3">
                    <Link
                      to="http://www.hosmathospitals.in/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/hosmat-hospital.jpg"
                        alt=""
                      />
                      <p>Hosmat Hospital</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="https://www.medicare.gov/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/medicare.jpg"
                        alt=""
                      />
                      <p>Medicare</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="https://www.doctorspring.com/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/doctor-spring.jpg"
                        alt=""
                      />
                      <p>Doctor Spring</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="https://www.manipalhospitals.com/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/manipal-hospital.jpg"
                        alt=""
                      />
                      <p>Manipal Hospital</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="https://www.maxhealthcare.in/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/max-healthcare.jpg"
                        alt=""
                      />
                      <p>Max Healthcare</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="http://careers.globalhospitalsindia.com/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/global-hospitals.jpg"
                        alt=""
                      />
                      <p>Global Hospitals</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="https://www.columbiaasia.com/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/columbia-asia-hospital.jpg"
                        alt=""
                      />
                      <p>Columbia Asia Hospital</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="http://www.medanta.org/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/medanta-medicity.jpg"
                        alt=""
                      />
                      <p>Medanta Medicity</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="http://www.fortishealthcare.com/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/fortis-healthcare.jpg"
                        alt=""
                      />
                      <p>Fortis Healthcare</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="https://www.apollohospitals.com/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/apollo-hospitals-enterprises.jpg"
                        alt=""
                      />
                      <p>Apollo Hospitals Enterprises</p>
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
export default BOMedicine;
