import React, { Component } from "react";
import { Link } from "react-router-dom";
class JIPGMER extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/jpigmer.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Institute of PostGraduate Medical Education & Research</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  An Instituation
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 8 in Medical 
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
                      Jawaharlal Institute of Postgraduate Medical Education & Research is situated in Puducherry in Pondicherry state of India. Established in 1823, it is accredited from Medical Council of India (MCI) and it is affiliated to Pondicherry University. JIPMER, Puducherry offers 14 courses across 4 streams namely Science, Medical, Nursing, Paramedical and across 4 degrees like BSc, MBBS, MSc, MD. JIPMER campus is spread over 195 Acres. Hostel facility is not available for its students.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>Awards and Rankings</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    A number of scientific conferences/workshops/seminars are held in the Institute throughout the year. To encourage students in their academic endeavors, a number of awards have been instituted. The prestigious award for the undergraduate is best outgoing graduate student award. These awards are given annually on Institute day. Besides curricular activities for the students, extracurricular activities are organized in the campus in the form of annual inter medical and sports meet.
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
export default JIPGMER;
