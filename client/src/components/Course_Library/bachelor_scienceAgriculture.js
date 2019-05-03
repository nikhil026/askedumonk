import React, { Component } from "react";
import { Link } from "react-router-dom";
class BOScienceAgriculture extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img
                  alt="Bachelor of Science"
                  src={require("../.././images/bachelor-of-science-bsc-in-agriculture.agricultural.jpg")}
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Bachelor of Science (B.Sc) in Agriculture</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Agriculture
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Degree Type : Pcm, 12,{" "}
                </h6>
              </div>
              <div className="col-md-4 col-xs-12 mt-15 blockbtn">
                <Link to="/Agriculture1" className="crssidebtn">
                  All Agriculture Courses
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
                      Normally, a B.Sc in Agriculture is a four-year course,
                      however a few colleges or organizations offer a five-year
                      course. The educational modules change, from finding out
                      about soil science to agricultural meteorology, and there
                      is a harmony amongst hypothesis and practicals. Your last
                      year will contain hands-on preparing, which helps in tying
                      up all you have learned in the initial three years, to
                      influence you to work prepared.
                    </p>

                    <p>
                      B.Sc. Farming includes the investigation of agricultural
                      sciences and utilization of current logical gear and
                      systems in agribusiness, arrive studying, soil science,
                      water asset administration, creature, and poultry
                      administration, nuts and bolts of biotechnology and so
                      forth. The goal of the course is to utilize these ideas to
                      prepare understudies to enhance farming efficiency.
                    </p>
                  </div>
                </div>
                <div id="section-6" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Courses &amp; Eligibility</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      <strong>B. Sc: </strong>Student must have passed 12th in
                      science stream, and must have cleared the Entrance Exam.
                    </p>
                  </div>
                </div>
                <div id="section-7" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Course Curriculum</span>
                  </h2>
                  <div className="coursecontdes">
                    <ul>
                      <li>Basic Science &amp; Humanities</li>
                      <li>Agricultural Economics</li>
                      <li>Agricultural Engineering</li>
                      <li>Agricultural Entomology</li>
                      <li>Agricultural Extension</li>
                      <li>Agronomy</li>
                    </ul>
                  </div>
                </div>
                <div id="section-8" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Career Prospect</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      A Graduate from B.Sc Agriculture can get jobs at the
                      following designation:
                    </p>

                    <ul>
                      <li>Agriculture officer</li>
                      <li>Assistant Plantation Manager</li>
                      <li>Agricultural Research Scientist</li>
                      <li>Agriculture Development Officers</li>
                      <li>Agriculture Technician</li>
                      <li>Agriculturists</li>
                      <li>Business Development Executive</li>
                      <li>Marketing Executive</li>
                    </ul>
                  </div>
                </div>
                <div id="section-9" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Pay &amp; Remuneration</span>
                  </h2>
                  <div className="coursecontdes">
                    <p>
                      Expected Salary for fresher may be around Rs. 15,000 -
                      20,000/- per month.
                    </p>
                  </div>
                </div>
                <div id="section-11" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Top Colleges in India</span>
                  </h2>
                  <div className="coursecontdes">
                    <ul>
                      <li>Bihar Agricultural University, Bhagalpur</li>
                      <li>Punjab Agricultural University, Ludhiana</li>
                      <li>
                        Jawaharlal Nehru Krishi Vishwa Vidyalaya, Jabalpur
                      </li>
                      <li>Bharti Vidyapeeth University, Pune</li>
                      <li>Sivaji University, Kolhapur</li>
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
                      to="http://www.rallis.co.in"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/rallies-india-limited.jpg"
                        alt=""
                      />
                      <p>Rallies India Limited</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="http://www.advantaindia.com/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/advanta-limited.jpg"
                        alt=""
                      />
                      <p>Advanta Limited</p>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="http://www.nationalagro.com/"
                      target="_blank"
                      className="clearfix"
                    >
                      <img
                        src="https://www.careerpotli.com/afterrecruitmentimage/national-agro-industries.jpg"
                        alt=""
                      />
                      <p>National Agro Industries</p>
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
export default BOScienceAgriculture;
