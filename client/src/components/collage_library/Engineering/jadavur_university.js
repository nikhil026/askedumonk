import React, { Component } from "react";
import { Link } from "react-router-dom";
class JADAV_UNI extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/jadav.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Jadavpur University</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  An University
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 14
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
                      Jadavpur University is a State University which was established in the year 1955 
                      and is located in Kolkata, West Bengal. The University is approved by UGC, AICTE, NCTE, and COA. 
                      It is also accredited with “Grade A” by NAAC.
                       Jadavpur University courses are offered through its Departments and Affiliated Colleges.
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                    <h2 className="heading-new">
                        <span>Jadavpur University Courses and Eligibility</span>
                    </h2>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>Undergraduate Courses Eligibility</span>
                        </h2>
                        <div className="container">
                            <p>
                            Jadavpur University Admission to the Undergraduate programs are offered to the candidates passing 10+2 (Relevant Stream) from a recognized board. The Eligibility criteria for taking admission in the undergraduate programs differ from course to course
                            </p>
                        </div>
                    </div>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>Postgraduate Courses Eligibility</span>
                        </h2>
                        <div className="container">
                            <p>
                            Jadavpur University Admission to the Postgraduate programs are open for the candidates passing Bachelor’s Degree Examination (Relevant Field) from a recognized Institute/ University. Admissions to the PG Courses depends upon the several eligibility 
                            </p>
                        </div>
                    </div>
                    <div id="section-5" className="detail-content coursedessside">
                        <h2 className="heading_res">
                            <span>M.Phil And Ph.D. Eligibility</span>
                        </h2>
                        <div className="container">
                            <p>
                            Jadavpur University Admission to M.Phil and Ph.D. programs are offered to the candidates who hold a Master’s Degree in the required field. However, the final selection of these research programs is done on the basis of Entrance Exam conducted by the University.
                            </p>
                        </div>
                    </div>
                </div>
              </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Jadavpur University Placements</span>
                  </h2>
                  <div className="container">
                    <p>
                    Jadavpur University Placements are offered to the candidates through its central Placement Cell which is dedicated to working as an interface between the job aspirants and the recruiting companies. Every year the Placement cell organizes campus recruitment activities with its partnered companies and industries. Several personal training and development programs are also organized to make the student's placement ready. Amazon, DCB Bank, and Deloitte are among the frequent recruiters at the university campus.
                    </p>
                  </div>
                </div>
              </div>
              
              <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Jadavpur University Scholarship</span>
                  </h2> 
                  <div className="container">
                    <p>
                    Jadavpur University offers various Scholarships to the candidates on Merit-cum-means basis. However, it also helps the candidates in availing the scholarships offered by the State and Central Government.
                    </p>
 
              </div>
              
              </div>
              </div>
            </div>
          </div>
    );
  }
}
export default JADAV_UNI;
