import React, { Component } from "react";
import { Link } from "react-router-dom";
class KGMU extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/kgmu.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>King’s George Medical University </h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  An Instituation
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 10 in Medical 
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
                      King’s George Medical University is one of the renowned Medical Institutes in Northern India. The university is located in the heart city of the Uttar Pradesh state – Lucknow. The university was established in the year 1911 and recognized by University Grants Commission (UGC) & Medical Council of India (MCI). Prof DK Gupta is the current principal of the university.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>King George Medical University Courses and Admission</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    <table class="thead-dark">
                      <tbody>
                        <tr>
                          <td>Undergraduate courses</td>

                          <td>4</td>
                        </tr>
                        <tr>
                           <td>Postgraduate Courses</td>
                           <td>7</td>
                        </tr>
                        <tr>
                          <td>Ph.D. Courses</td>
                          <td>1</td>
                        </tr>                        
                      </tbody>
                    </table>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>King George Medical University Undergraduate Admission</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    King George Medical University offers a variety of programmes every year viz. UG programme Admission of eligible candidates to all the university courses is done on the basis of NEET exam i.e. taken up by the students nationwide. At least 50% marks in 10+2 in chemistry, biology, physics, and English. The duration of the course is for 3-4 years
                    </p>
                  </div>
                </div>
                
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>King George Medical University Postgraduate Admission</span>
                  </h2>
                 <div className="container">
                     <p>
                     In the case of PG courses such as M. CH, M.DS. and M.S admissions, the candidate must possess the graduate degree from a recognized university in India. Selection of candidates will be done on the basis of their performance in the CAT entrance exam conducted by the university.
                     </p>
                 </div>
                </div> 
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>King George Medical University M.Sc Admission</span>
                  </h2>
                 <div className="container">
                     <p>
                     The university offers the M.Sc program where Candidates should have minimum 50% (45% for SC/ST) in B.Sc (any discipline of life science) from a recognized university.
                     </p>
                 </div>
                </div> 
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>King George Medical University Ph.D. Admission</span>
                  </h2>
                 <div className="container">
                     <p>
                     Candidates who have completed their postgraduation in a relevant discipline or an equivalent qualification with a minimum aggregate of 60% or equivalent CGPA of any of the Universities incorporated by an act of the central or state legislature in India. They can pursue M.D + Ph. D by giving an entrance exam, followed by an interview with the university.
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
export default KGMU;
