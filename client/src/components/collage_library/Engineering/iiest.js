import React, { Component } from "react";
import { Link } from "react-router-dom";
class IIEST extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img className="fit_center"
                  alt="Bachelor of Architecture"
                  src="/images/iiest.png"
                />
              </div>
              <div className="col-md-6 col-xs-10 clgprofiledes">
                <h3>Indian Institute of Engineering Science and Technology</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Private Institution
                </h6>
                <h6 className="locationclg">
                  <i className="fa fa-book" />
                  Rank: 19
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
                      IIEST often considered one of the best technical universities in India was established with the aim of providing quality higher education on par with international standards. 
                      IIEST University aims to impart futuristic technical education and instill high patterns of discipline through our dedicated staff, who shall set global standards, making our students
                       technologically superior and ethically strong, who in turn shall improve the quality of life of the human race.
                       The university currently offers undergraduate, postgraduate, integrated and research programs in the fields of Engineering, Technology, Applied Sciences, and Management.
                      </span>
                    </p>
                  </div>
                </div>
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIEST Courses</span>
                  </h2>
                  <div className="container">
                    <p>
                      <span style={{ "font-size": "14px" }}>
                      IIEST Provide Education in these fields-
                      </span>
                    </p>

                    <p>
                    <ul className="lister">
                        <li>B.Tech></li>
                        <li>M.Tech</li>
                        <li>MBA</li>                    </ul>
                    </p>
                  </div>
                </div>
                
                <div id="section-5" className="detail-content coursedessside">
                  <h2 className="heading-new">
                    <span>IIEST Ranking</span>
                  </h2>
                  <div className="container">
                    <p className="align-middle">
                    <table class="thead-dark">
                      <thead>
                        <tr>
                        <th scope="col">Magazine/ Body</th>
                          <th scope="col">Rank</th>
                          <th scope="col">Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>NIRF</td>
                          <td>19</td>
                          <td>2019</td>
                        </tr>
                        
                      </tbody>
                    </table>
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
export default IIEST;
