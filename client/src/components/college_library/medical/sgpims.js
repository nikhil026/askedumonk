import React, { Component } from "react";
import { Link } from "react-router-dom";
class SGPIMS extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/sgpims.webp"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Sanjay Gandhi PostGraduate Institute of Medical Science </h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  An Instituation
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 4 in Medical 
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
                      Sanjay Gandhi Postgraduate Institute of Medical Sciences is situated in Lucknow in Uttar Pradesh state of India. Established in 1983, it is accredited from Other SGPIMS campus is spread over 550 Acres. Hostel facility is not available for its students. Additional campus facilities such as Academic Zone, Boys Hostel, Canteen, Hospital, Library, Medical Facilities, Cls. Room, Placement, Residential Institute, Residential Zone are also there.
                      </span>
                    </p>
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
export default SGPIMS;
