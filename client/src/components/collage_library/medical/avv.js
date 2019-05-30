import React, { Component } from "react";
import { Link } from "react-router-dom";
class AVV extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/avv.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Amrita Vishwa Vidyapeetham </h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  An Instituation
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 5 in Medical 
                </h6>
              </div>
              <div className="col-md-4 col-xs-12 mt-15 blockbtn">
                <Link to="/medical" className="crssidebtn">
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
                      Amrita Vishwa Vidyapeetham is a private multi-disciplinary global Institute. This Institute has an association with more than 20 universities in order to promote research areas especially in Cybersecurity with further collaboration with European & Japanese studies. Amrita Vishwa Vidyapeetham, Coimbatore is the main campus of the Amirta Vishwa Vidyapeetham Group. The Institute provides various UG, PG, Doctoral and Diploma programs in multi specializations. Admission to all PG courses is based on the national level exams such as GATE, CAT, CMAT etc.  <br />
                      </span>
                    </p>
                    <p>
                    Amrita Vishwa Vidyapeetham has five campuses at different locations with more than 18000 students studying in various disciplines.<br />
                    </p>
                    <p>
                        <ul className="lister">
                            <li>Amrita Vishwa Vidyapeetham Amritapuri (Kollam)</li>
                            <li>Amrita Vishwa Vidyapeetham Bengaluru Campus</li>
                            <li>Amrita Vishwa Vidyapeetham Coimbatore (Ettimadai)</li>
                            <li>Amrita Vishwa Vidyapeetham Kochi Campus  </li>
                            <li>Amrita Vishwa Vidyapeetham Mysore Campus</li>
                        </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Amrita Vishwa Vidyapeetham Coimbatore Courses and Admission</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    The selection of UG courses is based on the marks obtained by the candidate in the Entrance Exam that is conducted by the department of the course opted by the candidate. The shortlisted students will then go through a counseling session and an interview. The selection of PG courses would mainly be on the basis of marks scored by the candidate in the previous qualifying degree. 
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Amrita Vishwa Vidyapeetham Placements</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    Amrita Vishwa Vidyapeetham follows these aspects to provide better placement services to the students:
                    </p>
                    <p>
                        <ul className="lister">
                            <li>Ensuring proper summer & winter internships for students of all departments such as Engineering, Arts & Medical.</li>
                            <li>Quality enhancement in terms of Job opportunities, visiting companies with relevance & highest & average salaries offered by those companies.</li>
                        </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default AVV;
